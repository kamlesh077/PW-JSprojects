// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output.


let input = "Kamlesh"

function  reverseStr(str) {
    let output = str.split("").reverse("").join("")
    console.log(output);
}

function delayStrPrint(input) {
    setTimeout(function () {
    const reversedString = reverseStr(input);
    console.log("Reversed string: " + reversedString);
  }, 2000); // 2000 milliseconds (2 seconds)
}

delayStrPrint(input)
