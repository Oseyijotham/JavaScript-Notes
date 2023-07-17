/*function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  
    const result = {
  yesterday: 28,
  today: 26,
  tomorrow: 33
};
  
  let dat = Object.values(data);
  let res = Object.values(result);
  let ans = [];

  for (i = 0; i < dat.length; i++) {
    if (dat[i] === res[i]) {
      ans.push(dat[i])
    }
    
  }
  
  return ans;
  // Change code above this line
}
console.log(makeTask({
  yesterday: 28,
  today: 26,
  tomorrow: 33
}))*/

/*function makeTask(data) {
    let ans = {};
    const result = {
        yesterday: 28,
        today: 26,
        tomorrow: 33
    }
    
   
    for (const key in data && result) {
        if (data[key] === result[key]) {
            ans[key] = data[key];
        }
    }
    

    return ans;
}

console.log( makeTask({
        yesterday: 28,
        today: 26,
        tomorrow: 33
}))*/
    
// Change code below this line
function addOverNum(value, ...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > value){
    total += arg;}
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(5, 4, 8, 7));

