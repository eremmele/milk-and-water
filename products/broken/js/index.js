// There are still some bugs
// I hope you won't notice.

// Loaded a Fixed ATicon.js

// Fire after load 
$(window).load(function () {
    $('html').addClass('loaded');
    'use strict';
    function load3D() {
        ATicon.getInstance($('.poster-skyfall'));
        ATicon.getInstance($('.poster-iorigins'));
        ATicon.getInstance($('.poster-TFIOS'));
        ATicon.getInstance($('.poster-AB'));
        ATicon.getInstance($('.poster-johnwick'));
    };
    setTimeout(function () {
        load3D();
        $(window).on('resize', function () {
            load3D();
        });
    }, 1200);
  

    // Binding Arrow Keys

    window.displayBoxIndex = -1;

    $(document).keyup(function (e) {
        if (e.keyCode == 39) {
            Navigate(1);
        }
        if (e.keyCode == 37) {
            Navigate(-1);
        }

    });

    var Navigate = function (diff) {
        displayBoxIndex += diff;
        var iPoster = $(".poster"),
            iShadow = iPoster.find('.shadow'),
            iTitle = iPoster.parent().find('.poster-title');
        if (displayBoxIndex >= iPoster.length)
            displayBoxIndex = 0;
        if (displayBoxIndex < 0)
            displayBoxIndex = iPoster.length - 1;
        iPoster.css('transform', 'none').eq(displayBoxIndex).css('transform', 'scale3d(1.1,1.1,1.1)');
        iShadow.removeClass("shadow-hoverd").eq(displayBoxIndex).addClass("shadow-hoverd");
        iTitle.css('opacity', '0').eq(displayBoxIndex).css('opacity', '1');
    }

});