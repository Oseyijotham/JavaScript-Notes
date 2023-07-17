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
}))

function makeTask(data) {
    let ans = {};
    const result = {
        yesterday: 28,
        today: 26,
        tomorrow: 33
    }
    
  if (data.yesterday === result.yesterday){
    ans.yesterday = 28;
  }
  if (data.today === result.today) {
    ans.today = 26;
  }  
    

    return ans;
}

console.log( makeTask({
        yesterday: 28,
        today: 26,
        tomorrow: 33
    }))*/

/*const data = {
  text:
  category:
  priority:
}*/

function makeTask(data) {
  const defaul = {
    completed: false,
    category: "General",
    priority: "Normal"
  }
      
  // Change code below this line
  //const { completed, category, priority } = defaul ;
      
  const newObj = { ...defaul, ...data };
  return newObj;
}
  // Change code above this line


console.log(makeTask({ category: "Finance", text: "Take interest" }));


