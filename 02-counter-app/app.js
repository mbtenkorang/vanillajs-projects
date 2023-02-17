//Set initlal count
let count = 0;

// Select value annd buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      //   console.log("decrease");
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      //   console.log("reset", count);
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#333";
    }
    value.textContent = count;
  });
});
