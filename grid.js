function ran_col() { //function name
                var color = '#'; // hexadecimal starting symbol
                var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
                color += letters[Math.floor(Math.random() * letters.length)];
                document.getElementById('posts').style.background = color; // Setting the random color on your div element.


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
    $('.d').animate({ top: newq[1], right: newq[.5] }, speed, function(){
      animateDiv();        
    })
    // need to adjust speeds....
        $('.e').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.f').animate({ top: newq[1], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.g').animate({ top: newq[.5], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.h').animate({ top: newq[1], right: newq[0] }, speed, function(){
      animateDiv();        
    })
        $('.i').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.j').animate({ top: newq[1], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.k').animate({ top: newq[.5], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.l').animate({ top: newq[1], right: newq[0] }, speed, function(){
      animateDiv();        
    })
        $('.m').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.n').animate({ top: newq[1], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    $('.o').animate({ top: newq[.5], left: newq[1] }, speed, function(){
      animateDiv();        
    });
};

//    var oldq = $('.a').offset();
//    var oldq = $('.a').offset();
//    var oldq = $('.a').offset();

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}