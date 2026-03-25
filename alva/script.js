function showQuestion(index) {
  const theQuestion = questions[index].question;
  document.getElementById("question").innerText = theQuestion;
}

function pressNo() {
  activeQuestionIndex = activeQuestionIndex + 1;

  if (activeQuestionIndex < questions.length) {
    showQuestion(activeQuestionIndex);
  } else {
    document.getElementById("question").innerText =
      "Sorry, we don't know what's wrong with your plant. Try asking a plant expert!";
    document.getElementById("cause").innerText = "";
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
  }
}

function pressYes() {
  const theCause = questions[activeQuestionIndex].cause;
  document.getElementById("cause").innerHTML = theCause;
  document.getElementById("yes-button").style.display = "none";
  document.getElementById("no-button").style.display = "none";
}

let activeQuestionIndex = 0;

window.onload = function () {
  showQuestion(activeQuestionIndex);
};
