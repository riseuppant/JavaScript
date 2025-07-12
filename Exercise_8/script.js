//Text Fields
let hours = document.getElementsByTagName("input")[0];
let minutes = document.getElementsByTagName("input")[1];
let day = document.getElementsByTagName("input")[2];

//Buttons
let hours_add = document.getElementsByTagName("button")[1];
let hours_sub = document.getElementsByTagName("button")[2];

let minutes_add = document.getElementsByTagName("button")[3];
let minutes_sub = document.getElementsByTagName("button")[4];

let timeofDay_add = document.getElementsByTagName("button")[5];
let timeofDay_sub = document.getElementsByTagName("button")[6];

let setAlarm = document.querySelector(".setAlarm");

//Checking and pushing the input values to bound if entered out of bound
// if(hours.value>"12")hours.value="12"
// if(hours.value<"0")hours.value="0"

// if(minutes.value>"59")minutes.value="59"
// if(minutes.value<"0")minutes.value="0"
//EventListeners
//Hours Updating
hours_add.addEventListener("click", () => {
  let number = parseInt(hours.value);
  //   console.log("Clicked")
  console.log(number);
  number += 1;
  if (number <= 12) {
    hours.value = `${number}`;
  } else {
    hours.value = "1";
  }
});

hours_sub.addEventListener("click", () => {
  let number = parseInt(hours.value);
  //   console.log("Clicked")
  console.log(number);
  number -= 1;
  if (number >= 1) {
    hours.value = `${number}`;
  } else {
    hours.value = "12";
  }
});

//Minutes Updating
minutes_add.addEventListener("click", () => {
  let number = parseInt(minutes.value);
  //   console.log("Clicked")
  console.log(number);
  number += 1;
  if (number <= 59) {
    minutes.value = `${number}`;
  } else {
    minutes.value = "0";
  }
});

minutes_sub.addEventListener("click", () => {
  let number = parseInt(minutes.value);
  //   console.log("Clicked")
  console.log(number);
  number -= 1;
  if (number >= 0) {
    minutes.value = `${number}`;
  } else {
    minutes.value = "59";
  }
});

//Time of Day Updating

timeofDay_add.addEventListener("click", () => {
  //   console.log("Clicked")
  if (day.value === "") {
    day.value = "PM";
  }
  if (day.value === "AM") {
    day.value = "PM";
  }
});
timeofDay_sub.addEventListener("click", () => {
  //   console.log("Clicked")
  if (day.value === "") {
    day.value = "AM";
  }
  if (day.value === "PM") {
    day.value = "AM";
  }
});

//Set Alarm
setAlarm.addEventListener("click", () => {
  let alarm = {
    hour: hours.value,
    minutes: minutes.value,
    timeofDay: day.value,
  };

  if(day.value==="PM"){
    let conversion=parseInt(hours.value)
    conversion+=12
    alarm.hour=`${conversion}`
  }
  console.log(alarm)
  setInterval(() => {
    let curTime=new Date()
    let curHours=curTime.getHours()
    let curMin=curTime.getMinutes()
    if(curHours==parseInt(alarm.hour) && curMin==parseInt(alarm.minutes))
    {
        console.log("WakeUP")
    }
  },1000);
});
