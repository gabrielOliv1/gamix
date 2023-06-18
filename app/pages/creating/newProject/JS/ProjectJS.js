function removerTexto() {
    document.getElementById("rectangle_1").value = "";
  }
function removerTexto2() {
    document.getElementById("text_rectangle_2").value = "";
}
links.forEach(link => {
  link.addEventListener('click', function(event) {
    if (link.classList.contains('current-page')) {
      event.preventDefault(); // Bloqueia o redirecionamento
    }
  });
});
