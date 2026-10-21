// picks a random anwser for the ask verity button

function askVerity() {
  var answers = [
    "Curiosity says: try it!",
    "Lovity says: you are nice.",
    "Falsity says: that is true. (It is not.)",
    "Verity says: tell the truth.",
    "Cruelity says: no.",
    "Curiosity says: why?",
    "Lovity says: hi.",
    "Verity says: drink water."
  ];

  var pick = Math.floor(Math.random() * answers.length);
  document.getElementById("answer").innerHTML = answers[pick];
}
