function max(numbers) {

  let answer = numbers[0];
  let length = numbers.length;
  for (let i = 1; i < length; i++) {
    if (numbers[i] > answer) {
      answer = numbers[i]
    }
  }
  return answer;
}

max([1, 2, 4, 5]); // result to 5 
max([5, 2, 7, 1, 6]); // result to 7