/*
 * jQuery Image Gallery Demo JS 3.0.1
 * https://github.com/blueimp/jQuery-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true, regexp: true */
/*global $ */

$(function () {
    'use strict';

// START A LOADING SPINNER HERE
    var opts = {
  lines: 13 // The number of lines to draw
, length: 15 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: .6 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'relative' // Element positioning
}

   var target = document.getElementById('spinner');
    var spinner = new Spinner(opts).spin(target);

// Load images from the libquest selfie gallery 
    $.ajax({
        url: 'model.class.getImages.php?action=get',
        data: "tmp",
        dataType: "JSON",
          
success: function(data){

var linksContainer = $('#links');


var j = 0;
var myTotal = data.imgData.length ;




var width = $(window).width(), height = $(window).height();


//Conditional for detecting viewport
if ((width <= 580))  {
//if for <= than mobile viewport
for(var i =0; i < data.imgData.length;i++)
{
    
  //process the JSON data to get our image paths 
  var img1, img2, groupName, date;

  var item = data.imgData[i];
  
  img1 = item.img1;
  img2 = item.img2;
  groupName = item.groupName;
  date = item.date;

//remove the a href to prevent slideshow
var myHtml = "<img src='"+img1+"' style='border-radius:180px; width:200px; height:200px;margin-bottom:.5rem; box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16), 0px 2px 10px 0px rgba(0, 0, 0, 0.12);' />";


$(linksContainer).append(myHtml);


}//close mobile viewport


if(i===data.imgData.length){
spinner.stop();

}

} else {



//if for => than tablet viewport
for(var i =0; i < data.imgData.length;i++)
{
    
  //process the JSON data to get our image paths 
  var img1, img2, groupName, date;

  var item = data.imgData[i];
  
  img1 = item.img1;
  img2 = item.img2;
  groupName = item.groupName;
  date = item.date;


var myHtml = "<span style='position:relative; width:100%; margin-right:5px; '><a data-dialog='' title='Selfie Taken By Group: "+groupName+" on "+date+" ' href='"+img2+"' ><img src='"+img1+"' style='border-radius:180px; width:200px; height:200px;'></img></a></span>";


$(linksContainer).append(myHtml);




}

if(i===data.imgData.length){
spinner.stop();

}//close tablet viewport






}

















    },//close success

    error: function(){
            
            alert('There was an error handeling your request!');
        }




    });//close ajax
    

   

    // Initialize the theme switcher:
    $('#theme-switcher').change(function () {
        var theme = $('#theme');
        theme.prop(
            'href',
            theme.prop('href').replace(
                /[\w\-]+\/jquery-ui.css/,
                $(this).val() + '/jquery-ui.css'
            )
        );
    });

    // Initialize the effect switcher:
    $('#effect-switcher').change(function () {
        var value = $(this).val();
        $('#blueimp-gallery-dialog').data({
            show: value,
            hide: value
        });
    });

    // Initialize the slideshow button:
    $('#slideshow-button')
        .button({icons: {primary: 'ui-icon-image'}})
        .on('click', function () {
            $('#blueimp-gallery-dialog .blueimp-gallery')
                .data('startSlideshow', true);
            $('#links').children().first().click();
             return false ;
        });


});//close base function
