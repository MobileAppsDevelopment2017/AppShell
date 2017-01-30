function getAllRecipes() {

$('.progress').css({"visibility": "visible"});
$('.progressWrapper').css({"visibility": "visible"});

    var contentLoaded;

    $("#stepsContent").empty();

    var baseURL = "https://u0018370.scm.tees.ac.uk/Yii/PoS/stepImages/";


    //console.log("screen content injection for " + screen);

    $.get('https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/Site/getAllRecipes', function(data) {
    //inject the content into the DOM



        //inspect the incoming data objects
        //console.log(data);
        //alert(data);

        var content = [];


        var j = 1;
        var dataLength = data.recipeData.length;
        //alert(dataLength);


        for (var i = 0; i < data.recipeData.length; i++) {


            var item = data.recipeData[i];


            var recipe_id = item.recipe_id;
            var name = item.name;
            var copy = item.copy;
            var stepImage = baseURL+item.stepImage;


            var content = '<div class="card medium"><div class="card-image"><img class="stepsPreviewImg" src="'+stepImage+'"></div><div class="card-content black-text"><span class="activator card-title-full-rec ">'+name+'<i class="material-icons right">more_vert</i></span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+name+'<i class="material-icons right">close</i></span><p>'+copy+'</p><div class="card-action"><a class="_viewFullRecipe" _itemid="'+recipe_id+'" href="#">View Recipe</a></div></div><a class="_viewFullRecipe" _itemid="'+recipe_id+'">View Recipe</a></div>';

            //var content = '<div class="card teal lighten-2"><div class="card-content white-text"><span class="card-title"></span><h3>'+name+'</h3><br><p>' + copy + '</p><br><img height="150" width="150" src="'+stepImage+'" /></div><div class="card-action"><a class="_viewFullRecipe" _itemid="'+recipe_id+'" href="#">View Recipe</a></div></div>';



            $("#recipeContent").append(content);


            j++;
        } //close outer loop




        $('.progress').css({"visibility": "hidden"});
        $('.progressWrapper').css({"visibility": "hidden"});


        contentLoaded = true;

    }); //end get


    return false;

} //close function
