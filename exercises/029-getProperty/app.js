function getProperty (obj, key){
  return obj[key];
}

let carro = {
  modelo : 'jeep'
}

let modeloDelCarro = getProperty(carro, 'modelo');
console.log(modeloDelCarro);