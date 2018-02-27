/* define fuction House, pass 4 parameters
object constructor house
1. output some info about myhouse in HTML, */
function House(theRooms, theStyle, theYearBuilt, doesHaveGarage) {
  //this being a House object rooms: defining a property in the house object and assigning it to the parameter that passed
  this.rooms = theRooms;
  this.style = theStyle;
  this.yearBuilt = theYearBuilt;
  this.hasGarage = doesHaveGarage;
  //to define methods, name of method, and assign name of fuction
  this.livingSpace = livingSpace; //no opengint closing parenthesis
  this.maintain = maintain; //system will automatically look for an identifier named maintain, weather variable or function founded will be use
}
function livingSpace(length, width, numFloors) {
  return (length * width * numFloors);
};
function maintain() {
  alert('Keep the house in top shape');
}