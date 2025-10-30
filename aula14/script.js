// condicionais
let nota = 50

if (nota < 50) {
    console.log(`Reprovado`)
} else if (nota >= 50 && nota < 70) {
    console.log(`Recuperação`)
} else {
    console.log(`Aprovado`)
}

let dia = 3; 

switch (dia) {
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
    case 5:
        console.log("Maio")
    case 6:
        console.log("Junho")
    case 7:
        console.log("Julo")
    case 8:
        console.log("Agosto")
    case 9:
        console.log("Setembro")
    case 10:
        console.log("Outubro")
    case 11:
        console.log("Novembro")
    case 12:
        console.log("Dezembro")
}

// loops
for (let i = 0; i <= 20; i++){
    console.log(`Número ${i}`)
}

let cidades = ["Belo Horizonte", "Canadá", "Rio de Janeiro"]

for (let i = 0; i < cidades.length; i++){
    console.log(`${cidades[i]}`)
}

// numeros decrescentes
for (let i = 10; i >= 0; i--){
    console.log(`${i}`)
}