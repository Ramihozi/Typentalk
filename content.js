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



document.addEventListener('keydown',playAudio);
function playAudio(e) {
  let audioSpace = new Audio(testA);
  let audioSpace = new Audio(testB);
  
  
  
  if (e.keyCode === 65) audioA.play();
  else if (e.keyCode === 66) audioB.play();
}


