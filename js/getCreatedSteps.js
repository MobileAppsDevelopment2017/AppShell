

  function getCreatedSteps(){


    var contentLoaded ;

    $("#stepsContent").empty();

    var baseURL = "https://u0018370.scm.tees.ac.uk/Yii/PoS/stepImages/";


  console.log("screen content injection for "+screen);

  $.get('https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/mAD17Steps/GetRecipeSteps', function(data) {
    //inject the content into the DOM



                   //inspect the incoming data objects
                   console.log(data);

                   var stepsContents = [];


                   var j = 1;
                   var dataLength = data.length;
                   //alert(dataLength);


                   for (var i = 0; i < data.length; i++) {


                       var item = data[i];


                       var step_id = item.stepd_id;
                       var stepCopy = item.stepCopy;
                       var stepImage = item.stepImage;






                       //var tripDetails = '<li>Trip: ' + Itin_id + '&nbsp;&nbsp;&nbsp;<span class="Itin">Trip Name: ' + tripName + '</span><ul>' + displaySectors + '</ul></li>';


                       var stepsContent = '<div class="row"><div class="col s12"><div class="card small"><div class="card-image"><img class="stepsPreviewImg" src="'+baseURL+stepImage+'"></div><div class="card-content black-text"><span class="card-title activator ">Step: '+j+'<i class="material-icons right">more_vert</i></span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">Step: '+j+'<i class="material-icons right">close</i></span><p>'+stepCopy+'</p></div></div></div>';



                           $("#stepsContent").append(stepsContent);


j++;
                  } //close outer loop







    contentLoaded = true;

  }); //end get


    return false ;

}//close function
