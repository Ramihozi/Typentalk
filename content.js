document.addEventListener('keydown', (a) => {
  let audioSpace = new Audio(chrome.runtime.getURL('Sound/Letter A.mp3'));
  if (a.keyCode === 65) audioSpace.play();
});
