//Login Button Click to generate routing

$(document).ready(function() {

    //Detect login click event
    //$('.createRecipe').click(function() {
    //alert('create button clicked');

//return false;
//});



//Dynamic DOM element so need to use the on method

$(document).on('submit', '.createRecipe', {}, function(e) {
        $('.progress').css({"visibility": "visible"});
        var postData = $(this).serialize();

        //console.log(postData);
        //alert(postData);

        //*****Ajax JSON call will SEND and RECEIVE data back from the controller****
        $.ajax({
            type: 'POST',
            dataType: "json",
            data: postData,
            url: 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/mAD17Recipe/create',


            success: function(data) {

                //data from controller
                if (data.action == "created") {


                    $('span#msg').empty();
                    $('span#msg').append(data.message);

                    setTimeout(function() {
                    changeAppPage('_addRecipeStep', null);
                    },
                    2000);


                } else {


                    $('span#msg').empty();
                    $('span#msg').append(data.message);



                }


            },
            error: function() {

                alert('There was an error handeling your login authentication!');
            }


        });

        return false;


    }); //End Login Function


}); //close doc ready
