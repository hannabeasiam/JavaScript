//Define book constructor pass three parameter
function Book(theTitle,theAuthor,thePrice) {
  //assign parameter to properties of custom object
  this.title = theTitle;
  this.author = theAuthor;
  this.price = thePrice;
  //define method call show, which call function showProps
  this.show = showProps;
};

function showProps() {
  var result = '';
  //for i in this statement, display all the properties
  for (var i in this) {
    //however it will not display when(i is 'show' which is book object, or i is 'addTax' )
    if (i == 'show' || i == 'addTax') continue;
    //assign result : property name = value of property, and increment
    result += i + '=' + this[i] + '<br>';
  }
  return result;
};