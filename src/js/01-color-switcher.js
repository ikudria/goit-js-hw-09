const changeBgColor = {
  intervalId: null,
  isActive: false,

  start() {
    
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    document.querySelector('button[data-start]').style.opacity = 0.5;

    this.intervalId = setInterval(() => {
      document.querySelector('body').style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
       ;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    document.querySelector('button[data-start]').style.opacity = 1;
  },
};

document.querySelector('button[data-start]').addEventListener('click', () => {
  changeBgColor.start();
});

document.querySelector('button[data-stop]').addEventListener('click', () => {
  changeBgColor.stop();
});