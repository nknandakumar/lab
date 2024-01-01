var part1 = [" 1 . C Program to Find Volume and Surface Area of Sphere", " 2 . Write a C Program to read three numbers and find the biggest of three", "3 .  C program to demonstrate library function in math.h (atleast 6)", "4 . C Program to read a number, find sum of digits, reverse the number and check it for palindrome or not", " 5 .  Program to read numbers from keyboard continuously till the user presses 999 and to find the sum of only positive numbers .", "6. Write a C program to read percentage of marks and to display appropriate grade. (using switch case)", " 7 .Write a C program to find roots of quadratic equation (using if else ladder)", "8 . C program to read marks scored in 3 subjects by n students & find the average of marks and the result", "9. Write a C Program to remove Duplicate Element in a single dimensional Array", "10 . Write a C Program to perform addition and subtraction of two matrices."];
var part2 = ["1 .Write a C program to find the length of a string without using builtin function", "2. Write a C program to demonstrate string functions", "3 . C programme to demonstarate pointer", "4 . C programme to read a number  and check it prime number or not ."];

const getQuestionsButton = document.getElementById('getQuestionsButton');
const questionOutput = document.getElementById('questionOutput');
const nameInput = document.getElementById('nameInput');

getQuestionsButton.addEventListener('click', () => {
  const name = nameInput.value.trim(); // Get the entered name

  p1 = Math.floor(Math.random() * part1.length);
  p2 = Math.floor(Math.random() * part2.length);

  const questionText = `Hi ${name}, here are your questions:\nPart A Question is  :\n${part1[p1]}\n AND  Part B :\n Question is ${part2[p2]}`;
  questionOutput.textContent = questionText;

  // Add styling as needed, for example:
  questionOutput.style.fontWeight = 'bold';
  questionOutput.style.color = 'green';
  questionOutput.style.fontSize = '20px';
  questionOutput.style.backgroundColor = "grey"
  nameInput.value = ''; // Clear the name input field

});
