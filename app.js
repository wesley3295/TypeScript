console.log('Lets Learn TypeScript');
//Core Types
//number  --      1,5.3,-10 -- All number,no differentiation betrween integers or floats
//string  -- `Hi`,"Hi",'Hi' -- All text val
//boolean --     true,false -- Just these two,no "truthy" or "falsy" values 
var add = function (n1, n2) {
    return n1 + n2;
};
var number1 = 5;
var StringNumber1 = "5"; //we added types to the functions arguments.
var number2 = 10;
var resultIfArgumentsWereNumbers = add(number1, number2);
var resultIfArgumentsWereStrings = add(+StringNumber1, +number2);
var resultIfArgumentsWereBoth = add(StringNumber1, +number2);
console.log("Result If Arguments Were Numbers:", resultIfArgumentsWereNumbers);
console.log("Result If Arguments Were Strings:", resultIfArgumentsWereStrings);
console.log("Result If Arguments Were Both:", resultIfArgumentsWereBoth);
