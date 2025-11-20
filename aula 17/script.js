 listaDeCompras = ["Banana", "Whey", "Ovo", "Leite", "Arroz"]

// adiciona item
listaDeCompras.push("Creatina")

// remove item
listaDeCompras.shift(0)

console.log(listaDeCompras)

let itens = listaDeCompras.filter(item => item.length > 3)

console.log(itens)

// strings
const frase = " JavaScript é uma linguagem poderosa! "

// remove os espaços em branco
console.log(frase.trim())

// divide a frase
console.log(frase.split(" "))
