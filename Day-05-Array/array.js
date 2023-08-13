// Declare an empty array;
const emptyArr = Array();

// Declare an array with more than 5 number of elements
const arr = ['Ram', 20, true, 'kumar', 33];

// Find the length of your array
arr.length;

// Get the first item, the middle item and the last item of the array
const firstItem = arr[0];
const lastItem = arr[arr.length -1];
const middleItem = arr[2];

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Rajneesh', 2, true, ['frontend', 3, 'backend'], 'Engineer', 32];
const lengthOfArr = mixedDataTypes.length;

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
const numOfCompanies = itCompanies.length;

// Print the first company, middle and last company
const firstCompany = itCompanies[0];
console.log(firstCompany);

const middleCompany = itCompanies[3];
console.log(middleCompany);

const lastCompany = itCompanies[itCompanies.length -1];
console.log(lastCompany);

// Change each company name to uppercase one by one and print them out
const firstItCompany = itCompanies[0].toUpperCase();
console.log(firstItCompany);

const secondCompany = itCompanies[1].toUpperCase();
console.log(secondCompany);

const thirdCompany = itCompanies[2].toUpperCase();
console.log(thirdCompany);

const fourthCompany = itCompanies[3].toUpperCase();
console.log(fourthCompany);

const fifthCompany = itCompanies[4].toUpperCase();
console.log(fifthCompany);

const sixthCompany = itCompanies[5].toUpperCase();
console.log(sixthCompany);

const seventhCompany = itCompanies[6].toUpperCase();
console.log(seventhCompany);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const itCompaniesSentence = `${itCompanies.join(', ')} are big companies.`;
console.log(itCompaniesSentence);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found