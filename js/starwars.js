// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

var audio = new Audio('../audio/tema-sw.mp3');
var isPlaying = false;
var data = []
const numerosRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

function playAndConfigureAudio(){
  if(!isPlaying){
    audio = new Audio('../audio/tema-sw.mp3');
    audio.play();
    isPlaying = true;
  }
}

function ordenarData(a, b) {
  if (a.episode_id  > b.episode_id ) {
    return 1;
  }
  if (a.episode_id < b.episode_id) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

$.ajax({
    url: 'https://swapi.co/api/films/',
    dataType: 'json',
    success: function(resposta) {
      
      data = resposta.results;
      data.sort(ordenarData)
      data.forEach(element => {
          $('<li data-id-episodio=\"'+ element.episode_id +'\">Episode '+ numerosRomanos[element.episode_id-1] + ': ' + element.title + '</li>').appendTo('#filmes ul');
      });
    }
  });

  $(document).on('click', '#filmes ul li', function(e){
    playAndConfigureAudio();
    let $clicada = $(e.currentTarget);
    let idItem = $clicada.attr('data-id-episodio');
    
    data.forEach( element => {

      if(element.episode_id == idItem){

        let title = e.target.outerText.split(":")
        $('#intro').text(title[0] + '\n' + title[1].toUpperCase() + '\n\n' + element.opening_crawl);
      }
    });
  })

