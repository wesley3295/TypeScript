    //const person = {
    //    name:string;
    //    age:number;
    //} = {
        // TS infers the object attribute types.
        const person : {
            name:string;
            age:number;
            hobbies:string[];
            role:[number,string]; // we create the TS object types because with a Tuple we want be specific to what and how many types go into our array in role
        }={
        name:"Wesley",
        age:26,
        hobbies: ['Video Games', 'Fishing'],
        role:[2,'father'] // fixed length array Tuple
    }
    
    // person.role.push('admin') //TS will not catch push functions. Be aware that this will not throw an error even though it should
    // person.role[1] = 10 // TS will throw error because index:1 is a string and cannot be a number, we declared that in our TS Object
    
    
    //if your array is mixed 'any[]'
    let favoriteActivities:string[];
    
    favoriteActivities = ["Coding", "Games", "Home Improvement"]
    
    //!!ERRORS!!
    // favoriteActivities = ["Coding", "Games",1, "Home Improvement"] //ERROR cant have number
    // favoriteActivities = "Home Improvement" //ERROR has to be an array
    
    console.log(person.name)
    for(const hobby of person.hobbies){
        console.log(hobby.toUpperCase()); // TS infers specific functions to call on specific types making TS more developer friendly
        // console.log(hobby.map()); // TS knows that 'hobby' is a string there for cant 'map'
    }