console.log('hello');
//alert('Hello This is sita');
// How to write a comment inline

// variables
//var b = 'smoothie';
//console.log(b);

//var someNumber = 45;
//console.log(someNumber);
//document.getElementById('someText').innerHTML =age;

// var age = prompt('what is your age?');
//  var date = prompt('what is the date?');


 // number  in javascript
 var num1 = 10;

 // Increment num1 by 1
  num1++;
  // Decrement num1 by 1
  num1--;

 console.log(num1);
 
 //  Divide, multiply *,remainder
 
 console.log(num1 % 6);
 // Increment/decrement by any number  you want(10)
 num1 +=10;
 console.log(num1);

 /*function
 1. create a function
 2. call the function
 */
 function fun()    {
    console.log('this is the function');
 }
 // call
 fun();
 /* lets create a function that
  takes in a and says hello  followed by your name
  For example 
  Name: "Sita"
  Return:"Hello Sita"  */
  function  greeting(){
    prompt('What is your Name?');
    var result ='Hello' + 'name';
    console.log(result);
  }
  greeting();