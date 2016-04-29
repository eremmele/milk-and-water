var makeShadow = function(num, color) {
  var value = '';
  for(var i = 1; i < num; i++) {
    value += i+'px '+i+'px 0px' +color;
    if(i != num - 1) {
      value += ', ';
    }
  }
  return value;
};
document.querySelector('.js-shadow').style.textShadow = makeShadow(200, '#B83A3A');