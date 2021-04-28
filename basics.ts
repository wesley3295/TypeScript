console.log('Lets Learn TypeScript')
//Core Types
//number  --      1,5.3,-10 -- All number,no differentiation betrween integers or floats
//string  -- `Hi`,"Hi",'Hi' -- All text val
//boolean --     true,false -- Just these two,no "truthy" or "falsy" values 
//object  --       {age:30} -- Any JavaScript object, more specific types (type of object) are possible
//Array   --[1,true,"Hello"]-- Any JavaScript Array, type can be flexible or strict(regarding the element types)
//Tuple   --          [1,2] -- Added by TypeScript: Fixed-length array
//Enum    -- enum {NEW,OLD}


const add=(n1:number,n2:number,printResult:boolean,resultPhrase:string)=>{
    if(printResult){
        console.log(resultPhrase+(n1 + n2))
    }else{
        return n1 + n2
    }

}
 const StringNumber1 = "5"; //we added types to the functions arguments.
 const number2 = 10;
const printResult = true;
const resultPhrase = "Result is:"

 const resultIfArgumentsWereNumbers = add(+StringNumber1,number2, printResult, resultPhrase);
 const resultIfArgumentsWereStrings = add(StringNumber1, number2, printResult,resultPhrase);
 
 console.log("Result If Arguments Were Numbers:",resultIfArgumentsWereNumbers)
 console.log("Result If Arguments Were Strings:",resultIfArgumentsWereStrings)