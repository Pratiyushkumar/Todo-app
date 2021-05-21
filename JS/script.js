let todoitems = [];
let flag = true;

// function to generate the pop
function toggel(){
    
    var blur = document.getElementById("add-blur");
    

    var popup = document.getElementById("pop-up");
    popup.classList.toggle("active");
    blur.classList.toggle("active");
    console.log(popup);
    
  }
  
function closepopup(){
    document.querySelector(".heading-container").style.visibility = "visible";
    document.querySelector(".heading-container").style.filter = "blur(0px)";
    document.querySelector(".popup-container").style.visibility = "hidden";
    document.querySelector(".invisible-par").style.visibility = "hidden";
    
}
// function addtodo(){
//   console.log(Date.now());
// console.log( Math.random().toString(36).substr(2));
    // let clickAdd = 
    document.querySelector(".add-button-styling").addEventListener("click",()=>{

        closepopup();
            console.log("printing");
        // for(var i=0; i<todoitems.length;i++){
            var node = document.createElement("div");
            var inputVal = document.querySelector("#addToDoHeading").value;
            node.setAttribute("class","card-styling");
            node.setAttribute("id",Math.random().toString(36).substr(2));
            console.log(node.id);
            console.log(inputVal);
            node.innerHTML = 
                        `<div class="card-heading">
                            <p class="paragraph">${inputVal}</p>
                            <hr>
                        </div>
                        <div class="card-description">
                            <ul class="unordered-list-items" style="list-style-type:none;">
                            
                            </ul>
                        </div>
                        <div class="footer">
                            <button class="btn-completed" onclick="addToDOList(this)">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                            <button class="btn-completed" onclick="removeItems()">
                                <i class="fas fa-plus-circle"></i>
                            </button>
                        </div>
                            `
            document.querySelector(".flex-row-container").appendChild(node);
           

        // }
    })
// }

function addToDOList(addbutton){
    console.log("adding item");
}

function removeItems(){
    console.log("removing item");
}