function limparInputs() {
    let certeza = confirm("Deseja realmente limpar os campos?");
    if (certeza) {
        document.getElementById("inputCEP").value = "";
        document.getElementById("inputEstado").value = "";
        document.getElementById("inputCity").value = "";
        document.getElementById("inputAddress2").value = "";
        document.getElementById("inputAddress").value = "";
        document.getElementById("inputPassword4").value = "";
        document.getElementById("inputEmail4").value = "";

    }
}

function corLabelUm() {
    document.getElementById("labelsete").style.color = "yellow";
}

function corLabelDois() {
    document.getElementById("labelseis").style.color = "yellow";
}

function corLabelTres() {
    document.getElementById("labelcinco").style.color = "yellow";
}

function corLabelQuatro() {
    document.getElementById("labelquatro").style.color = "yellow";
}

function corLabelCinco() {
    document.getElementById("labeltres").style.color = "yellow";
}

function corLabelSete() {
    document.getElementById("labelum").style.color = "yellow";
}

function colorBlack() {
    document.getElementById("labelsete").style.color = "white";
}

function colorBlackum() {
    document.getElementById("labelseis").style.color = "white";
}

function colorBlackdois() {
    document.getElementById("labelcinco").style.color = "white";
}

function colorBlacktres() {
    document.getElementById("labelquatro").style.color = "white";
}

function colorBlackquatro() {
    document.getElementById("labeltres").style.color = "white";
}

function colorBlackcinco() {
    document.getElementById("labelum").style.color = "white";
}


function limparinput(input) {
    input.value = "";
}


function popularinput(id_input, escritonolabel) {
    document.getElementById(id_input).value = escritonolabel;
}