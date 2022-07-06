import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const now = Date.now();
    let endTime = selectedDates[0].getTime();

    if (now >= endTime) {
      return alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;

      document.querySelector('#datetime-picker').disabled = true;

      const timer = {
        timerRefs: {},
        intervalId: null,

        start(endTime) {
          this.createTimerRefs();
          startBtn.disabled = true;

          this.intervalId = setInterval(() => {
            startTime = Date.now();
            let diff = endTime - startTime;

            if (diff < 0) {
              this.stop();
              return;
            }

            const time = this.convertMs(diff);
            this.setMarkup(time);
          }, 1000);
        },

        stop() {
          clearInterval(this.intervalId);
        },

        convertMs(diff) {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(diff / day);
          const hours = Math.floor((diff % day) / hour);
          const minutes = Math.floor(((diff % day) % hour) / minute);
          const seconds = Math.floor((((diff % day) % hour) % minute) / second);

          const time = {
            days,
            hours,
            minutes,
            seconds,
          };

          return time;
        },

        createTimerRefs() {
          this.timerRefs.days = document.querySelector('span[data-days]');
          this.timerRefs.hours = document.querySelector('span[data-hours]');
          this.timerRefs.minutes = document.querySelector('span[data-minutes]');
          this.timerRefs.seconds = document.querySelector('span[data-seconds]');
        },

        setMarkup(time) {
          for (const key in time) {
            this.timerRefs[key].textContent = this.pad(time[key]);
          }
        },
        pad(num) {
          return num.toString().padStart(2, '0');
        },
      };

      startBtn.addEventListener('click', () => {
        timer.start(endTime);
      });
    }
  },
};

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
const input = document.querySelector('#datetime-picker');
flatpickr(input, options);

document.querySelector('.timer').style.display = 'flex';
document.querySelector('.timer').style.marginTop = '10px';

const divs = document.querySelectorAll('.field');
for (const div of divs) {
  div.style.marginRight = '20px';
  div.style.textTransform = 'uppercase';
  div.style.fontStyle = 'italic';
  div.style.fontSize = '14px';
  div.style.color = 'rgb(250, 145, 7)';
}

const values = document.querySelectorAll('.value');
for (const value of values) {
  value.style.display = 'flex';
  value.style.justifyContent = 'center';
  value.style.color = 'rgb(25, 177, 247)';
  value.style.fontSize = '20px';
  value.style.textDecoration = 'underline';
}
