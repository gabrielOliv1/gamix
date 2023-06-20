const links = document.querySelectorAll('.nav-icons i');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    if (link.classList.contains('current-page') && !link.classList.contains('ph-users-three')) {
      event.preventDefault(); // Bloqueia o redirecionamento
    }
  });
})