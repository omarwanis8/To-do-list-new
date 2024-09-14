const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();


// function addTask(){
//     if(inputBox.value == ''){
//         alert("You must write something!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
        
//         // Add event listener to the new <li> element
//         li.addEventListener("click", function(e){
//             e.target.classList.toggle("checked");
//         });

//         let span = document.createElement("span");
//         span.innerHTML= "\u00d7";
//         li.appendChild(span);
        
//         // Add event listener to the new <span> element
//         span.addEventListener("click", function(e){
//             e.target.parentElement.remove();
//         });
//     }
//     inputBox.value = "";
// }

