var currentContent = 'posts'; 

function showContent(contentId) {
  var content = document.getElementById(contentId);
  var current = document.getElementById(currentContent);

  current.style.display = 'none';

  content.style.display = 'block';

  currentContent = contentId;
}
const links = document.querySelectorAll('.nav-icons i');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    if (link.classList.contains('current-page')) {
      event.preventDefault(); // Bloqueia o redirecionamento
    }
  });
});
