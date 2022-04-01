

// preguntas
let question = [true, false, false, false, false, false, false, false];
questionShowHide = (n) => {
  if (question[n - 1] == true) {
    question[n - 1] = false;
  }
  else {
    $(`.a${n}`).show(400);
    question = [false, false, false, false, false, false, false, false];
    question[n - 1] = true;
    $(`.q${n} i`).attr("class", "fas fa-minus-circle");
  }
  for (let i = 0; i < question.length; i++) {
    if (question[i] == false) {
      $(`.a${i + 1}`).hide(400);
      $(`.q${i + 1} i`).attr("class", "fas fa-plus-circle");
    }
  }
}

