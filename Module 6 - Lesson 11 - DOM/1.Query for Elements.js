/*So, you already know that a DOM element is an object with properties and methods. 
It is time to learn how to quickly find elements using arbitrary CSS selectors. 
The elem.querySelector* group of methods is a present-day standard for such queries. 
They help you find an element or a group of elements using a CSS selector of any complexity.*/

element.querySelector(selector);

/*Use it to find only one – most often unique – element.

It returns the first element found within element that matches the selector CSS selector.
If nothing is found, it will return null*/

element.querySelectorAll(selector);

/*Use it to find a collection of elements, that is, to get an array of references to elements with the same selector.For example
, all items in a list with the menu - item class.

It returns a pseudo-array of all elements inside element that match the selector CSS selector.
If nothing is found, it will return an empty array.*/


const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);
