//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
      question.classList.toggle("show-text");
    });
  });
});

// traversing the dom
/**
 * Select buttons
 *
 * const buttons = document.querySelectorAll(".question-btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const articleQuestion = e.currentTarget.parentElement.parentElement;
    console.log(articleQuestion);
    articleQuestion.classList.toggle("show-text");
  });
});
 * 
 */
