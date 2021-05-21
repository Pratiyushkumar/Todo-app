var elementName;
document.querySelector(".sec-par-heading").addEventListener("click",()=>{
    var heading = document.querySelector(".heading-container");
    heading.style.filter = "blur(10px)";
    // heading.style.pointerEvents= "none";
    // heading.style.userSelect= "none";
    document.querySelector(".popup-container").style.visibility = "visible";
})

function closepopu(){
    document.querySelector(".heading-container").style.filter = "blur(0px)";
    document.querySelector(".popup-container").style.visibility = "hidden";
    document.querySelector(".task-add-item").style.visibility = "hidden";
    document.querySelector(".invisible-par").style.visibility = "hidden";
}

document.querySelector(".add-button-styling").addEventListener("click",()=>{
    closepopu();
    var node = document.createElement("div");
    var inputVal = document.querySelector("#addToDoHeading").value;
    console.log(inputVal);
    node.setAttribute("class","card-styling");
    node.setAttribute("id",Math.random().toString(36).substr(2))
    node.innerHTML = `<div class="card-heading">
                        <p class="paragraph">${inputVal}</p>
                        <hr>
                    </div>
                    <div class="card-description">
                        
                    </div>
                    <div class="footer">
                        <button class="btn-completed" id="close-btn" onclick = "closeBtn(this)">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="btn-completed" id="add-btn" onclick = "addBtn(this)">
                            <i class="fas fa-plus-circle"></i>
                        </button>
                    </div>`
         document.querySelector(".flex-row-container").appendChild(node);                  
})


function closeBtn(element){
   var parent_id = element.parentNode.parentNode.id;
   var parentChild = document.getElementById(parent_id);
   console.log(parent_id);
   console.log(parentChild);
   document.querySelector(".flex-row-container").removeChild(parentChild);
   
}

function addBtn(addbuttonid){
    elementName = addbuttonid;
    document.querySelector(".heading-container").style.filter = "blur(10px)";
    document.querySelector(".task-add-item").style.visibility = "visible";
}


document.querySelector("#addThisCrad").addEventListener("click",()=>{
    var inputval = document.querySelector("#input-taskItem").value;
    var node = document.createElement("div");
    node.setAttribute("class","task");
    node.setAttribute("id",Math.random().toString(36).substr(2));
    var ID = elementName.parentNode.parentNode.id;
    node.innerHTML = `
                    <div class = "subItem">
                    <span class="subTask"> ${inputval}</span>
                    <button class="complete-task" onclick="completeTask(this)"><i class="far fa-check-circle"></i></button>
                    </div>
                   `
    var card = document.getElementById(ID);
    card.querySelector(".card-description").appendChild(node);
    closepopu();
})

function completeTask(taskname){
    var ID = taskname.parentNode.parentNode.id;
    var subTask = document.getElementById(ID);
    subTask.querySelector(".complete-task").style.visibility = "hidden";
    subTask.querySelector(".subTask").style.color = "red";
    subTask.querySelector(".subTask").style.textDecoration = "line-through";
}

