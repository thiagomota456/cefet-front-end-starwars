// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
$.ajax({
    url: 'https://swapi.co/api/films/',
    dataType: 'json',
    success: function(resposta) {
      console.log(resposta.results)
      let titulos = resposta.results;
      let idnumber = 0;
      titulos.forEach(element => {
          $('<li id=\"' + (idnumber++) + '\"' 
                        +'data-id-episodio=\"'+ element.episode_id +'\">Episode '+ element.episode_id + ': ' + element.title + '</li>').appendTo('#filmes ul');
      });

    }
  });

  $(document).on('click', '#filmes ul li', function(){
    var plant = document.getElementById(0);
    window.alert(plant.getAttribute(data-id-episodio))
  })