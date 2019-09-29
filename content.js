document.addEventListener('keydown', (a) => {
  let audioSpace = new Audio(chrome.runtime.getURL('LetterA.wav'));
  if (a.keyCode === 65) audioSpace.play();
});
