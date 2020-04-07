// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
$.ajax({
    url: 'https://swapi.co/api/films/',
    dataType: 'json',
    success: function(resposta) {
      console.log(resposta);

      let titulos = resposta.results;
      
      titulos.forEach(element => {
          $('<li>'+ element.title + '</li>').appendTo('#filmes ul');
      });

      
    }
  });