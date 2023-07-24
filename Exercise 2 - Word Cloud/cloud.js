let par = document.getElementById('myParagraph');
let text = par.textContent;

let textArr = text.split(/\s+/);
console.log(textArr);

// / Use reduce to create an object with the counts of each word
const wordCounts = textArr.reduce((acc, word) => {
  // Convert the word to SmallCase
  const smallCaseWord = word.toLowerCase();
  // If the word is not already in the object, set its count to 0
  acc[smallCaseWord] = (acc[smallCaseWord] || 0) + 1;
  return acc;
}, {});

// Use Object.entries and map to convert the object into an array of objects
const result = Object.entries(wordCounts).map(([word, count]) => ({ word, count }));

// Sort the array in descending order based on the word count
result.sort((a, b) => b.count - a.count);

// Take the first 5 elements of the sorted array
const first12 = result.slice(0, 12);

const individualWords = first12.map(obj => obj.word);



// console.log(first12);
// console.log(individualWords);


// Append the first 12 words to the "My Clouds words div"

let myCloud = document.getElementById('myWordCloud');

individualWords.forEach(word => {
    let wordElement = document.createElement('div');
    wordElement.textContent = `${word} `;
    
    // Determine the fontsize before appending the word 
    myCloud.appendChild(wordElement);
});


