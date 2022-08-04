// let student = {
//     name: "Anu",
//     age: 20,
// };
// function toprint() {
//     console.log(this.age);
// }
// var printdetail = toprint.bind(student);
// printdetail();

//Using bind()
let multiply = function (x, y) {
    console.log(x * y);
};
let multiplyby12 = multiply.bind(this, 12);
multiplyby12(12);

//Using closure
let multiplication = function (a) {
    return function (b) {
        console.log(a * b);
    };
};
let multiplyby13 = multiplication(13);
multiplyby13(13);
