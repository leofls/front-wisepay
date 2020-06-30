const btn = document.querySelector(" #toggle-btn ")
const menu = document.querySelector(".sidebar")

const selecteditem = document.querySelector('.cad')

// constantes do modal
const buttonSearch = document.querySelector(".box-header-t-right a.buscar")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

// modal config
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})


// quando clicar no botão toggle

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    // menu.classList.toggle('menu-colapsed')

    document.querySelector('body').classList.toggle('body-expanded')  

})

// quando clicar em cadastro mostrar submenu
selecteditem.addEventListener('click', () => {
    selecteditem.classList.toggle('selected')
    // selecteditem.classList.remove('active')
    menu.classList.toggle('hidden')
    document.querySelector('body').classList.toggle('body-expanded')  

})

// inserindo o menu active
let linkMenu = document.querySelectorAll('.item-menu')

linkMenu.forEach(function(currentValue, index, array) {
    currentValue.addEventListener("click", () => {
        currentValue.classList.add("active")


        linkMenu.forEach((elemento) =>{
            elemento.classList.remove('active')
        })
        currentValue.classList.add('active')

    })
})