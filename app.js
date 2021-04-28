//const person = {
//    name:string;
//    age:number;
//} = {
// TS infers the object attribute types.
var person = {
    name: "Wesley",
    age: 26,
    hobbies: ['Video Games', 'Fishing']
};
//if your array is mixed 'any[]'
var favoriteActivities;
favoriteActivities = ["Coding", "Games", "Home Improvement"];
//!!ERRORS!!
favoriteActivities = ["Coding", "Games", 1, "Home Improvement"]; //ERROR cant have number
favoriteActivities = "Home Improvement"; //ERROR has to be an array
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // TS infers specific functions to call on specific types making TS more developer friendly
    // console.log(hobby.map()); // TS knows that 'hobby' is a string there for cant 'map'
}
