
// first step to take ids of input and button of the Add section

const label = document.getElementById("labelElement");
const addInput = document.getElementById("inputElement")
const addbutton = document.getElementById("buttonElement")

// second step is to take ids of The List section

const listUl = document.getElementById("unorderedList");
const completed = document.querySelector("ul")[1];

// try to add new items by creating function


function addItem() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(addInput.value));
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.class = "checkbox";

  const label = document.createElement("label");

  const deleteButton = document.createElement("button");
  deleteButton.class = "delete-2";
  deleteButton.innerHTML = "Delete";
  label.innerHTML = addInput.value;
  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  listUl.appendChild(li);
}

addbutton.addEventListener("click", addItem)




const list
function createItems() {
  const addValue = addInput.value
  listUL.push
  addInput.innerHTML = listUL

}

addbutton.addEventListener("click", createItems)

function myFunction() {
  const node = document.createElement("li");
  const textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}







