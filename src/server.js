const express = require("express");
const server = express();

// configurar pasta pública

server.use(express.static("public"));

// habilitar req.body

server.use(express.urlencoded({extended: true}));

// utilizando template engine

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurando caminhos da minha aplicação

// página inicial
// req: requisição
// res: resposta

server.get("/", (req, res) => {
    return res.render("index.html");
});

server.get("/perfil", (req, res) => {
    return res.render("perfil.html");
});

server.get("/livros", (req, res) => {
    return res.render("livros.html");
});

server.get("/leitura", (req, res) => {
    return res.render("leitura.html");
});

server.get("/review", (req, res) => {
    return res.render("review.html");
});

server.get("/ranking", (req, res) => {
    return res.render("ranking.html");
});

server.get("/conquistas", (req, res) => {
    return res.render("conquistas.html");
});

server.get("/faq", (req, res) => {
    return res.render("faq.html");
});

// ligando o servidor

server.listen(3000);