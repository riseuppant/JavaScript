//Text Fields
let hours = document.getElementsByTagName("input")[0];
let minutes = document.getElementsByTagName("input")[1];
let day = document.getElementsByTagName("input")[2];

//Buttons
let hours_add = document.getElementsByTagName("button")[0];
let hours_sub = document.getElementsByTagName("button")[1];

let minutes_add = document.getElementsByTagName("button")[2];
let minutes_sub = document.getElementsByTagName("button")[3];

//EventListeners
hours_add.addEventListener("click", () => {
  let number = parseInt(hours.value);
  //   console.log("Clicked")
  console.log(number)
  number += 1;
  if (number <= 12) {
      hours.value = `${number}`;
    } else {
        hours.value = "0";
    }
});

hours_sub.addEventListener("click", () => {
    let number = parseInt(hours.value);
    //   console.log("Clicked")
    console.log(number)
  number -= 1;
  if (number >= 0) {
    hours.value = `${number}`;
  } else {
    hours.value = "12";
  }
});
