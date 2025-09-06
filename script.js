
let words = [];

function displayNewestWords(limit = 10) {
  const tableBody = document.getElementById("wordsTable").querySelector("tbody");
  tableBody.innerHTML = ""; // clear previous rows

  // Take the last `limit` words
  const newestWords = words.slice(-limit).reverse(); // newest first

  newestWords.forEach(entry => {
    const row = document.createElement("tr");
    const wordCell = document.createElement("td");
    wordCell.textContent = entry.word;
    const meaningCell = document.createElement("td");
    meaningCell.textContent = entry.meaning;

    row.appendChild(wordCell);
    row.appendChild(meaningCell);
    tableBody.appendChild(row);
  });
}

// Call it after fetching JSON
fetch("words.json")
  .then(res => res.json())
  .then(data => {
    words = data;
    displayNewestWords(); // show newest words immediately
  });

function searchWord(lang) {
  let query = document.getElementById("searchEng").value.toLowerCase();

  if (lang == 'Kon') {
    query = document.getElementById("searchKon").value.toLowerCase();
    const found = words.find(entry => entry.word.toLowerCase() === query);
    updateResult(found);
  }
  else if (lang == 'Eng') {
    query = document.getElementById("searchEng").value.toLowerCase();
    const found = words.find(entry => 
      entry.word.toLowerCase() === query || entry.meaning.toLowerCase() === query
    );
    updateResult(found);
  }
}

function updateResult(found) {
  const resultDiv = document.getElementById("result");
  if (found) {
    resultDiv.innerHTML = `<p><b>${found.word}</b>: ${found.meaning}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Word not found 😢</p>`;
  }
}
