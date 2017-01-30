$(document).ready(function() {

    //Dynamic DOM element so need to use the on method
    $(document).on('submit', '#addRecipeStep', {}, function(e) {
        //$(document).on('change', 'input.path', {}, function(e) {
        $('.progress').css({
            "visibility": "visible"
        });

        var data = new FormData();
        $form = $('form#addRecipeStep');
        // Serialize the form data
        var formData = $form.serialize();

        var file =   $('.path').get(0).files[0] ;
        //var data = new FormData();

        /*
        $.each($form.find("input[type='file']"), function(i, tag) {

            $.each($(tag)[0].files, function(i, file) {
                //console.log(tag.name, file);
                ///console.log(file.name);
                formData = formData + '&MAD17Path=' + file.name;

            });
        });
        */
        //alert(file);



        //*****Ajax JSON call will SEND and RECEIVE data back from the controller****
        $.ajax({
            type: 'POST',
            dataType: "json",
            //processData: false,
            //contentType: false,
            cache: false,
            data: file,
            url: 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/mAD17Steps/create/1',


            success: function(data) {

                //data from controller
                if (data.action == "created") {


                    $('span#msg').empty();
                    $('span#msg').append(data.message);

                    //changeAppPage("_dashboard", null);

                } else {


                    $('span#msg').empty();
                    $('span#msg').append(data.message);



                }


            },
            error: function() {

                alert('There was an error!');
            }


        });

        return false;


    });


}); //close doc ready
