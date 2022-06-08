// var Seconditem = document.querySelector(".list-group-item:nth-child(2)");
// Seconditem.style.backgroundColor = "green";

// var Thirditem = document.querySelector(".list-group-item:nth-child(3)");
// Thirditem.style.visibility = "hidden";

var odd = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
