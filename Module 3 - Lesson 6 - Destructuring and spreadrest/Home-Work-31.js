/*function makeTask(data) {
    let ans = [];
    const result = {
        yesterday: 28,
        today: 26,
        tomorrow: 33
    }
    
        if(data.yesterday === result.yesterday){
            ans.push(result.yesterday);
            
    
}
    return ans;
}

console.log( makeTask({
        yesterday: 28,
        today: 26,
        tomorrow: 33
    }))*/

    // Change code below this line
function add(...args) {
    let total = 0;
    for (const key of args) {
        total = key + total;   
    }
    return total;
  // Change code above this line
}
console.log(add(12, 4, 11, 48));
