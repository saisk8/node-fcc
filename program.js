// Print command line arguments
var args = process.argv.slice(2);
// console.log(args);

var sum = 0;
for (item of args) {
  sum += +item;
}
console.log(sum);
