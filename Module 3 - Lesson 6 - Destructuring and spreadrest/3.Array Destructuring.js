//Array Destructuring
const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

/*If there are more variables than array elements, they will be assigned undefined,
so you can specify default values.*/
const rgb = [200, 100, 255];

const [red, green, blue, alfa = 0.3] = rgb;

console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"