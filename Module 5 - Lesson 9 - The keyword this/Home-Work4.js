const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  console.log(key); // barks, eats
}