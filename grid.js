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
