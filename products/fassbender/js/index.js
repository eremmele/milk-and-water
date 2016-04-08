var img = document.querySelector('img');
var c = document.querySelector('canvas');
c.width = innerWidth;c.height = innerHeight;

var g = c.getContext('2d');
var start = Date.now();
var cursors = [];


function fakeMouseMove() {
  var now = Math.floor((Date.now()/10)%200);

  
  var x = (0.5+0.5*Math.sin(Date.now()/1014))*innerWidth+(0.5+0.5*Math.sin(Date.now()/114))*innerWidth/20;
  var y = (0.5+0.5*Math.sin(Date.now()/1584))*innerHeight+(0.5+0.5*Math.sin(Date.now()/134))*innerWidth/20;
    cursors[now] = cursors[now] || [];
  cursors[now].push({x:x, y:y});
  g.drawImage (img, x,y);
  
  
  if(realMouse) {
    
    clearInterval(fakeInterval);
    cursors=[];
  }
}


var fakeInterval = setInterval(fakeMouseMove, 20);
var realMouse = false;

function onMouseMove(evt) {
  realMouse = true;
  var now = Math.floor((Date.now()/10)%200);
  
  cursors[now] = cursors[now] || [];
  cursors[now].push({x:evt.clientX, y:evt.clientY});
  g.drawImage (img, evt.clientX, evt.clientY);
}
c.addEventListener('mousemove', onMouseMove);

var prevFrame = 0;
function update() {


 var newNow = Math.floor((Date.now()/10)%200); 
  for(var now = prevFrame;now<newNow;now++) {
    if(cursors[now]) for(var i=0;i<cursors[now].length;i++)     {
        g.drawImage (img, cursors[now][i].x,  cursors[now][i].y);
    }
    g.fillStyle = "rgba(255,255,255,0)";
    g.fillRect(0,0,innerWidth, innerHeight);
  } 

  prevFrame = newNow;
  requestAnimationFrame(update);
}

update();