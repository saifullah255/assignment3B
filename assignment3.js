//................task#01..................

var myData=['2','1','5','4','6','5'];

var uniqueAndSorted = [...new Set(myData)].sort();
console.log(uniqueAndSorted);


//................task#02..................


function generatePyramid(num) {
    let number = '';
  
    for (let i = 1; i <= num; i++) {
      console.log(number += i);
    }
  }
  generatePyramid(5);

//................task#03..................

var number = 12345,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
console.log(sum);

//................task#04..................

var numbers = [3, -7, 10, 8, 30 , 2]; 
function findMax(array) {
    return Math.max.apply(null, array);
}
console.log(findMax(numbers)); 
