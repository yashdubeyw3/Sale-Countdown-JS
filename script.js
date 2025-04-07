const days = document.getElementById("days");
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const launchedDate = new Date("2025-4-12").getTime();

function clock() {
  const currentDate = new Date().getTime();
  const gap = launchedDate - currentDate;
  console.log(gap);

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hr = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((gap % (1000 * 60)) / 1000);
  
  days.textContent = d;
  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
}
setInterval(clock, 1000);



// gap % (1000 * 60 * 60 * 24) -> bache hue miliseconds saare din ke baad (i.e 11 hours)


// 1000 -> 1s
// 60 -> 1 min
// 60 -> 1 hour
// 24 -> 1 day

// gap -> miliseconds of 3 days


// 1000 * 60 * 60 * 24 -> 86400000 ms in one day


// gap % (1000 * 60 * 60 * 24) -> 