const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {/*
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
*/
      for (const potion of this.potions) {
          if (potion.name === newPotion.name) {
         return `Error! Potion ${newPotion.name} is already in your inventory!`;   
          }
          
          
    } 
          this.potions.push(newPotion);
      
    },
  removePotion(potionName) {/*
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
*/
    for (const potion of this.potions) {
          if (potion.name === potionName) {
              let ind = this.potions.indexOf(potion); 
              this.potions.splice(ind, 1);     
          }
          } 
    
    },
  updatePotionName(oldName, newName) {/*
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
*/
   for (const potion of this.potions) {
          if (potion.name === oldName) {
              potion.name = newName;     
          }
          }  
    
    
    },
  // Change code above this line
};

//console.log(atTheOldToad.addPotion("Dragon breath"));

console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//console.log(atTheOldToad.getPotions());