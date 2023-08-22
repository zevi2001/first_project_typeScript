//1
const topNumber = (num1: number, num2: number): number => {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};
//2
function printBigger(num1: number, num2: number): void {
  num1 > num2 ? console.log(num1) : console.log(num2);
}
//3
const typeNumber = (num: number): string => {
  let numType = "Odd";
  if (num % 2 == 0) {
    numType = "dual";
    return numType;
  }
  return numType;
};
//4
const lengthString = (str: string): number => {
  return str.length;
};
//5
const createArray = (num: number): number[] => {
  let array: number[] = [];
  for (let i: number = 0; i < num; i++) {
    array[i] = i;
  }
  return array;
};
//6
const highestInArray = (arr: number[]): number => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

//console.log(topNumber(2,4))
//printBigger(2,4)
//console.log(typeNumber(5))
//console.log(lengthString("ggg"))
//console.log(createArray(5))
//console.log(highestInArray([2, 3, 4, 8, 6, 9, 2]));
