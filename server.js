const express = require('express') // Framwork "express" importada para fazer toda a construção da ferramenta

const nunjucks = require('nunjucks') // "Template Engine" para auxiliar o JavaScript a realizar as regras e verificações

const routes = require('./routes') // Importação do método "Router()" localizado no nosso arquivo "routes.js"

const server = express() // Adicionando as funções do "express" a uma variável

server.use(express.static('public')) // Torna todos os arquivos da pasta "Public" estáticos, na qual eles podem ser mostrados ou carregados separadamente

server.use(routes) // Aplica o Método "Router()" nesse arquivo "server.js"


// Realiza toda configuração do Nunjucks, que será a nossa "Template Engine"

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

//____________________________________________________________________________

// Porta onde será alocado nossa ferramenta
server.listen(3000, () => {
    console.log("server is running");
    
})