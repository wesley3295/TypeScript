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
var ADMIN = 0;
var READ_ONLY = 1;
var author = 2;
var person = {
    name: "Wesley",
    age: 26,
    hobbies: ['Video Games', 'Fishing'],
    role: ADMIN
};
//if your array is mixed types 'any[]'
var favoriteActivities;
favoriteActivities = ["Coding", "Games", "Home Improvement"];
//!!ERRORS!!
// favoriteActivities = ["Coding", "Games",1, "Home Improvement"] //ERROR cant have number
// favoriteActivities = "Home Improvement" //ERROR has to be an array
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // TS infers specific functions to call on specific types making TS more developer friendly
    // console.log(hobby.map()); //ERROR TS knows that 'hobby' is a string there for cant 'map'
}
if (person.role === ADMIN) {
    console.log('IS ADMIN');
}
