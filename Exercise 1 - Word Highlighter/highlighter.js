let par = document.getElementById('myParagraph');
let text = par.textContent;
console.log(text);
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
const first5 = result.slice(0, 5);

// Check if word in textArr is part of first5

let newPar = "";
for (let word of textArr){
    if (first5.includes(word)){
        if (/^[A-Z]/.test(word)) {
            newPar += `<span style="background-color:yellow;text-decoration:underline;">${word}</span> `;
        } 
        else {
            newPar += `<span style="background-color:yellow">${word}</span> `;
        }
    }
    else{
        newPar += `${word} `;
    }
}
console.log(newPar);

// Update the existing paragraph
text = newPar;
