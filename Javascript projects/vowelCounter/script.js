function getCount(name) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (var i = 0; i < name.length; i++) {
if (vowels.includes(name[i].toLowerCase())) {
vowelsCount++;
}
    }
    return vowelsCount;
}

var user_input = prompt("Enter your name:");
var VowelsCounted = getCount(user_input);
document.getElementById('result').innerHTML = "The Vowels are :- " + VowelsCounted;