function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return person.age >=18;
}

let person = {
  age : 17
}

console.log(isPersonOldEnoughToVote(person));