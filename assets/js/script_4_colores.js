let div1 = document.getElementById("primerDiv")
let div2 = document.getElementById("segundoDiv")
let div3 = document.getElementById("tercerDiv")
let div4 = document.getElementById("cuartoDiv")

function pintar(element){
    element.style.backgroundColor = 'black';
}
div1.addEventListener('click', () => {
    pintar(div1)
})
div2.addEventListener('click', () => {
    pintar(div2)
})
div3.addEventListener('click', () => {
    pintar(div3)
})
div4.addEventListener('click', () => {
    pintar(div4)
})