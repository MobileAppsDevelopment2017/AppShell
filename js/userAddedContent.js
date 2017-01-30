
$(document).on('click','.addTheme', {} ,function(e){
var themeData = $('textarea#themeData').val();
addMyEssayThemes(themeData);
return false;
e.preventDefault();
});


function addMyEssayThemes(themeData){
//alert("add my essay themes");
var themeData ;
var myEssayThemeNum ;
var numofThemes ;
var numofThemes = localStorage.getItem('themeCount');
var i ;
//alert("Num of Themes Added:"+numofThemes);
    //a counter to keep track of where we are
    if(numofThemes=="" || numofThemes==0 || numofThemes==null ){
      var myEssayThemeNum = 1;
      var i = myEssayThemeNum ;
      localStorage.setItem('theme'+i, themeData);
      localStorage.setItem('themeCount', i);
      //alert("add new theme no existing ones detected");

      $('textarea#themeData').val('');

      getThemes();

    }else if(numofThemes>=1){

      var numofThemes = localStorage.getItem('themeCount');
      numofThemes ++;
      var i = numofThemes ;
      localStorage.setItem('theme'+i, themeData);
    //  alert("add new theme number: "+i);
      localStorage.setItem('themeCount', i);
      setTimeout(function(){
        $('textarea#themeData').val('');
        getThemes();
        swiper.slideTo( $('.step1b').index(),1000,false );
      }, 500);


    }

}//end function




//get userAddedContent themes

function getThemes(){





var numofThemes = localStorage.getItem('themeCount');

if(numofThemes=="" || numofThemes==0 || numofThemes==null ){

}else{

$('span#userThemes').empty();

}

var contentTextflowBox3_start = '<div class="contentTextflowBox4"><div><a id="deleteTheme" href="#"><i style="font-size:18px" class="material-icons">&#xE872;</i></a></div><div><a id="editTheme" href="#"><i style="font-size:18px" class="material-icons">&#xE150;</i></a></div><p class="flow-text contentText">';
var contentTextflowBox3_end = '</p></div>';

console.log('number of themes detected:'+numofThemes);
  //for (var i = 0; i < numofThemes; i++){
  var i = 1;
while(i<=numofThemes){
    //inject the content into the DOM
    //$('span#userThemes').append(contentTextflowBox3_start+i+'. '+localStorage.getItem('theme'+i)+contentTextflowBox3_end);
    $('span#userThemes').prepend(contentTextflowBox3_start+''+localStorage.getItem('theme'+i)+contentTextflowBox3_end);

console.log('theme '+i+ ' = '+localStorage.getItem('theme'+i));
    i++;
}

}
