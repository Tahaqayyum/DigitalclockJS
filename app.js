function clock() {
  var hours = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  var ampm = document.getElementById('ampm');

  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var am = "AM";

  if (hour >= 12) {
    if (hour > 12) hour = hour - 12;
    am = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;

  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
  ampm.innerHTML = am;
}

setInterval(clock, 1000);
clock();