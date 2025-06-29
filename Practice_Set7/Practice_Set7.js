//Q1.Create a navbar and change the color of its first element to red

// let nav=document.body.getElementsByClassName("nav-bar")
// nav[0].firstElementChild.style.color="red"

//Q2.View page source and inspect page are not the same..View page doesnot add the autocorrected while the inspect page 

//Q3.Create an element with three children. Change the color of the first and last element to green
// let elem=document.body.getElementsByClassName("element")
// elem[0].firstElementChild.style.color="green"
// elem[0].lastElementChild.style.color="green"

//Q4 Convert the color of each li tag into cyan
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.color="cyan"
});

//Q5 which of the foll is used to look for the farthest ancestor that matches a given CSS Selector a)matches  b)closest  c)contains  d)NOTA  Ans(d)

