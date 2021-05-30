
// first step to take ids of input and button of the Add section

const addInput = document.getElementById("inputElement")
const addbutton = document.getElementById("buttonElement")
const result = document.querySelector(".result")

addbutton.addEventListener("click", function buttonFunction() {
  result.innerHTML = addInput.value;
  result.innerHTML = `${value}`;
  result.appendChild(addInput);


});

//buttonFunction()


const deleteButton = document.querySelector(".delete-2")
const deletedInput = document.querySelector(".scratch")
const listItem = document.getElementById("listItem")

deleteButton.addEventListener("click", function deletedItem() {
  deletedInput.appendChild(listItem);
});

deletedItem()

