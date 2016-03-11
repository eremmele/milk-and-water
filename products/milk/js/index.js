//old port based on Paul Lewis' Flash Physics

//*** SHIM ***
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

//*** VARIABLES ***
var _stageContext, _stageWidth, stageHeight, _halfStageHeight;
var _totalParticles = 10; 
var _particleArray = [];
var _k = 0.99;
var _friction = 0.95;
var _particleDistNum = 0;
var _colRadius = 100;
var _mouseYSpeed = 0;
var _oldMouseX = 0;
var _oldMouseY = 0;
var _allowHitBool = true;


//*** INIT ***
function init() {
  var stage = document.getElementById('stage');
 _stageWidth = stage.width = window.innerWidth;
  _stageHeight = stage.height = window.innerHeight;
  _halfStageHeight = _stageHeight/2;
  _stageContext = stage.getContext('2d');
 	_stageContext.fillStyle = "#fff";
  _particleDistNum = _stageWidth/(_totalParticles-1);
  createParticles();
}

//*** METHODS ***
function clearStage() {
  _stageContext.clearRect(0,0,_stageWidth,_stageHeight);
}

function createParticles() {
  var xPos, physicsObj;
  var i = 0;
  for(i=0;i<_totalParticles;i++){
    xPos = _particleDistNum * i;
    physicsObj = {};
    physicsObj.xPos = xPos;
    physicsObj.yPos = _stageHeight/2;
    physicsObj.yAccel = physicsObj.yVel = 0;
    physicsObj.newYPos = physicsObj.baseYPos = physicsObj.yPos;
		physicsObj.mass = 10;
    _particleArray.push(physicsObj);
  }
}

function drawParticle(xPos, yPos, i) {
  var newYPos;
  if(i != _totalParticles - 1) {
     newYPos = yPos + (_particleArray[(i+1)].yPos - yPos)/2;
    _stageContext.quadraticCurveTo(xPos,yPos,xPos + (_particleDistNum/2), newYPos);
  }else {
    _stageContext.lineTo(xPos,yPos);
  }
}

function drawStage() {
  setParticles();
  renderWave();
}

function renderWave() {
  var i = 0;
  _stageContext.beginPath();
  _stageContext.moveTo(_particleArray[0].xPos, _particleArray[0].yPos);
  for(i=0;i<_totalParticles; i++) {
  	_particleArray[i].yPos = _particleArray[i].newYPos;
    drawParticle(_particleArray[i].xPos, _particleArray[i].yPos, i);
  }
  _stageContext.lineTo(_stageWidth, _stageHeight);
  _stageContext.lineTo(0, _stageHeight);
  _stageContext.fill();
}

function setParticles() {
  var i;
  var extensionY, forceY;
  for(i = _totalParticles-1; i >= 0; i--) {
    extensionY = forceY = 0;
    if(i > 0) {
      //extensionY = _particleArray[(i-1)].yPos - _particleArray[i].yPos;
      forceY += _k * extensionY;
    }
    if(i < _totalParticles - 1) {
      //extensionY = _particleArray[i].yPos - _particleArray[(i+1)].yPos;
      forceY += _k * extensionY;
    }
    extensionY = _particleArray[i].yPos - _particleArray[i].baseYPos;
    forceY += _k/15 * extensionY;
    //update positions
    _particleArray[i].yAccel = -forceY/_particleArray[i].mass;
    _particleArray[i].yVel += _particleArray[i].yAccel;
    _particleArray[i].newYPos += _particleArray[i].yVel;
    _particleArray[i].yVel *= _friction;
  }
}

//*** EVENTS ***
function addListeners() {
  document.addEventListener('mousemove', onMouseMove);
}

function onEnterFrame() {
  clearStage();
  drawStage();
  	window.requestAnimFrame(onEnterFrame, 60);
}

function onMouseMove(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var xPart;
  if(Math.abs(_halfStageHeight - mouseY) < _colRadius) {
    if(_allowHitBool){
    	_mouseYSpeed = mouseY - _oldMouseY;
    	xPart = Math.floor(mouseX/_particleDistNum);
    	_particleArray[xPart].yVel = _mouseYSpeed/2;
      _allowHitBool = false;
      setTimeout(function() {
        _allowHitBool = true;
      }, 100);
    }
  }
  
  _oldMouseX = mouseX;
  _oldMouseY = mouseY;
  
}

init();
addListeners();
onEnterFrame();