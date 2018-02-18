const fizzBuzz = (num) => {
  if (num === 0) return 0;
  const isDividedByThree = num % 3 === 0;
  const isDividedByFive = num % 5 === 0;
  if (isDividedByThree && isDividedByFive) return 'FizzBuzz';
  if (isDividedByFive) return 'Buzz';
  if (isDividedByThree) return 'Fizz';
  return num;
};


export default fizzBuzz;
