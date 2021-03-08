const chronometer = new Chronometer();
// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printSeconds();
  printMinutes();
  

}
function printMinutes() {
  minDec.textContent = Math.floor(chronometer.getMinutes() / 10);
  minUni.textContent = chronometer.getMinutes() % 10;
}
function printSeconds() {
  secDec.textContent = Math.floor(chronometer.getSeconds() / 10);
  secUni.textContent = chronometer.getSeconds() % 10;
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  //const currentTimeCentiSeconds = chronometer.currentTimeMilliSeconds % 100;
  milDec.textContent = Math.floor(chronometer.getMilliSeconds() / 10);
  milUni.textContent = chronometer.getMilliSeconds() % 10;
}
function printSplit() {
  // ... your code goes here
  const splitList = document.querySelector('#splits');
  const splitItem = document.createElement('li');
  splitItem.innerHTML = chronometer.splitClick();
  splitList.appendChild(splitItem);
}
function clearSplits() {
  // ... your code goes... here Set clock to zero
  const splitList = document.querySelector('#splits');
  chronometer.currentTime=0;
  chronometer.currentTimeMilliseconds=0;
  printMilliseconds();
  printTime();
  splitList.innerHTML= "";

}
function setStopBtn() {
  // ... your code goes here
 btnLeft.classList='btn stop';
 btnLeft.textContent='STOP';
}
function setSplitBtn() {
  // ... your code goes here
btnRight.classList= 'btn split';
btnRight.textContent= 'SPLIT'; 

}
function setStartBtn() {
  // ... your code goes here
  btnLeft.classList= 'btn start';
  btnLeft.textContent= 'START';
}
function setResetBtn() {
  // ... your code goes here
  btnRight.classList='btn reset';
  btnRight.textContent='RESET';

}
// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList == "btn start") {
    btnLeft.classList = 'btn stop';
    btnLeft.classList = 'STOP';
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(() => null);
    chronometer.startClickMilliSeconds(printMilliseconds);
  
  } else {
    btnLeft.classList = 'btn start';
    btnLeft.classList = 'START';
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList == "btn split") {
    btnRight.classList= 'btn split';
    btnRight.textContent= 'SPLIT';
    if(btnLeft.classList == 'btn start') {
      clearSplits();
      return;
    }
    if (btnRight.classList == 'btn split'){
      printSplit();
    }
  } else {
    btnRight.classList= 'btn reset';
    btnRight.textContent= 'RESET';
    clearSplits();

  
    chronometer.currentTime() = 0;
    printTime();

    chronometer.currentTimeMilliseconds()= 0;
    printMilliseconds();


  }
});




















