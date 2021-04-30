    //const person = {
    //    name:string;
    //    age:number;
    //} = {
    // TS infers the object attribute types.///////////////////////////////////////////////
    //     const person : {
    //         name:string;
    //         age:number;
    //         hobbies:string[]; // core types (number[],boolean[],string[])
    //         role:[number,string]; // we create the TS object types because with a Tuple we want be specific to what and how many types go into our array in role
    //     }={
    //     name:"Wesley",
    //     age:26,
    //     hobbies: ['Video Games', 'Fishing'],
    //     role:[2,'father'] // fixed length array Tuple
    // }
    
    // person.role.push('admin') //TS will not catch push functions. Be aware that this will not throw an error even though it should
    // person.role[1] = 10 // TS will throw error because index:1 is a string and cannot be a number, we declared that in our TS Object
    ///////////////////////////////////////////////////////////////////////////////////////////////////



        // const ADMIN = 0;
        // const READ_ONLY  = 1; 
        // const AUTHOR = 2;

        enum Role{ADMIN= 5 , READ_ONLY , AUTHOR} // TS + 1 to the number value of the next enum member automatically IF needed
        // enum Role{ADMIN= 5 , READ_ONLY=100 , AUTHOR=56} // correct syntax and possibility
        // enum Role{ADMIN='ADMIN' , READ_ONLY= 5 , AUTHOR} // correct syntax and possibility
    
        const person ={
        name:"Wesley",
        age:26,
        hobbies: ['Video Games', 'Fishing'],
        role: Role.ADMIN
    }
    
    
    
    
    //if your array is mixed types 'any[]'
    let favoriteActivities:string[];
    favoriteActivities = ["Coding", "Games", "Home Improvement"]
    //!!ERRORS!!
    // favoriteActivities = ["Coding", "Games",1, "Home Improvement"] //ERROR cant have number
    // favoriteActivities = "Home Improvement" //ERROR has to be an array
    
    console.log(person.name)
    for(const hobby of person.hobbies){
        console.log(hobby.toUpperCase()); // TS infers specific functions to call on specific types making TS more developer friendly
        // console.log(hobby.map()); //ERROR TS knows that 'hobby' is a string there for cant 'map'
    }

    if(person.role === Role.ADMIN){
        console.log('IS ADMIN')
    }