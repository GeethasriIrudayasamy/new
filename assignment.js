let name1 = {
    firstName: "Jeon",
    lastName: "Jungkook",
};
let name2 = {
    firstName: "Kim",
    lastName: "Taehyung",
};
let name3 = {
    firstName: "Park",
    lastName: "Jimin",
};
let printfullname = function (cateogorized, groupname) {
    console.log(
        this.firstName +
            " " +
            this.lastName +
            " is the" +
            " " +
            cateogorized +
            " in the group" +
            " " +
            groupname
    );
};
let printdetails1 = printfullname.bind(name1);
let printdetails2 = printfullname.bind(name2);
let printdetails3 = printfullname.bind(name3);
printdetails3("sweetest", "BTS");
printdetails2("visual", "BTS");
printdetails1("maknae", "BTS");

printfullname.apply(name3, ["sweetest", "BTS"]);
printfullname.apply(name2, ["visual", "BTS"]);
printfullname.apply(name1, ["maknae", "BTS"]);
