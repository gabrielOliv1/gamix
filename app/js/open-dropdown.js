document.addEventListener("DOMContentLoaded", () => {
  let createDropdown = document.getElementById("open-create-dropdown");
  createDropdown.addEventListener("click", () => {
    let dropdown = document.getElementById("create-dropdown-container");
    let plusIcon = document.getElementById("plus-icon");
    
    if(dropdown.style.display === "none") {
      dropdown.style.display = "flex";
    } else {
      dropdown.style.display = "none";
    }
  });
});