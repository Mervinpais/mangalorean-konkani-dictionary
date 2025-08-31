
let words = [];

fetch("words.json")
  .then(res => res.json())
  .then(data => {
    words = data;
  });

function searchWord() {
  const query = document.getElementById("search").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const found = words.find(entry => entry.word.toLowerCase() === query);

  if (found) {
    resultDiv.innerHTML = `<p><b>${found.word}</b>: ${found.meaning}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Word not found 😢</p>`;
  }
}
