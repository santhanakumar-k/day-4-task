//1. Print odd numbers in an array

var a = 5;
if (a%2==0){
    console.log("Even");

}else{
    console.log("Odd");
}

// 2. Convert all the strings to title caps in a string array

var name = "car,bus,train";
console.log(name.toUpperCase());

// 3.Sum of all numbers in an array

let myNums = [1, 2, 3, 4, 5];


let sum = 0;

for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum);

// 4. Return all the prime numbers in an array

for (let i=1;i<=10;i++){
    console.log(i);
}


// 5. Return all the palindromes in an array

for(let i=10;i>=1;i--){
    console.log(i);
}


// 6.Remove duplicates from an array
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {  
     return [...new Set(arr)];
}

console.log(removeDuplicates(arr));


