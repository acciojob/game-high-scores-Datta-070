// Save score to Local Storage
let nameInput=document.getElementById("name");
let scoreInput=document.getElementById("score");
function saveScore() {
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value.trim());

  // Check if name or score is empty
  if (!name || isNaN(score)) {
    alert("Please enter a valid name and score.");
    return;
  }

  // Retrieve existing scores from Local Storage or initialize an empty array
  let existingScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score to the array
  existingScores.push({ name: name, score: score });

  // Sort scores by score value in descending order
  existingScores.sort((a, b) => b.score - a.score);

  // Store the updated scores array in Local Storage
  localStorage.setItem("highScores", JSON.stringify(existingScores));

  // Show updated scores
  showScores();
}

// Show scores in div
function showScores() {
  // Clear previous content
  scores.innerHTML = "";

  // Retrieve scores from Local Storage
  const storedScores = JSON.parse(localStorage.getItem("highScores"));

  // If there are no scores, display a message
  if (!storedScores || storedScores.length === 0) {
    scores.textContent = "No scores yet";
    return;
  }

  // Create a table to display scores
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  // Create table headers
  const nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  const scoreHeader = document.createElement("th");
  scoreHeader.textContent = "Score";

  // Append headers to the header row
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(scoreHeader);

  // Append the header row to the table
  table.appendChild(headerRow);

  // Iterate through stored scores and create table rows
  storedScores.forEach(score => {
    const row = document.createElement("tr");

    // Create table data cells for name and score
    const nameCell = document.createElement("td");
    nameCell.textContent = score.name;
    const scoreCell = document.createElement("td");
    scoreCell.textContent = score.score;

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(scoreCell);

    // Append the row to the table
    table.appendChild(row);
  });

  // Append the table to the scores div
  scores.appendChild(table);
}

// Call showScores() when the page loads to display scores from Local Storage
window.onload = showScores;
