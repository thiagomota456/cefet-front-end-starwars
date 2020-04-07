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

      let titulos = resposta.results
      let index = 4
      var movies  = ''
      titulos.forEach(element => {
          movies = '<li>'+ element.title + '</li>'
          //$('<div>'+ element.title + '</div>').appendTo(document.body);
          $('ul li').html(element)
      });
      //$local_de_filme = $("#filmes ul")

      
    }
  });