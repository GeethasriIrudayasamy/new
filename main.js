// // // var Seconditem = document.querySelector(".list-group-item:nth-child(2)");
// // // Seconditem.style.backgroundColor = "green";

// // // var Thirditem = document.querySelector(".list-group-item:nth-child(3)");
// // // Thirditem.style.visibility = "hidden";

// // var odd = document.querySelectorAll("li:nth-child(odd)");
// // for (var i = 0; i < odd.length; i++) {
// //   odd[i].style.backgroundColor = "green";
// // }

// // //Diff b/w querySelector and querySelectorAll
// // //querySelector is used to access single element whereas querySelectorAll is used to access all elements that matches the selectors.

// // //DOM
// // var even = document.querySelectorAll("li:nth-child(odd)");
// // for (var i = 0; i < even.length; i++) {
// //   even[i].style.backgroundColor = "grey";
// // }

// // parentNode and parentElement for most part are the samr
// var itemlister = document.querySelector("#items");
// // console.log(itemlister.parentNode);
// itemlister.parentNode.style.backgroundColor = "#f4f4f4";
// // console.log(itemlister.parentNode.parentNode.parentNode);

// //childnode
// // console.log(itemlister.childNodes);//text inoutput represents linebreaks
// // console.log(itemlister.children);
// // console.log(itemlister.children[1]);
// itemlister.children[1].style.color = "green";
// itemlister.children[2].style.color = "green";
// //firstChild include line breaks too firstElementChild will be better to use
// itemlister.firstElementChild.style.backgroundColor = "#e6e6fa";
// //same applies for last element child
// itemlister.lastElementChild.style.backgroundColor = "#e6e6fa";
// //previousSibling - it includes linebreaks too so we use previousElementSibling
// itemlister.previousElementSibling.style.color = "red";

// // createElement

// var newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello1";
// newDiv.setAttribute("title", "Hello Div");
// var newDivText = document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1);

// var container1 = document.querySelector("ul.list-group");
// var h2 = document.querySelector("list-group h2");
// container1.insertAdjacentHTML("afterbegin", "Hello world");

var form = document.getElementById("addForm");
var itemLister = document.getElementById("items");
var filter = document.getElementById("filter");

//event
form.addEventListener("submit", addItem);
//delete event
itemLister.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);
//add item
function addItem(e) {
    e.preventDefault();

    //input value
    var newitem = document.getElementById("item").value;
    //create element
    var li = document.createElement("li");
    //CLass is added
    li.className = "list-group-item";
    //Add textNode
    li.appendChild(document.createTextNode(newitem));

    //create del button
    var deleteButton = document.createElement("button");
    //add class to del button
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    //textnode
    deleteButton.appendChild(document.createTextNode("X"));
    //appendButton
    li.appendChild(deleteButton);
    //append value submitted to list
    itemLister.appendChild(li);

    //add Edit button
    var editButton = document.createElement("button");
    //add class to del button
    editButton.className = "btn btn-sm float-right edit";
    //textnode
    editButton.appendChild(document.createTextNode("edit"));
    //appendButton
    li.appendChild(editButton);
    //append value submitted to list
    itemLister.appendChild(li);

    //add description
    var description = document.createElement("description");
    //add class to ddescription
    description.className = "des";
    //textnode
    description.appendChild(document.createTextNode("Next element"));
    //appenddescription
    li.appendChild(description);
    //append value submitted to list
    itemLister.appendChild(li);
}

//Remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            var li = e.target.parentElement;
            itemLister.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemLister.getElementsByTagName("li");
    var description = itemLister.getElementsByTagName("dl");
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var desName = item.innerText;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        if (desName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
