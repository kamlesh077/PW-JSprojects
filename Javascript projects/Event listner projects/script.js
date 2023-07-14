const onClick = document.getElementById("onclick")
const doubleClick = document.getElementById("doubleclick")
const mouseOver = document.getElementById("mouseover")
const mouseOut = document.getElementById("mouseout")
const onKeypress = document.getElementById("onkeypress")
const keyDown = document.getElementById("keydown")
const keyUp = document.getElementById("keyup")

onClick.addEventListener('click', () => {
    alert("You clicked onclick button");
});

doubleClick.addEventListener('dblclick', () => {
    alert("doubleClick event is working properly 👍");
});

mouseOver.addEventListener('mouseover', () => {
    alert("mouseOver event is working properly 👍");
});

mouseOut.addEventListener('mouseout', () => {
    
    alert("mouseOut event is working properly 👍");
});

onKeypress.addEventListener('keypress', () => {
    alert("onKeypress event is working properly 👍");
});

keyDown.addEventListener('keydown', () => {
    alert("keyDown event is working properly 👍");
})

keyUp.addEventListener('keyup', () => {
    alert("keyUp event is working properly 👍");
});