let obj1 = {"greeting": "hello"};
let obj2 = obj1;
obj1 ["greeting"] = "Bye";
console.log (obj1);  // Output will be: { greeting: "Bye" }
console.log (obj2);  // Output will be: { greeting: "Bye" }
