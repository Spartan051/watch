console.log("ok");
let ss = document.querySelector(".ss");
let mm = document.querySelector(".mm");
let hh = document.querySelector(".hh");
let timedigital = document.querySelector(".time-digital");
function preventflick(element, degree) {
  if (degree === 90) {
    element.style.transition = "all 0.0s";
  }
}

function setdate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsdegree = (seconds / 60) * 360 + 90;
  ss.style.transform = `rotate(${secondsdegree}deg)`;
  const minutes = now.getMinutes();
  const minutesdegree = (minutes / 60) * 360 + ((seconds / 60) * 6 + 90);
  mm.style.transform = `rotate(${minutesdegree}deg)`;
  const hours = now.getHours();
  const hoursdegree = (hours / 12) * 360 + ((minutes / 60) * 6 + 90);
  hh.style.transform = `rotate(${hoursdegree}deg)`;
  timedigital.innerHTML = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
  preventflick(ss, secondsdegree);
  preventflick(mm, minutesdegree);
  preventflick(hh, hoursdegree);
}
setInterval(setdate, 1000);
