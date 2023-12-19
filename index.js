var setaesquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:Flex"
    setadireita.style ="display:none"
    setaesquerda.style="display:Flex; margin-top: 55px"

}

function RolarParaEsquerda() {
    Leonardo.style ="display:Flex"
    Bruna.style ="display:none"
    setadireita.style ="display:flex; margin-top: 55px"
    setaesquerda.style="display:none"
}