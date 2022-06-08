// var Seconditem = document.querySelector(".list-group-item:nth-child(2)");
// Seconditem.style.backgroundColor = "green";

// var Thirditem = document.querySelector(".list-group-item:nth-child(3)");
// Thirditem.style.visibility = "hidden";

var odd = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}

//Diff b/w querySelector and querySelectorAll
//querySelector is used to access single element whereas querySelectorAll is used to access all elements that matches the selectors.

//DOM
var even = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = "grey";
}
