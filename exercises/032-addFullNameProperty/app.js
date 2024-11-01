function addFullNameProperty(obj ) {
  // Add your code after this line
  obj.fullName = obj.firstName +' '+ obj.lastName;
  return obj;
}

const person = {
  firstName: 'Andres',
  lastName: 'Arreaza'
}

console.log(addFullNameProperty(person))


