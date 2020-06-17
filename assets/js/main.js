////////////////////////////////////////////////
// Lev1_1
let num = document.getElementById("num")
let result = document.getElementById("result")

function multiply() {
    result.innerHTML = num.value * 2
}

////////////////////////////////////////////////
// Lev1_2
let jahr = document.getElementById("jahr")
let result_alter = document.getElementById("result_alter")
let now = new Date()
let year = now.getFullYear()

function alter() {
    result_alter.innerHTML = year - jahr.value
}

////////////////////////////////////////////////
// Lev1_3
let alt1 = document.getElementById("alt1")
let alt2 = document.getElementById("alt2")
let result_d = document.getElementById("result_d")

function differenz() {
    result_d.innerHTML = alt1.value - alt2.value
}