$(document).ready(function() {

  //New method to upload files from an SPA Partial View 16/12/16


    // Variable to store your files
    var files;

    //Prepare files and upload to server on change
    $(document).on("submit", "form#addRecipeStep", function() {
        //$(document).on('change', 'input[type=file]', {}, function(e) {
        $('.progress').css({"visibility": "visible"});
        $('.progressWrapper').css({"visibility": "visible"});

        files = $('input[type=file]')[0].files[0];
        var data;
        var form = $('form')[0]; // You need to use standart javascript object here
        var formData = new FormData(form);


        var steps = $('input#steps').val(); //get var name
        var fileName = files.name ;
        var fileExt = files.type ; //get file ext

        if(fileExt==="image/png"){
        var ext = ".png";
      }
      if(fileExt==="image/jpeg"){
      var ext = ".jpg";
      }

        var combinedData = "MAD17Steps=" + steps + "&fileName=" + fileName;

        formData.append("MAD17Path", $('input[type=file]')[0].files[0]);
        formData.append("fileName", fileName);
        formData.append("MAD17Steps", steps);
        formData.append("fileExt", ext);



        $.ajax({
            url: 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/mAD17Steps/create/1',
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function(data, textStatus, jqXHR) {
                if (typeof data.error === 'undefined') {
                    // Success so call function to process the form
                    getCreatedSteps();

                    //remove old form data
                    $('textarea#steps').val('');
                    $('div#message2').empty();
                    //stop progress
                    $('.progress').css({"visibility": "hidden"});
                    $('.progressWrapper').css({"visibility": "hidden"});



                } else {
                    // Handle errors here
                    console.log('ERRORS: ' + data.error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Handle errors here
                console.log('ERRORS: ' + textStatus);
                // STOP LOADING SPINNER
            }
        });
        //uploadTextContent(combinedData);
        return false;
    }); //close event

});
