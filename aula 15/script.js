// cria objeto
let livro = {
    titulo: "Entendendo Algoritmos",
    autor: "Aditya Bhargava",
    paginas: 264,
    disponivel: "Sim",
}

// imprime mensagem
console.log(livro.titulo)
console.log(livro["autor"])

// adiciona editora
livro.editora = "Novatec"

// adiciona metodo detalhes
livro.detalhes = function() {
    return `O livro ${this.titulo}, escrito por ${this.autor}, possui ${this.paginas} páginas`
}

console.log(livro.detalhes())



//cria biblioteca
let biblioteca = {
    livros: [
        "The Witcher: O Último Desejo",
        "Logica de Programação e Algortimos com Javascript",
        "Código Limpo",
        "Meditações",
        "O Retrato de Dorian Gray"
    ]
}

for(let i = 0; i < biblioteca.livros.length; i++){
    console.log(biblioteca.livros[i])
}