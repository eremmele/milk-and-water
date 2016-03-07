
window.onload = (function(){ 
   $(window).mousemove(function (pos) { 
    $(".wall_center .contain").css('left',(pos.pageX-500)+'px').css('top',(pos.pageY-600)+'px');
    $(".wall_right .contain").css('left',(pos.pageX-1200)+'px').css('top',(pos.pageY-600)+'px');
       $(".wall_left .contain").css('left',(pos.pageX+200)+'px').css('top',(pos.pageY-600)+'px');
       $(".wall_top .contain").css('left',(pos.pageX-500)+'px').css('top',(pos.pageY-200)+'px');
        $(".wall_bottom .contain").css('left',(pos.pageX-500)+'px').css('top',(pos.pageY-1000)+'px'); 
       $(".window_top .contain").css('left',(pos.pageX-660)+'px').css('top',(pos.pageY-750)+'px');
       $(".window_right .contain").css('left',(pos.pageX-780)+'px').css('top',(pos.pageY-750)+'px');
       $(".window_bottom .contain").css('left',(pos.pageX-660)+'px').css('top',(pos.pageY-880)+'px');
   }); 
}); 
