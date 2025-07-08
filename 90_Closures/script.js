let message = "Good Global";
function hello1() {
  message = "Good Local";
  // {
  //     let message ="Good afternoon"
  //     console.log("Hello World : "+ message)
  // }
  console.log("Hello World : " + message);
  let c = function hellow2() {
    console.log("Iam C " + message);
  };

  return c;
}
function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      let a = 2;
      console.log(a);
      const z = () => {
        let a = 3;
        console.log(a);
      };
      z();
    };
    y();
  };
  // x()
  return x;
}

let a=returnFunc()
a()
// let c=hello1()
// c()
// console.log(message)
//Lexical wala work karta h like if a function does not have any variables then it checks it in the lexical parent