const readline = require("readline");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const boxen = require("boxen");

export const readFile = async (fileName = "./files/input.txt") => {
  const lines: string[] = [];
  const instream = fs.createReadStream(path.resolve(process.cwd(), fileName));
  const rl = readline.createInterface({ input: instream });

  for await (const line of rl) {
    lines.push(line);
  }

  return lines;
};

export const readTestFile = async () => await readFile("./files/test.txt");

export function shout(message: string | number) {
  if (typeof message === "number") {
    message = message.toString();
  }
  console.log(boxen(chalk.blue(message), { padding: 1, margin: 1 }));
}

export function reverse<T>(arr: T[]): T[] {
  const start = arr.length - 1;
  const reversedArr: T[] = [];

  for (let idx = start; idx >= 0; idx--) {
    reversedArr.push(arr[idx]);
  }

  return reversedArr;
}

export function range(start: number, end: number) {
  const range: number[] = [];
  let _start = start,
    _end = end,
    reversed = false;

  if (_start > _end) {
    reversed = true;
    _start = end;
    _end = start;
  }

  for (let i = _start; i <= _end; i++) {
    range.push(i);
  }

  return reversed ? (reverse(range) as number[]) : range;
}

export function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  if (arr1.length !== arr2.length)
    throw new Error(
      `zip arrays must be of equal length: ${arr1.length}, ${arr2.length}`
    );

  return arr1.map((t, idx) => [t, arr2[idx]]);
}

export function min(arr: number[]) {
  return arr.reduce((acc, cur) => (cur < acc ? cur : acc));
}

export function max(arr: number[]) {
  return arr.reduce((acc, cur) => (cur > acc ? cur : acc));
}

// Helper function to check if a number has even digits
export function hasEvenDigits(num: bigint): boolean {
  return num.toString().length % 2 === 0;
}

// Helper function to split a number into left and right halves
export function splitNumber(num: bigint): [string, string] {
  const str = num.toString();
  const mid = Math.floor(str.length / 2);
  return [str.slice(0, mid), str.slice(mid)];
}