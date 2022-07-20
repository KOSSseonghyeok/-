var express = require("express");
var app = express();
const port = 3000;
var fs = require("fs");
var template = require("./lib/template.js");
var path = require("path");
var sanitizeHtml = require("sanitize-html");
var qs = require("querystring");
const { response } = require("express");
var bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
var compression = require("compression");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get("*", function (request, response, next) {
  fs.readdir("./data", function (error, filelist) {
    request.list = filelist;
    next();
  });
});
//라우팅이 뭔가요? 못 들음ㅠ.ㅠ
//express궁금

app.get("/", function (request, response) {
  var title = "주소록을 생성해주세요♥";
  var description = "생성하라고 ㅆ";
  var list = template.list(request.list);
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}
    <img src="/images/하시모토칸나.jpg.crdownload" style="width:300px; display:block; margin-top:10px;">`,
    `<a href="/create">create</a>`
  );
  response.send(html); //send가 end하고 writehead합친거!!!
});

//params가 pageid가 아닌가? params는 {pageid:html} 이런 거
app.get("/page/:pageId", function (request, response, next) {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    if (err) {
      next(err);
    } else {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ["h1","ul","li"],
      });
      var list = template.list(request.list);
      var html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
              <a href="/update/${sanitizedTitle}">update</a>
              <form action="/delete_process" method="post">
                <input type="hidden" name="id" value="${sanitizedTitle}">
                <input type="submit" value="delete">
              </form>`
      );
      response.send(html);
    }
  });
});

app.get(`/create`, function (request, response) {
  var title = "WEB - create";
  var list = template.list(request.list);
  var html = template.HTML(
    title,
    list,
    `
        <form action="/create_process" method="post">
          <p><input type="text" name="myname" placeholder="이름"></p>
          <p><textarea name="phone" placeholder="전화번호"></textarea></p>
          <p><textarea name="number" placeholder="학번"></textarea></p>
          <p>
            <textarea name="mail" placeholder="이메일"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
      `,
    ""
  );
  response.send(html);
});

app.post("/create_process", function (request, response) {
  var post = request.body;
  var myname = post.myname;
  var phone = post.phone;
  var number = post.number;
  var mail = post.mail;
  var description = `<ul>
  <li>${phone}</li>
  <li>${number}</li>
  <li>${mail}</li>
  </ul>
  `
  fs.writeFile(`data/${myname}`, description, "utf8", function (err) {
    response.redirect( `/?id=${myname}` );
  });
});
//pageId는 어디서 온 것이고 params는
app.get(`/update/:pageId`, function (request, response) {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    var title = request.params.pageId;
    var list = template.list(request.list);
    var html = template.HTML(
      title,
      list,
      `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${myname}">
            <p><input type="text" name="title" placeholder="title" value="${myname}"></p>
            <p>
              <textarea name="phone" placeholder="전화번호">${phone}</textarea>
            </p>
            <p>
            <textarea name="number" placeholder="학번">${number}</textarea>
          </p>
          <p>
          <textarea name="mail" placeholder="이메일">${mail}</textarea>
        </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `,
      `<a href="/create">create</a> <a href="/update?id=${myname}">update</a>`
    );
    response.send(html);
  });
});

app.post("/update_process", function (request, response) {
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function (error) {
    fs.writeFile(`data/${title}`, description, "utf8", function (err) {
      response.redirect(`/?id=${title}`);
    });
  });
});

app.post("/delete_process", function (request, response) {
  var post = request.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function (error) {
    response.redirect("/");
  });
});

app.use(function (req, res, next) {
  res.status(404).send("ㅋㅋ 없어짐ㅅㄱㅇ");
});
app.use(function (req, res, next) {
  res.status(500).send("ㅋㅋ 없어짐ㅅㄱㅇ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
