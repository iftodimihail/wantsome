const headElement = document.getElementById("head");
console.log(headElement);
headElement.style.color = "white";
headElement.style.backgroundColor = "red";

const liElements = document.getElementsByClassName("item");
console.log(liElements);

liElements[0].style.backgroundColor = "blue";
liElements[1].style.backgroundColor = "yellow";
liElements[2].style.backgroundColor = "magenta";

const sectionElements = document.getElementsByTagName("section");
console.log(sectionElements);

const listItemsElementsQuerySelector =
  document.querySelectorAll(".item:first-child");
console.log("Query selector: ", listItemsElementsQuerySelector);

console.log(headElement.parentNode.parentNode);
