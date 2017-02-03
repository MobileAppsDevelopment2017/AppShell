//initialise register screen on first run
//removed--getScreenContent('_register');
changeAppPage("_register");

$(".navBack").css("visibility", "hidden");



(function($){
  $(function(){



        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        //$('.modal').modal();


 //$('.modal-trigger').leanModal();
//initialise main menu on start
 //$('.modal').modal();
$('select').material_select();
$('.button-collapse').sideNav();
    //$('.button-collapse').collapsible();
    //$('.button-collapse').sideNav('show');

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
