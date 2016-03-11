//ABOUT effect

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.fade').css({
        'opacity': ((height - scrollTop) / height)
    });
});

//$(document).ready(function(){
//    $(".btn1").click(function(){
//        $("#rotator").slideUp();
//    });
//    $(".btn2").click(function(){
//       $("#rotator").slideDown();
//    });
//});

$(document).ready(function(){
		$('#changeText').click(function(){
			$('#content').text('#newcontent');
		});
	});

//////////////////////////////