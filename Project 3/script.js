// element ID from HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

//Function with li, alert 

function addTask(){
    // alert pops up when inputbox is empty 
    if(inputBox.value === ''){
        alert("Ops you need too write something!");
    }
    else{
        // saveing li element  
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

//check og uncheck click
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

// will be stored in the browser with data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// display data when browser is open
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();