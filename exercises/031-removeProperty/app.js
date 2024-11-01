function removeProperty(obj, key) {
  // your code here
  delete obj[key]
  return obj;
}
const carros = {
  modelo: 'jeep',
  motor: 'jjjj'
}

console.log(removeProperty(carros, 'modelo'))