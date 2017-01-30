//Login Button Click to generate routing
$(document).ready(function() {

    //Detect login click event
    $('._register').click(function() {
        console.log('register button clicked');
        changeAppPage('_register', false);

    });



    //Dynamic DOM element so need to use the on method
    $(document).on('submit', 'form#registerForm', {}, function(e) {

        var postData = $(this).serialize();

        //console.log(postData);
        //alert(postData);

        //*****Ajax JSON call will SEND and RECEIVE data back from the controller****
        $.ajax({
            type: 'POST',
            dataType: "json",
            data: postData,
            url: 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/Site/register',


            success: function(data) {

                //data from controller
                if (data.action == "register") {


                    $('span#msg').empty();
                    changeAppPage("_login", null);

                } else {


                    $('div.msg').empty();
                    $('div.msg').append(data.message);



                }


            },
            error: function() {

                alert('There was an error handeling your registration!');
            }


        });

        return false;


    }); //End Login Function

}); //close doc ready
