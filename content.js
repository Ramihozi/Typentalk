document.addEventListener('keydown', (e) => {
  let audioSpace = new Audio(chrome.runtime.getURL('sound.wav'));
  if (e.keyCode === 32) audioSpace.play();
});
