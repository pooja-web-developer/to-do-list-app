const inputcontainer = document.getElementById("input-container");
const listcontainer = document.querySelector(".list-container ul");


function addTask(){
    if(inputcontainer.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = inputcontainer.value;
        li.appendChild(span);

        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit";
        li.appendChild(editBtn);
        editBtn.classList.add("edit-btn");
        editBtn.onclick = function() {
            let newText = prompt("Edit task:", span.textContent);
            if (newText !== null) {
                span.textContent = newText;
            }
        };
        li.appendChild(editBtn);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        li.appendChild(deleteBtn);
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            li.remove();

        };
        li.appendChild(deleteBtn);

    }
     inputcontainer.value = '';
     saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveData();

    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();