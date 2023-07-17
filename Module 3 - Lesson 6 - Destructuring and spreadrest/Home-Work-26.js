//QUESTION
// Change code below this line
function calculateMeanTemperature(forecast) {
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;
  
  const{
    todayLow, todayHigh, tomorrowLow, tomorrowHigh
  }=forecast

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

//ANSWER
// Change code below this line
function calculateMeanTemperature(forecast) {
  const{
    today: { low: todayLow, high: todayHigh},
    tomorrow: { low: tomorrowLow, high: tomorrowHigh} 
  }=forecast

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));