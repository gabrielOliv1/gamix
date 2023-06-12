const links = document.querySelectorAll('.nav-icons i');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    if (link.classList.contains('current-page')) {
      event.preventDefault(); // Bloqueia o redirecionamento
    }
  });
});

// esse script vai bloquear o reload caso o usuário clique no link para a página em q ele se encontra

// para esse script funcionar coloque na tag <i> dos icones a classe current-page após as classes do phosphor
//ex em teams.html
// <li class="nav-icons"><a href="/pages/teams/teams.html"><i class="ph-bold ph-users-three current-page"></i></a></li>