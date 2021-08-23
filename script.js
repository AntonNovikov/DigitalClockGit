window.addEventListener("load", calculateTime);
function calculateTime() {
  const date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  const dayNamesEng = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // нужен перевод
  hour = hour % 12;
  hour = hour ? 12 : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  document.querySelector("#day").textContent = dayNamesEng[dayNumber];
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#minute").textContent = minute;
  document.querySelector("#ampm").textContent = ampm;

  setTimeout(calculateTime, 200);
}
