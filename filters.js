// ext.js

// 1️⃣ Constants for filter types
const FILTERS = {
  ALL: "all",
  MINI: "mini-app",
  UI: "ui-component"
};

// 2️⃣ Select all filter buttons and project boxes
const buttons = document.querySelectorAll(".filters button");
const workBoxes = document.querySelectorAll(".workBx");

// 3️⃣ Add click event to each filter button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter; // get the filter type

    // 3a️⃣ Update active button styling
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // 3b️⃣ Show/hide projects based on filter
    workBoxes.forEach(box => {
      const type = box.dataset.type;

      if (filter === FILTERS.ALL || type === filter) {
        box.style.display = "block"; // show matching project
      } else {
        box.style.display = "none"; // hide non-matching project
      }
    });
  });
});