console.log("Setting Alarm Clock");
const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio("audiomp3.mp3");

function ringBell(){
   audio.play();
}

function setAlarm(e){
  e.preventDefault();
  const alarm = document.getElementById('alarm');
  alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);

    now = new Date();
    timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);

    if(timeToAlarm>=0){
      setTimeout(() =>{
         console.log("Ringing now");
         ringBell();
      }, timeToAlarm );

}
}



























// console.log("Set an alarm");
// const alarmSubmit = document.getElementById('alarmSubmit');
// alarmSubmit.addEventListener('click', setAlarm);

//  function setAlarm(e){
//     e.preventDefault();
//     const alarm = document.getElementById('alarm');
//     console.log('setting an alarm for ${alarm.value}...');

//     alarmDate = new Date(alarm.value);


//  }
