// Return the Sum of Two Numbers

function addition(a, b) {
  return a + b;
}

console.log(addition(3, 2));

// Convert Minutes into Seconds

function convert(minutes) {
  return minutes * 60;
}

console.log(convert(5));

// Return the Next Number from the Integer Passed

function addition(num) {
  return ++num;
}

console.log(addition(0));

// Area of a Triangle

function triArea(base, height) {
  return base * height / 2;
}

console.log(triArea(7, 4));

// Convert Age to Days

function calcAge(age) {
  return age * 365;
}

console.log(calcAge(65));

// Return the Remainder from Two Numbers

function remainder(x, y) {
  return x % y;
}

console.log(remainder(1, 3));

// Football Points

function footballPoints(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

console.log(footballPoints(3, 4, 2));

// Basketball Points

function points(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

console.log(points(1, 1));

// Less Than 100?

function lessThan100(a, b) {

  if (a + b < 100) {
    return true;
  } else {
    return false;
  }

}

console.log(lessThan100(22, 15));

// The Farm Problem

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

console.log(animals(2, 3, 5));