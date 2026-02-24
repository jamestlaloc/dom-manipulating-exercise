const container = document.querySelector("#container");
const button = document.querySelector(".btn");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorius text-content!";

button.addEventListener('click', () => container.appendChild(content));


// container.appendChild(content);