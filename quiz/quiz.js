var questionArray = [
  ["Question 1?", "Often", "Sometimes", "Never"], 
  ["Question 2?", "Mentally", "Physically", "Both"], 
  ["Question 3?", "Relaxing", "Partying", "Sex"]
];

//populate document
for (var i = 0; i < questionArray.length; i++){
  document.write("<form><span class='question'>" + questionArray[i][0] + "</span><br>");
  for (var x = 1; x < 4; x++){
    document.write("<input type='radio' class='answer' name='answer' value='" + questionArray[i][x] + "'>" + questionArray[i][x] + "");
  }
  document.write("</form><br>");
}

var characterAnswer = [
  [0, 0, 0,'red'],
  [0, 0, 1,'orange'],
  [1, 1, 1,'yellow'],
  [1, 1, 2,'green'],
  [2, 2, 2,'blue']
];

//add click check event listeners
var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', check);
}

var userAnswers = [];

//check questions answers
function check(){
  userAnswers = [];
  var c = 0;
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].checked) {
      userAnswers.push(i%3);
      c++;
    }
  }
  if(c==questionArray.length) rate();
}

//rate the answers per char
function rate(){
  console.log(userAnswers);
  for(var i = 0; i < userAnswers.length; i++){
    for(var j = 0; j < characterAnswer.length; j++){
      characterAnswer[j][4] = 0;
      for(var x = 0; x < 4; x++){
        if(userAnswers[i] == characterAnswer[j][x])
          characterAnswer[j][4]++;
      }
    }
  }
  answer();
}

function answer(){
  var a = 0, t;
  for(var j = 0; j < characterAnswer.length; j++){
    if(characterAnswer[j][4] > a) {
      a = characterAnswer[j][4];
      t = characterAnswer[j][3];
    }
  } 
  alert(t);
}
