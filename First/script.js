// window
// window is a global object that is available in all the browser. It is used to access the browser APIs.
// some of the browser APIs are available in the window object. like alert, confirm, prompt, setTimeout, setInterval, clearTimeout, clearInterval, location, history, navigator, screen, etc.
// "document" in window; // true
// "alert" in window; // true
// "prompt" in window; // true

// document
// document is a global object that is available in all the browser. It is used to access the HTML DOM APIs.
// some of the HTML DOM APIs are available in the document object. like getElementById, getElementsByTagName, getElementsByClassName, querySelector, querySelectorAll, createElement, appendChild, removeChild, etc.

// getElementById
// to get an element by its id we use the getElementById() method and pass in the id of the element we want to get
// find the below code
document.getElementById("name"); // <p id="name">John</p>

// getElementsByTagName
// to get all the elements by their tag name we use the getElementsByTagName() method and pass in the tag name of the elements we want to get
// find the below code
document.getElementsByTagName("p"); // [<p id="name">John</p>, <p id="age">30</p>]

// getElementsByClassName
// to get all the elements by their class name we use the getElementsByClassName() method and pass in the class name of the elements we want to get
// find the below code
document.getElementsByClassName("bold"); // [<p class="bold">John</p>, <p class="bold">30</p>]

// querySelector
// to get an element by its css selector we use the querySelector() method and pass in the css selector of the element we want to get
// find the below code
document.querySelector("#name"); // <p id="name">John</p>

// querySelectorAll
// to get all the elements by their css selector we use the querySelectorAll() method and pass in the css selector of the elements we want to get
// find the below code
document.querySelectorAll("p"); // [<p id="name">John</p>, <p id="age">30</p>]

// createElement
// to create an element we use the createElement() method and pass in the tag name of the element we want to create
// find the below code
document.createElement("p"); // <p></p>

// appendChild
// to append an element to another element we use the appendChild() method and pass in the element we want to append and the element we want to append to
// find the below code
let newElement = document.createElement("p");
newElement.innerHTML = "Hello World";
document.body.appendChild(newElement); // <p>Hello World</p>

// removeChild
// to remove an element from another element we use the removeChild() method and pass in the element we want to remove and the element we want to remove from
// find the below code
let newElement1 = document.createElement("p");
newElement1.innerHTML = "Hello World";
document.body.appendChild(newElement1); // <p>Hello World</p>
document.body.removeChild(newElement1); // <p>Hello World</p>

// innerHTML
// to get or set the innerHTML of an element we use the innerHTML property
// find the below code
let newElement2 = document.createElement("p");
newElement2.innerHTML = "Hello World";
document.body.appendChild(newElement2); // <p>Hello World</p>
newElement2.innerHTML = "Hello World Again";
// <p>Hello World Again</p>

// innerText
// to get or set the innerText of an element we use the innerText property
// find the below code
let newElement3 = document.createElement("p");
newElement3.innerText = "Hello World";
document.body.appendChild(newElement3); // <p>Hello World</p>
newElement3.innerText = "Hello World Again";
// <p>Hello World Again</p>

// outerHTML
// to get or set the outerHTML of an element we use the outerHTML property
// find the below code
let newElement4 = document.createElement("p");
newElement4.innerHTML = "Hello World";
document.body.appendChild(newElement4); // <p>Hello World</p>
newElement4.outerHTML = "<div>Hello World</div>";
// <div>Hello World</div>

// outerText
// to get or set the outerText of an element we use the outerText property
// find the below code
let newElement5 = document.createElement("p");
newElement5.innerText = "Hello World";
document.body.appendChild(newElement5); // <p>Hello World</p>
newElement5.outerText = "<div>Hello World</div>";
// <div>Hello World</div>

// document.write
// to write text to the document we use the document.write() method and pass in the text we want to write
// find the below code
document.write("Hello World"); // Hello World

// document.writeln
// to write text to the document we use the document.writeln() method and pass in the text we want to write
// find the below code
document.writeln("Hello World"); // Hello World

// document.body
// to get the body of the document we use the document.body property
// find the below code
document.body; // <body></body>

// document.head
// to get the head of the document we use the document.head property
// find the below code
document.head; // <head></head>
