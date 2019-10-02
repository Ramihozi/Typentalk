//document.addEventListener('keydown', (a) => {
  //let audioSpace = new Audio(chrome.runtime.getURL('Sound/Letter A.mp3'));
  //if (a.keyCode === 65) audioSpace.play();
//});


let audioSpace = new Audio(chrome.runtime.getURL('Sound/Letter A.mp3'));
document.addEventListener('keydown',playAudio);
function playAudio(e) {
  if (e.keyCode === 65) audioSpace.play();
}
