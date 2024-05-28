
// Get current date and time
var now = new Date();
console.log(now);
var datetime = now.toLocaleString();
console.log(datetime);
// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;

const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("add-button");
const list1 = document.getElementById("l");
const listContainerElement = document.getElementById("list-container");
document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Call your result function
});

function addTask() {
    if (inputElement.value === "") {
        alert("Please add something!");
    }
    else {
        let newList = document.createElement("li");
        let span = document.createElement("span");
        span.classList.add("delete-icon");
        newList.innerHTML = inputElement.value
        listContainerElement.appendChild(newList);
        newList.appendChild(span);

        inputElement.value = "";
        saveData();
    }
}

listContainerElement.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // console.log('List item clicked:', e.target);
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        // e.target.parentElement.remove();
        e.target.parentElement.classList.add("fall");

        e.target.parentElement.addEventListener('transitionend', function () {
            e.target.parentElement.remove();
            saveData();

        })
    }
});


function saveData(){
    localStorage.setItem("data", listContainerElement.innerHTML);
}

function showData(){
    listContainerElement.innerHTML = localStorage.getItem("data");
}

showData();




