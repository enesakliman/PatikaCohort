// Atamalar
let taskInput = document.querySelector("#task");
let list = document.querySelector("#list");
let addButton = document.querySelector("#liveToastBtn");

let liItems = document.querySelectorAll("#list li");
liItems.forEach((item) => {
  addDeleteButton(item);
  addCheckEvent(item);
});

// Fonksiyonlar
function newElement() {
  if (taskInput.value.trim() != "") {
    let li = document.createElement("li");
    li.textContent = taskInput.value;

    addDeleteButton(li);
    addCheckEvent(li);

    list.appendChild(li);

    $(".success").toast("show");

    taskInput.value = "";
  } else {
    $(".error").toast("show");
  }
}

function addDeleteButton(li) {
  let span = document.createElement("span");
  span.textContent = "×";
  span.classList.add("close");
  span.onclick = function () {
    li.remove();
  };
  li.appendChild(span);
}

function addCheckEvent(li) {
  li.onclick = function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  };
}

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addButton.click();
  }
});
