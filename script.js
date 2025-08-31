
let words = [];

fetch("words.json")
  .then(res => res.json())
  .then(data => {
    words = data;
  });

function searchWordKon() {
  const query = document.getElementById("searchKon").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const found = words.find(entry => entry.word.toLowerCase() === query);

  if (found) {
    resultDiv.innerHTML = `<p><b>${found.word}</b>: ${found.meaning}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Word not found 😢</p>`;
  }
}

function searchWordEng() {
  const query = document.getElementById("searchEng").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  // Search either word OR meaning
  const found = words.find(entry => 
      entry.word.toLowerCase() === query || entry.meaning.toLowerCase() === query
  );

  if (found) {
    resultDiv.innerHTML = `<p><b>${found.word}</b>: ${found.meaning}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Word not found 😢</p>`;
  }
}

