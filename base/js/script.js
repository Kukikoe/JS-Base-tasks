"use strict";

let buttons = document.getElementsByClassName("task__btn"); 


for(let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", paintTask);
}

function paintTask() {
	let task = this.closest(".task"); 
	task.classList.add("colored");
	setTimeout( () => {
		task.classList.remove("colored");
	}, 1000);
}