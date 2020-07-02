// Importei o AXIOS, API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do Node.js
const axios = require('axios')

module.exports = {
    // Essa função trabalha com a API disponibilizada e aplica o conceito de filtros para os POSTS
    async getPosts(req,res){

        // Utilizando uma "ASYNC FUNCTION" eu utilizo o axios para puxar nossa API
        const apiPosts = await axios.get('https://jsonplaceholder.typicode.com/posts') 

        // Variável irá receber o Array data da nossa API
        const postsContent = apiPosts.data

        // No corpo do nosso link, pega a propriedade filter e declaro na variavel
        const { filter } = req.query
        
       // Faço com que essa variável "filter" se torne uma String para utilizar em uma condição
        const filterStringfy = String(filter)
        

        // Regra para realização do Filtro dos POSTS
        if (filter) {
            let postContentFiltered = []
            let postsTitle = ''

            // Verifica cada elemento da minha Array "data" se ela possui o valor do filtro escolhido
            for (let i = 0; i < postsContent.length; i++) {   
                postsTitle = postsContent[i].title
                let stringfyPostTitle = String(postsTitle)

                // Condicional que fara a verificação do valor informado pelo usuário se possui nos titulos dos meus POSTS
                if (stringfyPostTitle.includes(filterStringfy)) {
                    postContentFiltered.push(postsContent[i])
                }
            }
            
            // Faz a renderização da minha página, mostrando apenas os valores que estão de acordo com o filtro dos POSTS   
            return res.render("posts/index", {posts: postContentFiltered})

        } else {
            return res.render("posts/index", {posts: postsContent})    
        }    



    },

    // Essa função trabalha com a API disponibilizada e aplica o conceito de filtros para os ALBUMS
    async getAlbums(req,res){

        // Utilizando uma "ASYNC FUNCTION" eu utilizo o axios para puxar nossa API
        const apiAlbums = await axios.get('https://jsonplaceholder.typicode.com/albums')
    
        // Variável irá receber o Array data da nossa API
        const albumsContent = apiAlbums.data

        // No corpo do nosso link, pega a propriedade filter e declara na variavel
        const { filter } = req.query

       // Faço com que essa variável "filter" se torne uma String para utilizar em uma condição
        const filterStringfy = String(filter)
        

        // Regra para realização do Filtro dos ALBUMS
        if (filter) {
            let albumsContentFiltered = []
            let albumsTitle = ''


            // Verifica cada elemento da minha Array "data" se ela possui o valor do filtro escolhido
            for (let i = 0; i < albumsContent.length; i++) {   
                albumsTitle = albumsContent[i].title
                let stringfyAlbumsTitle = String(albumsTitle)


                // Condicional que fara a verificação do valor informado pelo usuário se possui nos titulos dos meus POSTS
                if (stringfyAlbumsTitle.includes(filterStringfy)) {
                    albumsContentFiltered.push(albumsContent[i])
                }
            }
            
            // Faz a renderização da minha página, mostrando apenas os valores que estão de acordo com o filtro dos ALBUMS
            return res.render("albums/index", {albums: albumsContentFiltered})

        } else {
            return res.render("albums/index", {albums: albumsContent})    
        }        
    },

    // Essa função trabalha apenas com a API disponibilizada
    async getTodos(req,res){
        const apiTodos = await axios.get('https://jsonplaceholder.typicode.com/todos')
    
        const todosContent = apiTodos.data        

        return res.render("todos/index", {todos: todosContent})      
    },
    
}
