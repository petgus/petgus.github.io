// Våran array (byrå med olika lådor) som innehåller frågor och orsak till sjuk planta.

const questions = [
  {
    question: "Do you have spotty leaf?",
    cause: "You have overwatered the plant",
  },
  {
    question: "Do you have brown leaf?",
    cause: "You have underwatered the plant",
  },
];

// En funkton för att visa en fråga från en låda (vår array)
function showQuestion(index) {
  return questions[index].question;
}

// Anropa funktionen som kan visa en fråga
showQuestion(0);

// Visa frågan som ligger i första lådan i vår array
//questions[0].question

// Visa orsaken om man svart "YES"
//questions[0].cause
