const card = document.querySelector(".card");
const addTask=document.body.getElementsByClassName("taskAdd")[0];
const viewTask=document.body.getElementsByClassName("viewTask")[0];
const Item=document.body.getElementsByClassName("taskHolder")[0];
let container=document.querySelector(".container")
let menu=document.querySelector(".sidemenu")
let todos=[]
addTask.addEventListener("click",()=>{
    let task=Item.value
    todos.push(task);
    localStorage.setItem("todos",JSON.stringify(todos))
    addItem(task)
})
viewTask.addEventListener("click",()=>{

})

const addItem=(task)=>{
    let card=document.createElement("div")
    let cardContent=document.createElement("h1")
    cardContent.innerHTML=task;
    card.classList.add("itemcard");
    card.appendChild(cardContent)
    container.appendChild(card);
    
    let menu=document.createElement("button")
    menu.innerHTML='<i class="fa-solid fa-ellipsis-vertical"></i>';
    let menuItems=document.createElement("div")
    menuItems.innerHTML='<button style="all:unset" id="editBtn">Edit<i class="fa-solid fa-pen-to-square"></i></button><div id="linebreak"></div><button style="all:unset" id="deleteBtn">Delete</button>';
    menuItems.setAttribute("hidden",true);
    
    menu.classList.add("sidemenu")
    menuItems.classList.add("menuItems")
    card.appendChild(menuItems)
    card.appendChild(menu)
    let editBtn=document.getElementById("editBtn")
    let deleteBtn=document.getElementById("deleteBtn")

    editBtn.addEventListener("click",()=>{
        click_editBtn(cardContent,task)})

    deleteBtn.addEventListener("click",()=>{
        click_deleteBtn(card,task)})
    menu.addEventListener("click", ()=>{

        if(menuItems.hasAttribute("hidden")){
            menuItems.removeAttribute("hidden")
        }
    })
}

click_editBtn= (cardContent,task)=>{
    let newName=prompt("Enter the Updated Task name");
    cardContent.innerHTML=newName
    let index=todos.indexOf(task)
    if(index!== -1){
        todos[index]=newName
        localStorage.setItem("todos",JSON.stringify(todos))
    }
}
click_deleteBtn= (card,task)=>{
    card.remove();
    todos = todos.filter(t => t !== task);
    localStorage.setItem("todos",JSON.stringify(todos))

}
