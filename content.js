//document.addEventListener('keydown', (a) => {
  //let audioSpace = new Audio(chrome.runtime.getURL('Sound/Letter A.mp3'));
  //if (a.keyCode === 65) audioSpace.play();
//});



//document.addEventListener('keydown',playAudio);
//function playAudio(e) {
  //let audioSpace = new Audio(chrome.runtime.getURL('LetterA.mp3'));
  //if (e.keyCode === 65) audioSpace.play();
//}

let testB =  chrome.runtime.getURL('Sound/LetterB.mp3');
let testA =  chrome.runtime.getURL('Sound/LetterA.mp3');
let testC =  chrome.runtime.getURL('Sound/LetterC.mp3');
let testD =  chrome.runtime.getURL('Sound/LetterD.mp3');
let testE =  chrome.runtime.getURL('Sound/LetterE.mp3');



document.addEventListener('keydown',playAudio);
function playAudio(e) {
  let audioA = new Audio(testA);
  let audioB = new Audio(testB);
  let audioC = new Audio(testC);
  let audioD = new Audio(testD);
  let audioE = new Audio(testE);
  
  
  
  if (e.keyCode === 65) audioA.play();
  else if (e.keyCode === 66) audioB.play();
  else if (e.keyCode === 67) audioC.play();
  else if (e.keyCode === 68) audioD.play();
  else if (e.keyCode === 69) audioE.play();
  
}


