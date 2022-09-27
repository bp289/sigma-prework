let input = parseInt(prompt("please enter array size"));

if (isNaN(input) === true) {
  throw new Error("Please enter a number for array size");
}

console.log(minMax(makeArray(input)));

function makeArray(size) {
  let input;
  const array = [];
  for (let i = 0; i < size; i++) {
    input = prompt("please enter number");
    if (isNaN(input) === true) {
      throw new Error("Please enter a number");
    } else {
      array.push(input);
    }
  }
  return array;
}

function minMax(array) {
  let largest = array[0];
  let smallest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
      largest = array[i];
    }

    if (smallest > array[i]) {
      smallest = array[i];
    }
  }

  return [smallest, largest];
}
