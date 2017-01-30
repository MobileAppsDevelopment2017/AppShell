//Listener to test if swiper has started and ended
//Returns current active index
//Home = 0

var currentSwipeIndex = "#button0";

swiper.on('slideChangeEnd', function () {

//Remove current
$(currentSwipeIndex).css("background-color", "");

console.log(swiper.activeIndex);

currentSwipeIndex = "#button"+swiper.activeIndex ;

$(currentSwipeIndex).css("background-color", "#8e24aa", "border-bottom", "1px solid #000");
$(currentSwipeIndex).css("background-image", "");

});
