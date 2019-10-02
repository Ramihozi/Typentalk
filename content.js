//document.addEventListener('keydown', (a) => {
  //let audioSpace = new Audio(chrome.runtime.getURL('Sound/Letter A.mp3'));
  //if (a.keyCode === 65) audioSpace.play();
//});



document.addEventListener('keydown',playAudio);
function playAudio(e) {
  let audioSpace = new Audio(chrome.runtime.getURL('LetterA.mp3'));
  if (e.keyCode === 65) audioSpace.play();
}
