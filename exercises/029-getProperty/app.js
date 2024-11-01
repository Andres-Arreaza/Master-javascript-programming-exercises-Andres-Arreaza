function getProperty(obj, key) {
  // your code here
  return obj[key];
}

let carros = {
  modelo:'jeep'
};

let modeloCarro = getProperty(carros, 'modelo');
console.log(modeloCarro);