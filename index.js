const originalObject = { name: "Alice", age: 30 };
const clonedObject = JSON.parse(JSON.stringify(originalObject));
console.log(clonedObject); // { name: "Alice", age: 30 }
