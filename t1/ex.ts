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
//7
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}
//8
const printPerson = (p: Person) => {
  console.log(p.name + " " + p.age + " " + p.isStudent);
};
//9
const isMinor = (p: Person): boolean => {
  if (p.age < 18) {
    return false;
  }
  return true;
};
//10
interface Book {
  Title: string;
  Author: string;
  Year: number;
}
//11
type Reader = Person & {
  favoriteBook: Book;
};
///12
const printOldestReader = (read: Reader[]) => {
  let up = read[0].age;
  let index = 0;
  for (let i: number = 0; i < read.length; i++) {
    if (read[i].age > up) {
      up = read[i].age;
      index = i;
    }
  }
  return read[index];
};
//13
const printOldestBook = (read: Reader[]) => {
  let up = read[0].favoriteBook.Year;
  let index = 0;
  for (let i: number = 0; i < read.length; i++) {
    if (read[i].favoriteBook.Year > up) {
      up = read[i].favoriteBook.Year;
      index = i;
    }
  }
  return read[index].favoriteBook;
};
//2.1
const sumEvenInArray = (arr: number[]): number => {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};
//2.2
const rectangleCreator = (hight: number, width: number): number => {
  return hight * width;
};
//2.3
const isPalindrome = (str: string): boolean => {
  const newStr = str.split(" ").join("");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] != newStr[newStr.length - i-1]) {
    return false
    }
  }
  return true;
};




//console.log(topNumber(2,4))
//printBigger(2,4)
//console.log(typeNumber(5))
//console.log(lengthString("ggg"))
//console.log(createArray(5))
//console.log(highestInArray([2, 3, 4, 8, 6, 9, 2]));
// const myUser: Person = {
//   name: "dd",
//   age: 23,
//   isStudent: true,
// };
// const myBook: Book = {
//   Title: "aaa",
//   Author: "bbb",
//   Year: 1998,
// };
// printPerson(myUser)
//console.log(isMinor(myUser))
//console.log(sumEvenInArray([2,4,6,5,7]))
// console.log(rectangleCreator(5,3))
console.log(isPalindrome("abccba"))
