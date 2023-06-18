function removerTexto() {
    document.getElementById("rectangle_1").value = "";
}
function removerTexto2() {
    document.getElementById("inrectangle_2").value = "";
}
function feedback1() {
    feedback1.style.backgroundColor = "#333333";
    feedback1.style.color = "hsl(0, 100%, 25%)";
};
function feedback2 () {
    feedback1.style.backgroundColor = "#333333";
    feedback1.style.color = "hsl(0, 0, 0)";
}
const links = document.querySelectorAll('.nav-icons i');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    if (link.classList.contains('current-page')) {
      event.preventDefault(); // Bloqueia o redirecionamento
    }
  });
});
   

  
