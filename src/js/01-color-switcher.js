const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const changeBgColor = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      body.style.backgroundColor = color;
    }, 1000);
  },
  
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startBtn.addEventListener('click', () => {
  changeBgColor.start();
});

stopBtn.addEventListener('click', () => {
  changeBgColor.stop();
});
