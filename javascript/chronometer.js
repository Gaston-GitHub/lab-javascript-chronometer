

  class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
      this.currentTimeMilliseconds = 0;
      this.intervalIdMilliSeconds = 0;
    }
    
    startClick(callBack) {
      const incTime = () => {
      this.currentTime += 1;
      printTime();
      if(callBack) callBack();

    };
      this.intervalId = setInterval(incTime, 1000);
    
  }
    startClickMilliSeconds(callBack) {
      const incTimeMilliSeconds = () => {
        this.currentTimeMilliseconds += 1;
        if(callBack) callBack();
      };
      this.intervalIdMilliSeconds = setInterval(incTimeMilliSeconds, 10);
    }

    getMinutes() {
      return Number(Math.floor(this.currentTime / 60));
    }
    getSeconds() {
      return Number(Math.floor(this.currentTime % 60));
    }
    getMilliSeconds() {
      return Number(Math.floor(this.currentTimeMilliseconds % 100));
    }
    twoDigitsNumber(num) {
      return `0${num}`.slice(-2);
    }
    stopClick() {
      clearInterval(this.intervalId);
      clearInterval(this.intervalIdMilliSeconds);
    }
    resetClick() {
      this.currentTime = 0;
      this.currentTimeMilliseconds = 0;
    }
    splitClick() {
      return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
        this.getSeconds()
      )}:${this.twoDigitsNumber(this.getMilliSeconds())}`;
    }
  }

  
  