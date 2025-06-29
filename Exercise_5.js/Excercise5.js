let password = "ot@123";
let login_status = false;
let heropage = document.getElementById("heropage");
let homepage_btn=document.getElementById("HomePage_btn")
let outerContainer=document.getElementById("outerbox")
let passwordtext=document.getElementById("passwordtext")
let password_field = document.getElementById("pwd");
let login_button = document.getElementById("login_btn");
password_field.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        click_login();
    }
});

const click_login = () => {
    if(password_field.hasAttribute("hidden")){
        password_field.removeAttribute("hidden");
        passwordtext.removeAttribute("hidden");
    }
    else{
        let entered_Password=password_field.value;
        if(entered_Password == password){
            text.textContent="Welcome to the world"
            password_field.setAttribute("hidden","true")
            passwordtext.setAttribute("hidden","true")
            login_button.setAttribute("hidden","true")
            homepage_btn.removeAttribute("hidden")

        }
        else{
            alert("Wrong Credentials Entered")
        }
    }
};

login_button.addEventListener('click', click_login);
homepage_btn.addEventListener('click', function event(){
    window.location.href = "homepage.html"; 

});

function getRandomBinary(length) {
  let binary = '';
  for (let i = 0; i < length; i++) {
    binary += Math.random() > 0.5 ? '1' : '0';
  }
  return binary;
}

const container = document.getElementById("left_container");
setInterval(() => {
  container.textContent = getRandomBinary(860);
}, 200);

const right_container = document.getElementById("right_container");
setInterval(() => {
  right_container.textContent = getRandomBinary(860);
}, 200);
