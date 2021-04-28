console.log('Lets Learn TypeScript')
//Core Types
//number  --      1,5.3,-10 -- All number,no differentiation betrween integers or floats
//string  -- `Hi`,"Hi",'Hi' -- All text val
//boolean --     true,false -- Just these two,no "truthy" or "falsy" values 

const add=(n1:number,n2:number)=>{
return n1 + n2
}
 const number1 = 5;
 const StringNumber1 = "5"; //we added types to the functions arguments.
 const number2 = 10;

 const resultIfArgumentsWereNumbers = add(number1,number2)
 const resultIfArgumentsWereStrings = add(+StringNumber1,+number2)
 console.log("Result If Arguments Were Numbers:",resultIfArgumentsWereNumbers)
 console.log("Result If Arguments Were Strings:",resultIfArgumentsWereStrings)