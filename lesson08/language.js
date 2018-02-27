function WebLanguages(myName,myBestPart,myEaseToLearn,myRating) {
  this.name = myName;
  this.bestPart = myBestPart;
  this.easeToLearn = myEaseToLearn;
  this.rating = myRating;
};
function show(languageShow) {
  document.write('Language Name: '+languageShow.name+'<br>');
  document.write('Best Part: '+languageShow.bestPart+'<br>');
  document.write('Ease of Learning: '+languageShow.easeToLearn+
    '<br>');
  document.write('Rating 1 to 10: '+languageShow.rating+'<br>');
  document.write('<br>');
};

var JS = new WebLanguages('JavaScript','Makes cool effects',
  'Moderate',10);
var JV = new WebLanguages('Java',
  'Makes platform-independent applications','Hard',8);
var HT = new WebLanguages('HTML5/CSS',
  'Makes pretty pages','Easy',9);
  
function start() {
  document.write('<h2>JavaScript Specialist</h2>');
  document.write('<h3>Rating Web Languages</h3>');
  //show object passing HT variable which contains webLangagues custom object. 
  show(HT);
  show(JS);
  show(JV);
};