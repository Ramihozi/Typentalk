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
let testF =  chrome.runtime.getURL('Sound/LetterF.mp3');
let testG =  chrome.runtime.getURL('Sound/LetterG.mp3');
let testH =  chrome.runtime.getURL('Sound/LetterH.mp3');
let testI =  chrome.runtime.getURL('Sound/LetterI.mp3');
let testJ =  chrome.runtime.getURL('Sound/LetterJ.mp3');
let testK =  chrome.runtime.getURL('Sound/LetterK.mp3');
let testL =  chrome.runtime.getURL('Sound/LetterL.mp3');
let testM =  chrome.runtime.getURL('Sound/LetterM.mp3');
let testN =  chrome.runtime.getURL('Sound/LetterN.mp3');
let testO =  chrome.runtime.getURL('Sound/LetterO.mp3');
let testP =  chrome.runtime.getURL('Sound/LetterP.mp3');

document.addEventListener('keydown',playAudio);
function playAudio(e) {
  let audioA = new Audio(testA);
  let audioB = new Audio(testB);
  let audioC = new Audio(testC);
  let audioD = new Audio(testD);
  let audioE = new Audio(testE);
  let audioF = new Audio(testF);
  let audioG = new Audio(testG);
  let audioH = new Audio(testH);
  let audioI = new Audio(testI);
  let audioJ = new Audio(testJ);
  let audioK = new Audio(testK);
  let audioL = new Audio(testL);
  let audioM = new Audio(testM);
  let audioN = new Audio(testN);
  let audioO = new Audio(testO);
  let audioP = new Audio(testP);
  
  if (e.keyCode === 65) audioA.play();
  else if (e.keyCode === 66) audioB.play();
  else if (e.keyCode === 67) audioC.play();
  else if (e.keyCode === 68) audioD.play();
  else if (e.keyCode === 69) audioE.play();
  else if (e.keyCode === 70) audioF.play();
  else if (e.keyCode === 71) audioG.play();
  else if (e.keyCode === 72) audioH.play();
  else if (e.keyCode === 73) audioI.play();
  else if (e.keyCode === 74) audioJ.play();
  else if (e.keyCode === 75) audioK.play();
  else if (e.keyCode === 76) audioL.play();
  else if (e.keyCode === 77) audioM.play();
  else if (e.keyCode === 78) audioN.play();
  else if (e.keyCode === 79) audioO.play();
  else if (e.keyCode === 80) audioP.play();
  
}


