const myTextInput = document.getElementsByTagName('h2')[0];
const myButton = document.querySelector('.button');
const myDiv = document.querySelectorAll('.section2');
const ham = document.querySelector('.ham');
const myHamList = document.querySelector('.ham-list');
const cancel = document.querySelector('.cancel');

myTextInput.addEventListener('click', () => {
  myTextInput.innerHTML = 'Have a Good Time!';
});

myButton.addEventListener('click', () => {
  for (let i = 0; i < myDiv.length; i++) {
    myDiv[i].style.display = 'flex';
  }
});

ham.addEventListener('click', () => {
  myHamList.style.display = 'block'
})

cancel.addEventListener('click', () => {
  myHamList.style.display = 'none';
})
