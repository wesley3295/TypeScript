//Union Types
//                    type or type  type or type
const combine=(input1:number|string,input2:number|string)=>{
    //must include conditional statement or TS will throw error. This is not always nessesary, depends on logic.
    if(typeof input1 === 'number' && typeof input2 === 'number') {  
    return input1 + input2
}else{
        return input1.toString() + input2.toString()
    }
}

const combinedAges = combine(30,26);
console.log(combinedAges)

const combinedNames= combine('Jax', 'Stickem')
console.log(combinedNames)