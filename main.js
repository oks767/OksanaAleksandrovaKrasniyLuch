let initialObj = {
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{}, {}],
    },
    object3: {},
  },
};
let obj = {};

function deepClone(initialObj) {
  for (var key in initialObj.object[key]) {
    obj.object[key] = initialObj.object[key];
  }
  return initialObj;
}
obj = initialObj;

let clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
console.log(initialObj);
console.log(clonedObj);
