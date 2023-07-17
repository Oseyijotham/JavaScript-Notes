const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
      let ind = this.potions.indexOf(oldName); 
      this.potions.splice(ind, 1, newName);


    // Change code above this line
  },
};

atTheOldToad.updatePotionName("Stone skin", "New");
console.log(atTheOldToad.potions);