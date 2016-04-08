$('#toggle > span').click(function() {
    var ix = $(this).index();
    
    $('#left').toggle( ix === 0 );
    $('#right').toggle( ix === 1 );
});