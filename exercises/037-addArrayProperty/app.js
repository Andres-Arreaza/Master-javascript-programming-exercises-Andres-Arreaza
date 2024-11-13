function addArrayProperty (obj, key, array) {
  obj[key] = array;
  return obj;
}

let newObjeto = {};
let key = 'letras';
let array = ['a', 'b', 'c'];

console.log(addArrayProperty(newObjeto, key, array))