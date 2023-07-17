const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
      let ind = this.potions.indexOf(potionName);
      this.potions.splice(ind, 1);

    // Change code above this line
  },
};
atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);