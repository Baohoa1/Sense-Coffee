jQuery(function($){

  console.log('ok');
  const fish_red = $('#red');
  const fish_blue = $('#blue');
  const win = $(window);
  const concept = $('#concept');

  win.scroll(function(){
    if(win.scrollTop() > concept.offset().top){
      console.log('ok');
      fish_red.fadeIn(2000).animate({
        top: 0,
        'opacity': 1
      }, 2100);
      
      fish_blue.fadeIn(2000).animate({
        top: 50,
        'opacity': 1
      }, 2300);
    }
  });

  
  

});