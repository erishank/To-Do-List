const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// adding fuction for list container//
function addTask(){
    if(inputBox.value ===''){ //if input box is empty//
        alert(" Write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;// adding the text to list
        listContainer.appendChild(li); // display the list
       
        //creating the delete icon//
        let span = document.createElement ("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// adding click function to the li list//
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// store the data in the browser or local Storage.
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
// displaying the data in local storage.
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();
