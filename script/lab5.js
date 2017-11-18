function changeStyle() {
  let fP = document.getElementById('firstP');
  fP.style.textAlign = 'center';
  
  let sP = document.getElementById('secondP')
  sP.style.textAlign = 'right';
  
  let midP = document.getElementsByClassName('middleP');
  midP[0].style.backgroundColor = 'blue';
  midP[0].style.color = 'cyan';
  midP[1].style.backgroundColor = 'blue';
  midP[1].style.color = 'cyan';
  var colorList = new Array('yellow', 'black', 'cyan', 'white', 'Yellow', 'red');
  var bgColorList = ['red', 'white', 'blue', 'black','green', 'orange'];
  var paragraph = document.getElementsByTagName('p');
  var fifthP = paragraph[4];
  var i = 0;
  setInterval(function keepChange(){
    fifthP.style.backgroundColor = bgColorList[i];
    fifthP.style.color = colorList[i];
    i += 1;
    if (i == colorList.length){
      i = 0;
    }
    console.log(i);   
  }, 3000);
}

function hiddenP(){
  var newP = document.createElement('p');
  newP.innerHTML = 'Stage 6: Deployment in the Market and Maintenance';
  window.document.body.appendChild(newP);
  document.getElementById('hiddenPara').disabled = true;
}

function reloadPage() {
  window.location.reload();
  document.getElementById('hiddenPara').disabled = false;
}