const prompt = require("prompt-sync")()
const soma = document.querySelector("#soma")
const sub = document.querySelector("#sub")
const multi = document.querySelector("#multi")
const divi = document.querySelector("#divi")
const resto = document.querySelector("#resto")
const expo = document.querySelector("#expo")

let x = 10, y = 2

soma.innerText = `Soma: ${x + y}`
sub.innerText = `Subtração: ${x - 2}`
multi.innerText = `Multiplicação: ${x * 2}`
divi.innerText = `Divisão: ${x / 2}`
resto.innerText = `Resto: ${x % 2}`
expo.innerText = `Expo: ${x ** 2}`

// imprime qual é o maior ou o meno
if (x > y){
    console.log(`A variável x cujo valor é: ${x} é maior`)
} else {
    console.log(`A variável y cujo valor é?${y} é maior`)
}

// utilizando operadores lógicos
if (x){
    console.log("A variável X é falsa")
} else {
    console.log(`A variável X é verdadeira`)
}