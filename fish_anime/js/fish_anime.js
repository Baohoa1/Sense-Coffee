jQuery(function($){

  // console.log('ok');
  const fish_red = $('#fish-red');
  const fish_blue = $('#fish-blue');
  const win = $(window);
  const brand = $('#brand');

  win.scroll(function(){
    if(win.scrollTop() > brand.offset().top - window.innerHeight*0.5){
      // console.log('ok');
      fish_red.fadeIn(3000).animate({
        top: 0,
        'opacity': 1
      }, 3000);
      
      fish_blue.fadeIn(3000).animate({
        top: 0,
        'opacity': 1
      }, 3000);
    }
  });

  
  

});