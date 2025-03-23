const main = document.getElementById("main");
if (main) {
  main.remove();
}

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = " Arnold is the champion"; 

document.body.append(newHeader);
