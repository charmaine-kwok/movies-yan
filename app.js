const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".logo a, .menu-link, .link, a:visited, .container, .movie-item, .movie-list-title, .logo, .navbar-container, .toggle");

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})