// alert("ola mundo")
// let teste = prompt("digite algo")
// alert(teste)

function testTexto() {
    document.getElementById("titulo").innerHTML += " Boa tarde"

}
function testeColor() {
    const titulo = document.getElementById("titulo")
    titulo.style.color = "red"
}

function reset() {
    document.getElementById("titulo").innerHTML = "Bem-vindo ao Nosso Site"


}

function testeInput() {
    document.getElementById("input").value = "Tarde"
}
