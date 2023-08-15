// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.

function RandomNumber() {
    const num = Math.floor(Math.random() * 100);
    console.log(num);

}

function delay() {
    let count = 3
    const interval = setInterval(() => {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            clearInterval(interval);
            RandomNumber();
        }
    }, 2000)
}
delay();