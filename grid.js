
//

$(".jump-response").each(function() {
    var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
    $(this).css("background-color", hue);
});


//////////

var colors = ["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c","#ecf0f1"],
    colorsDark  = ["#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f39c12","#d35400","#c0392b","#bdc3c7"];

var random = Math.floor((Math.random() * colors.length)),
    color = colors[random],
    colorDark = colorsDark[random];

var flatBackground = document.querySelectorAll('.flatBackground');
var flatDarkBackground = document.querySelectorAll('.flatDarkBackground');

for(var a = 0; a < flatBackground.length ; a ++){
    flatBackground[a].style.backgroundColor = color;
};

for(var b = 0; b < flatDarkBackground.length ;b ++){
    flatDarkBackground[b].style.backgroundColor = colorDark;
};




if(random == 8){
    document.body.style.color = "#000";
};

///

jQuery(function ($) {
    var $panel = $("#panel");
    var $tabs = $('.tab').click(function () {
        var $this = $(this),
            isActive = $this.hasClass('active');
        if ($panel.is(':visible') && !isActive) {
            $panel.css('background-image', 'url(' + $this.data('background') + ')');
            $tabs.removeClass('active');
            $this.addClass('active');
        } else {
            if (!isActive) {
                $panel.css('background-image', 'url(' + $this.data('background') + ')');
            }
            $panel.slideToggle();
            $this.toggleClass('active');
        }
    });
})


////////// ANIMATED DIVS

$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.b').animate({ top: newq[1], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.c').animate({ top: newq[.5], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.d').animate({ top: newq[1], right: newq[0] }, speed, function(){
      animateDiv();        
    })
};


function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}