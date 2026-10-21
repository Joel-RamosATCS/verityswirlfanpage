// picks a random anwser for the ask verity button

function askVerity() {
  var answers = [
    "Curiosity says: try it and see!",
    "Lovity says: you are doing great.",
    "Falsity says: that is definitely true. (It is not.)",
    "Verity says: be honest, even when it is awkward.",
    "Cruelity says: no comment.",
    "Curiosity says: but why?",
    "Lovity says: send this page to a friend.",
    "Verity says: drink some water.",
    "Falsity says: I never said that.",
    "Curiosity says: look it up, then tell me what you found."
  ];

  var pick = Math.floor(Math.random() * answers.length);
  document.getElementById("answer").innerHTML = answers[pick];
}
