//Task 1: Working with Variables
let myNumber = 10;
let myString = "hello, JavaScript";

console.log(myNumber, myString);

//Task 2: Exploring Loops
for (let i=0; i <= 10; i+=1){
    console.log(i);
};

//Task 3: Discovering Functions
//for loop to calculate first 5 multiples of 3
for (let i=1; i <= 5; i++){
    console.log(3 * i);
}

//add 2 numbers
function addNumbers(num1, num2){
    return num1 + num2
}
console.log(addNumbers(3, 4))

//multiply 2 numbers
function multiplyNumbers(num1, num2){
    return num1 * num2
}
console.log(multiplyNumbers(14, 3))