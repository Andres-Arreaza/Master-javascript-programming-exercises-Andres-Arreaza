function removeProperty(obj, key) {
  // your code here
  delete obj[key]
  return obj;
}
const carros = {
  modelo: 'jeep',
  motor: 'v8',
  año :2007
}

console.log(removeProperty(carros, 'modelo'))