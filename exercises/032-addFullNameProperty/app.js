function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj
}
console.log(addFullNameProperty({ firstName: "Elias", lastName: "Toroa" }))

/*
function addFullNameProperty (obj) {
  if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('lastName')) { return 'Propiedad no encontrada';
  } 
  
  // Crear una copia del objeto para evitar la mutación directa 
  const newObj = { ...obj };

  // Usar plantillas de cadenas para concatenar las propiedades 
  newObj.fullName = `${newObj.name} ${newObj.lastName}`; 
  return newObj;

}


let person = {
  name : 'Andres',
  lastName : 'Arreaza',
}

console.log(addFullNameProperty(person, ))
*/