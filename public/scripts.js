const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

// Seleciona e Verifica se o item do menu está selecionado, aplicando o "active"
for (item of menuItems){
    if (currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}


// Jquery para realizar a paginação da Ferramenta Web
$(window).ready(() => {
    $("#posts_table,#albums_table,#todos_table").DataTable({
        "searching": false,
        "bPaginate": true,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false
    })
})  


const selectCheckInput = document.getElementById('check') 
const selectNotCheckInput = document.getElementById('not_check')

const selectAllTr = document.querySelectorAll('tbody tr')
const selectTagTd= document.querySelectorAll('td img')

// Função para realiza os filtros dos Todos
function filterTodos(){

    /* Verifica se o Checkbox com as Tasks finalizadas está marcado e aplica 
    a formatação para aparecer apenas as tarefas finalizadas*/ 
    if (selectCheckInput.checked && selectNotCheckInput.checked == false) {
        for (let i = 0; i < selectTagTd.length; i++) {
           if (selectTagTd[i].src == 'http://localhost:3001/not_check.jpg') {
               selectAllTr[i].style.display = 'none'
           } else {
               selectAllTr[i].style.display = ''
           }
        }

    /* Verifica se o Checkbox com as Tasks NÃO finalizadas está marcado e aplica 
    a formatação para aparecer apenas as tarefas NÃO finalizadas*/  
    } else if (selectNotCheckInput.checked && selectCheckInput.checked == false) {
        for (let i = 0; i < selectTagTd.length; i++) {
            if (selectTagTd[i].src == 'http://localhost:3001/check.png') {
                selectAllTr[i].style.display = 'none'
            } else {
                selectAllTr[i].style.display = ''
            }

         }

    // Caso todas as Checkboxes estejam marcadas ou desmarcadas, aplica-se a regra para aparecer todas as Tasks
    } else {
        for (let i = 0; i < selectTagTd.length; i++) {
            
            selectAllTr[i].style.display = ''
            
         }
    }

}




































































