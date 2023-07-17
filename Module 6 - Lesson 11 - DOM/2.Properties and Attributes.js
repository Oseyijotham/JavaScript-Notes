/*When building a DOM tree, some standard HTML attributes become element properties. 
Let's take a look at a few commonly used properties.

*value* contains the current text content of form elements.
*checked* stores the state of a checkbox or radio button.
*name* stores the value specified in the name HTML attribute.
*src* is the path to the <img> tag’s image.*/

//===================================================
const message = document.querySelector("#message");
console.log(message.value); // Default textarea message

//===================================================
const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';

//textContent property
/*elem.textContent returns the text content inside the element. 
It is available for reading and writing. No matter what is passed to textContent, 
the data will always be written as text.*/

const text = document.querySelector(".article-text");
console.log(text.textContent); // text inside p.article-text

const title = document.querySelector(".article-title");
title.textContent = 'Welcome to Bahamas!';

//classList property
const text = document.querySelector("#paragraph");

console.log(text.classList); // ["text", "red", "big", value: "text red big"] /*(CREATES AN ARRAY OF ALL THE CLASSES BEING USED 
/*ALONG SIDE THE #paragraph)*/

console.log(text.classList.contains("red")); // true

text.classList.remove("big");
console.log(text.classList); // ["text", "red", value: "text red"]

text.classList.add("new-class");
console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// Can add multiple classes
text.classList.add("a", "b", "c");
console.log(text.classList);

text.classList.toggle("is-hidden"); // will add is-hidden class
text.classList.toggle("is-hidden"); // will remove is-hidden class

// classList has a forEach method
text.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});

//style property
const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object

//Attributes
const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Lake and clouds"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature

//Data attributes
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});