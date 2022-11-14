import _ from "lodash";

const numbers = [1, 5, 10, 12, -6, 3, 6, 5, 9, -5, 1, 5];

const elements = [1, 2, [3, 4], 5, {a: 7}];

const numbersSquared = (numbers) => numbers.map(number => Math.pow(number, 2));

const uniqNumbers = (numbers) => _.uniq(numbers);

const isAboveZero = (numbers) => numbers.every(number => number > 0);

const lessThanZero = (numbers) => numbers.filter(number => number < 0);

const numbersSum = (numbers) => numbers.reduce((acc, number) => acc + number);

const isArray = (elements) => elements.filter(element => Array.isArray(element));

// Strings 

const string = 'bcef12345678ghi654321klm';

const wordWithLengthFour = (string) => {
    const splitStr = string.split(' ')
    const lengthWord = splitStr.filter(word => word.length > 4)
    return lengthWord.length
}

const lengthEqualSix = (string) => {
    const [substr, ] = string.match(/(?<![0-9])([0-9]{6})(?![0-9])/);
    return substr
}

console.log(lengthEqualSix(string))