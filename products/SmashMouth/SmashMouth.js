//$('.touchMeNot').on('mouseenter',function(e){
//    var maxX = $(window).width() - $(this).width();
//    var maxY = $(window).height() - $(this).height();    
//    $(this).css({
//        'left':getRandomInt(0, maxX),
//        'top':getRandomInt(0, maxY)
//    });
//});
//function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}

function run() {
    var top = Math.random() * height;
    var left = Math.random() * width;
    $('#theRunAwayButton').css('top', top + 'px').css('left', left + 'px');
}

$(document).ready(function() {
    $('#theRunAwayButton').mouseover(run);
    $('#theRunAwayButton').mousemove(run);
});
