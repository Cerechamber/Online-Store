import 'jquery';
import 'jquery-touchswipe';
import 'popper.js';
import 'babel-polyfill';
import './carousel.js';
import './code.js';
import './../sass/styles.scss';

var deadline = new Date(2019, 10, 1, 0, 0 , 0, 0);
	
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}

function initializeClock(endtime){
  var time1 = document.querySelectorAll('.time1');
  var time2 = document.querySelectorAll('.time2');
  var time3 = document.querySelectorAll('.time3');
  var time4 = document.querySelectorAll('.time4');
  var time5 = document.querySelectorAll('.time5');
  var time6 = document.querySelectorAll('.time6');
  function updateClock(){
  var t = getTimeRemaining(endtime);
  time1.forEach(function(item){
  	var day = ('0' + t.days).slice(-2);
    item.innerHTML = day.substr(0,1);
  });
  time2.forEach(function(item){
  	var day = ('0' + t.days).slice(-2);
    item.innerHTML = day.substr(1,1);
  });
  time3.forEach(function(item){
  	var min = ('0' + t.minutes).slice(-2);
    item.innerHTML = min.substr(0,1);
  });
  time4.forEach(function(item){
  	var min = ('0' + t.minutes).slice(-2);
    item.innerHTML = min.substr(1,1);
  });
    time5.forEach(function(item){
  	var sec = ('0' + t.seconds).slice(-2);
    item.innerHTML = sec.substr(0,1);
  });
  time6.forEach(function(item){
  	var sec = ('0' + t.seconds).slice(-2);
    item.innerHTML = sec.substr(1,1);
  });



  if(t.total<=0){
   clearInterval(timeinterval);
  }
}

updateClock(); // запустите функцию один раз, чтобы избежать задержки
var timeinterval = setInterval(updateClock,1000);
}

initializeClock(deadline);