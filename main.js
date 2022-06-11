// // var Seconditem = document.querySelector(".list-group-item:nth-child(2)");
// // Seconditem.style.backgroundColor = "green";

// // var Thirditem = document.querySelector(".list-group-item:nth-child(3)");
// // Thirditem.style.visibility = "hidden";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

// //Diff b/w querySelector and querySelectorAll
// //querySelector is used to access single element whereas querySelectorAll is used to access all elements that matches the selectors.

// //DOM
// var even = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "grey";
// }

// parentNode and parentElement for most part are the samr
var itemlister = document.querySelector("#items");
// console.log(itemlister.parentNode);
itemlister.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlister.parentNode.parentNode.parentNode);

//childnode
// console.log(itemlister.childNodes);//text inoutput represents linebreaks
// console.log(itemlister.children);
// console.log(itemlister.children[1]);
itemlister.children[1].style.color = "green";
itemlister.children[2].style.color = "green";
//firstChild include line breaks too firstElementChild will be better to use
itemlister.firstElementChild.style.backgroundColor = "#e6e6fa";
//same applies for last element child
itemlister.lastElementChild.style.backgroundColor = "#e6e6fa";
//previousSibling - it includes linebreaks too so we use previousElementSibling
itemlister.previousElementSibling.style.color = "red";

// createElement

var newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = "hello1";
newDiv.setAttribute("title", "Hello Div");
var newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);

var container1 = document.querySelector("ul.list-group");
var h2 = document.querySelector("list-group h2");
container1.insertAdjacentHTML("afterbegin", "Hello world");
