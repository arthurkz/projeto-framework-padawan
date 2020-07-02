const express = require('express') // Framwork "express" importada para fazer toda a construção da ferramenta

const Controller = require('./src/controllers/Controllers') // Importação dos "Controllers" para aplicação nas rotas

const routes = express.Router() // Importação de um método do Express que auxilia na manipulação das nossas rotas


// Página inicial / Começará sempre no posts
routes.get('/', function(req,res){
    return res.redirect('/posts')
})

routes.get('/posts', Controller.getPosts) // Rota para acessar e fazer a renderização dos POSTS

routes.get('/albums', Controller.getAlbums) // Rota para acessar e fazer a renderização dos ALBUMS

routes.get('/todos', Controller.getTodos) // Rota para acessar e fazer a renderização dos TODOS

module.exports = routes // Exporta o nosso método "Router()"