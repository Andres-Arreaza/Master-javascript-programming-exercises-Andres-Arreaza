function addProperty(obj, key) {
  // your code here
  obj[key]=true;
  return obj
}


let carros = {
  modelo: 'jeep'
}

let modeloCarro = addProperty(carros, 'modelo');
console.log(modeloCarro);