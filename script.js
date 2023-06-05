
var currentLevel = 1;
var currentStars = 0;

function checkCode() {
    var codeInput = document.getElementById("codeInput").value;
    // Code evaluation logic goes here
    var isCorrect = true; // Placeholder logic

    if (isCorrect) {
        document.getElementById("result").textContent = "Congratulations! Your code is correct.";
        incrementStars();
        if (currentStars >= 3) {
            incrementLevel();
            resetStars();
        }
    } else {
        document.getElementById("result").textContent = "Oops! Your code is incorrect.";
    }
}

function incrementLevel() {
    currentLevel++;
    document.getElementById("level").textContent = currentLevel;
}

function incrementStars() {
    currentStars++;
    document.getElementById("stars").textContent = currentStars;
}

function resetStars() {
    currentStars = 0;
    document.getElementById("stars").textContent = currentStars;
}
