var wImage = document.getElementById('img');

var bBtn = document.getElementById('black');
var rBtn = document.getElementById('red');
var bbBtn = document.getElementById('blue');
var pBtn = document.getElementById('purple');
var ppBtn = document.getElementById('pink');

var timee = document.getElementById('time');
var heart = document.getElementById('heart');

var divH = document.getElementById('H');
var divT=document.getElementById('T');

var timeHeart = document.getElementById('imgH');

function clock(){
    var today = new Date();
    var hrs = today.getHours();
    var mins = today.getMinutes();
    var sec = today.getSeconds();
    if(hrs > 12){
        hrs -= 12;
    }
    if(hrs === 0){
        hrs = 12;
    }
    if(hrs < 10){
        hrs =  '0' + hrs;
    }
    if(mins < 10 ){
        mins = '0' + mins;
    }
    if(sec <10){
        sec = '0' + sec;
    }
    var time = hrs + ":" + mins + ":" + sec;
    divT.innerHTML = time;
}

setInterval(clock, 1000);

//-------------switch between time and heart rate---------------

heart.addEventListener('click', function(){
    
    divH.style.display = "block";
    divT.style.display = "none";
});

timee.addEventListener('click' , function(){

   divH.style.display = "none";
   divT.style.display = "block";
});
 

// ---------change watch colors -------------
function changeColors() {
bBtn.addEventListener('click', function(){
    wImage.src ="/assest/black.png";
});

rBtn.addEventListener('click', function(){
wImage.src ="/assest/red.png";
});

bbBtn.addEventListener('click', function(){
wImage.src ="/assest/blue.png";
});

pBtn.addEventListener('click', function(){
wImage.src ="/assest/purple.png";
});

ppBtn.addEventListener('click', function(){
wImage.src ="/assest/pink.png";
});

} ; changeColors();


