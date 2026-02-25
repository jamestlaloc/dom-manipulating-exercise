const container = document.querySelector("#container");
const button = document.querySelector(".btn");

const para = document.createElement("p");
para.classList.add("red");
para.textContent = "This should be red!";
para.style.color = "red";

const hThree = document.createElement("h3");
hThree.textContent = "This Should be Blue (Like Me)";
hThree.classList.add("blue");
hThree.style.color = "blue";

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorius text-content!";

const div = document.createElement("div");
div.style.border = "black";
div.style.backgroundColor = "pink";

const header = document.createElement("h1");
header.textContent = "I'm in a div";

const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!"

button.addEventListener('click', (e) => {
  console.log(e);
  e.target.style.background = "green";
  e.target.textContent = "You clicked me!";
  container.appendChild(content)
  container.appendChild(para);
  container.appendChild(hThree);
  div.appendChild(header);
  div.appendChild(paragraph);
  container.appendChild(div);
});

