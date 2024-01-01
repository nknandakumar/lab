var part1 = [" 1 ","2","3","4","5,","6"];
var part2 = ["1","2","3","4","5","6","7","8"];

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
