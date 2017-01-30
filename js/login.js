//Login Button Click to generate routing
$(document).ready(function() {

    //Detect login click event
    $('._login').click(function() {
    console.log('login button clicked');
    changeAppPage('_login', false);

});



//Dynamic DOM element so need to use the on method
$(document).on('submit', '#loginForm', {}, function(e) {

        var postData = $(this).serialize();

        //console.log(postData);
        //alert(postData);

        //*****Ajax JSON call will SEND and RECEIVE data back from the controller****
        $.ajax({
            type: 'POST',
            dataType: "json",
            data: postData,
            url: 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/Site/loginUserFromClient',


            success: function(data) {

                //data from controller
                if (data.action == "login") {


                    $('span#msg').empty();
                    changeAppPage("_dashboard", null);

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
