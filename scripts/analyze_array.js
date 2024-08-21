function analyzeArray(array){
  let arrayObj = {};

  arrayObj.min = Math.min(...array);
  arrayObj.max = Math.max(...array);
  arrayObj.average = array.reduce((acc, currentValue) => (acc + currentValue)) / array.length;
  arrayObj.length = array.length;

  return arrayObj;
}

module.exports = analyzeArray;