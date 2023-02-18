// select elements and add event listeners

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  /**
   * ALTERNATIVE SOLUTION
   * using an if statement
   *
   ** if (sidebar.classList.contains("show-sidebar")) {
   *  sidebar.classList.remove("show-sidebar");
   *} else {
   *  sidebar.classList.add("show-sidebar");
   *}
   */

  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  [sidebar.classList.remove("show-sidebar")];
});
