'use strict';

function sum(a,b){
  var mySum = a + b;
  var myMsg = 'The sum of ' + a + ' and ' + b + ' is ' + mySum + '.';
  return [mySum, myMsg];
}
sum(4, 7);

function multiply(a, b) {
  var myMultiply = a * b;
  var myMessage = 'The product of ' + a + ' and ' + b + ' is ' + myMultiply + '.';
  return [myMultiply, myMessage];
}
multiply(5, 9);

function sumAndMultiply(a, b, c) {
  var  dubSum = sum(a, b);
  var dubProduct  =  multiply(a,b);
  var tripSum = sum(dubSum[0], c);
  var tripProduct = multiply(dubProduct[0], c);
  var mySumString = a + ' and ' + b + ' and ' + c + ' sum to ' + tripSum[0] + '.';
  var myProductString = 'The product of ' + a + ' and ' + b + ' and ' +  c + ' is ' + tripProduct[0] + '.';
  return [tripSum[0], tripProduct[0], mySumString, myProductString];
}
sumAndMultiply(4, 7, 5);

var testArray = [2,3,4];
function sumArray(testArray) {
  var dubSum = sum(testArray[0], testArray[1]);
  var tripSum = sum(dubSum[0], testArray[2]);
  var mySumString = testArray + ' was passed in as an array of numbers, and ' + tripSum[0] + ' is their sum.';
  return [tripSum, mySumString];
}
sumArray(testArray);

function multiplyArray(testArray){ //eslint-disable-line
  var dubProduct = multiply(testArray[0],testArray[1]);
  var tripProduct = multiply(dubProduct[0],testArray[2]);
  var prodArrMessage = 'The numbers ' + testArray + ' have a product of ' + tripProduct[0] + '.';
  return [tripProduct, prodArrMessage];
}
multiplyArray(2,3,4);
