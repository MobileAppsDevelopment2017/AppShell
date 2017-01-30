

//play Once

  if (localStorage.getItem("RLFPlayOnce") === null) {

      localStorage.setItem('RLFPlayOnce', 'true');

      swipeFlash();
  }else{



  }




function swipeFlash() {
  //flash primary navigation elements


  setTimeout(function() {
    $(".m2right div.card.cardBgColor2").animate({
      backgroundColor: '#7a559a;',
      left: '-20px'
    }, 400).animate({
      backgroundColor: '#cde0dc',
      left: '0px'
    }, 300);
  }, 2000);

  /*https://github.com/miniMAC/magic*/
  setTimeout(function() {
    $(".card1").addClass('magictime puffIn');
  }, 400);
  setTimeout(function() {
    $(".card2").addClass('magictime puffIn');
  }, 600);
  setTimeout(function() {
    $(".card3").addClass('magictime puffIn');
  }, 800);
}
