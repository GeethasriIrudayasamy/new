// let name1 = {
//     firstName: "Jeon",
//     lastName: "Jungkook",
// };
// let name2 = {
//     firstName: "Kim",
//     lastName: "Taehyung",
// };
// let name3 = {
//     firstName: "Park",
//     lastName: "Jimin",
// };
// let printfullname = function (cateogorized, groupname) {
//     console.log(
//         this.firstName +
//             " " +
//             this.lastName +
//             " is the" +
//             " " +
//             cateogorized +
//             " in the group" +
//             " " +
//             groupname
//     );
// };
// let printdetails1 = printfullname.bind(name1);
// let printdetails2 = printfullname.bind(name2);
// let printdetails3 = printfullname.bind(name3);
// printdetails3("sweetest", "BTS");
// printdetails2("visual", "BTS");
// printdetails1("maknae", "BTS");

// printfullname.apply(name3, ["sweetest", "BTS"]);
// printfullname.apply(name2, ["visual", "BTS"]);
// printfullname.apply(name1, ["maknae", "BTS"]);

// const clicked = document.getElementById("submit");
// clicked.addEventListener("click", () => {
//     console.log("cliked me");
// });

// const myToy = {
//     name: "Tinky",
//     material: "cloth",
//     stuffing: "cotton",
// };

// const updateMyToy = {
//     type: "Teddy",
//     color: "purple",
//     name: "Twinkle",
// };

// const myUpdatedToy = { ...myToy, ...updateMyToy };
// console.log(myUpdatedToy);
// var arr1 = [12, 09, 2000];
// var arr2 = [01, 09, 1997];

// arr1 = [...arr2, ...arr1];
// console.log(arr1);

//this in global scope
this.num = 5;
console.log(this.num);

//this inside a method

let add = {
    num1: 7,
    num2: 5,
    adding() {
        console.log(this.num1 + this.num2);
    },
};
add.adding();

//this inside an object
let number = {
    num3: 3,
};
console.log(number.num3);

//this inside inner function
const print = function () {
    console.log(this.num);
};
print.call(this);

//this inside a constructor
let displayNum = function (param1) {
    this.value = param1;
};
displayNum.prototype.printvalue = function (param1) {
    console.log(param1);
};
const val1 = new displayNum("ten");
const val2 = new displayNum("six");

val1.printvalue(10);
val2.printvalue(6);

//this inside a class

class Student {
    static count() {
        Student.counter = (Student.counter || 0) + 1;
        return;
    }
    constructor(name, age, phonenumber, mark) {
        Student.count();
        let count = 0;
        this.name = name;
        this.age = age;
        this.number = phonenumber;
        this.mark = mark;
        count = count + 1;
    }
    checkEligibility() {
        if (this.mark >= 40) {
            return true;
        } else {
            return false;
        }
    }
    checkEligibilityforPlacement(minAge) {
        return (minmark) => {
            if (this.mark > minmark && this.age > minAge) {
                console.log(this.name + " is eligible for placements");
            } else {
                console.log(this.name + " is not eligible for placements");
            }
        };
    }
}

const stu1 = new Student("Kim Seokjin", 29, 9999999999, 88);
const stu2 = new Student("Kim Namjoon", 27, 9999988888, 65);
const stu3 = new Student("Jung Hoseok", 27, 9999777777, 91);
const stu4 = new Student("Min Yoongi", 28, 9666997779, 77);
const stu5 = new Student("Park Jimin", 26, 9995555599, 66);
const stu6 = new Student("Zyan", 26, 9779555559, 34);

console.log(Student.counter);

stu1.checkEligibilityforPlacement(18)(40);
stu2.checkEligibilityforPlacement(18)(40);
stu3.checkEligibilityforPlacement(18)(40);
stu4.checkEligibilityforPlacement(18)(40);
stu5.checkEligibilityforPlacement(18)(40);
stu6.checkEligibilityforPlacement(18)(40);
