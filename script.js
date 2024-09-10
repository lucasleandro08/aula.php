function filterBooks() {
    // Obtém o valor do input de pesquisa
    let input = document.getElementById('searchInput').value.toLowerCase();
    // Obtém todos os elementos de livros
    let books = document.getElementsByClassName('book-item');

    // Loop pelos livros para filtrar
    for (let i = 0; i < books.length; i++) {
        // Obtém o título e o autor do livro
        let title = books[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let author = books[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        // Verifica se o título ou autor correspondem ao texto de pesquisa
        if (title.includes(input) || author.includes(input)) {
            books[i].style.display = ''; // Mostra o livro
        } else {
            books[i].style.display = 'none'; // Esconde o livro
        }
    }
}
