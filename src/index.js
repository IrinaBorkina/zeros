module.exports = function zeros(expression) {

  let numberOfTwos = 0;
  let numberOfFives = 0; 

  let getValue = item => parseInt(item, 10);

  let dividerCounter = number => {
    for ( ; ; ) {
      if (number % 5 == 0) {
        numberOfFives++;
        number /= 5;
      } else if (number % 2 == 0) {
        numberOfTwos++;
        number /= 2;;
      } else break;
    }
  }

  let getCounter = expression.split('*').forEach(item => {
    if (item.slice(-2) === "!!") {
      for (let i = getValue(item); i > 3; i -= 2) {
        dividerCounter(i);
      }
    } else {
      for (let i = getValue(item); i > 1; i--) {
        dividerCounter(i);
      }
    }
  });

  return Math.min(numberOfTwos, numberOfFives);
}
