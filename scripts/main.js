
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog.png') {
      myImage.setAttribute ('src','images/puppy.png');
    } else {
      myImage.setAttribute ('src','images/dog.png');
    }
} 


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');

  if(!myName || myName === null) {
    setUserName();
  } else {
    //localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Dogs are cool, ' + myName;
  }
}


btn.onclick = function() {
  setUserName();
}