function getFullRecipe() {

    var itemid = $(".itemidstore").attr("_itemidstore");

    $('.progress').css({"visibility": "visible"});
    $('.progressWrapper').css({"visibility": "visible"});


    var contentLoaded;

    $("#stepsContent").empty();

    var baseURL = "https://u0018370.scm.tees.ac.uk/Yii/PoS/stepImages/";


    //console.log("screen content injection for " + screen);

    var webservice = 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/Site/getFullRecipe/?id=' + itemid;

    $.get(webservice, function(data) {
        //inject the content into the DOM


        var dataRecipeLength = data.recipeData.length;

        for (var k = 0; k < data.recipeData.length; k++) {

            var recipe = data.recipeData[k];

            var recipe_id = recipe.step_id;
            var recipename = recipe.name;
            var recipecopy = recipe.copy;
            var recipeImage = baseURL + recipe.stepImage;

            var contentHeader = '<div class="card teal center"><h4>' + recipename + '</h4><div class="card-stacked"><div class="card-content"><p>' + recipecopy + '</p></div></div></div>';

            $("#stepsContent").append(contentHeader);

        }


        //inspect the incoming data objects
        //console.log(data);
        //alert(data);

        var content = [];


        var j = 1;
        var dataStepsLength = data.stepsData.length;
        //alert(dataLength);



        for (var i = 0; i < data.stepsData.length; i++) {


            var steps = data.stepsData[i];


            var step_id = steps.step_id;
            var name = steps.name;
            var copy = steps.stepCopy;
            var stepImage = baseURL + steps.stepImage;



            var content = '<div class="card teal lighten-4"> <div class="card-content black-text"> <span class="card-title"></span> <h3>Step ' + j + '</h3> <div class="row"> <div class="col s6"> <p>' + copy + '</p> </div> <div class="col s6"> <img class="responsive-img" src="' + stepImage + '" > </div> </div> </div> </div>';





            $("#stepsContent").append(content);


            j++;
        } //close outer loop







        $('.progress').css({"visibility": "hidden"});
        $('.progressWrapper').css({"visibility": "hidden"});


        contentLoaded = true;

    }); //end get


    return false;

} //close function
