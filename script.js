const box = document.getElementsByClassName('box')[0];
const red = document.getElementsByTagName('input')[0];
const green = document.getElementsByTagName('input')[1];
const blue = document.getElementsByTagName('input')[2];

red.addEventListener('input',function () {
    box.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`
})
green.addEventListener('input',function () {
    box.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`
})
blue.addEventListener('input',function () {
    box.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`
})