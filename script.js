const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

    open_btn.addEventListener('click', () => {
        nav.forEach(nav_el => nav_el.classList.add('visible'));
    })

    close_btn.addEventListener('click', () => {
        nav.forEach(nav_el => nav_el.classList.remove('visible'));
    })

     // Lista de gifs de fundo
     const backgrounds = ['IMG/all_back.jpg', 'IMG/murray.gif', 'IMG/kobe.gif', 'IMG/manu.gif', 'IMG/rose.gif', 'IMG/doncic.gif',
     'IMG/lebron.gif', 'IMG/duncan.gif', 'IMG/curry.gif', 'IMG/durant.gif', 'IMG/garnett.gif', 'IMG/golden.gif', 'IMG/trae.gif'];
     const backgroundElement = document.querySelector('.background');
     let currentBackgroundIndex = 0;

     function changeBackground() {
         backgroundElement.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
         currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
     }

     const backgroundDisplayTimes = [4000,4000,5500,5400,5500,6000,3500,3000,5500,5400,6800,5400,4000];

     function setBackgroundWithDelay() {
     changeBackground();
     setTimeout(setBackgroundWithDelay, backgroundDisplayTimes[currentBackgroundIndex]);
     }

         // Inicia o ciclo de troca de plano de fundo
         setBackgroundWithDelay();


const quizLink = document.getElementById('quiz-link');
const loadingElement = document.getElementById('loading');

quizLink.addEventListener('click', function(event) {
    // Impede o comportamento padrão do link
    event.preventDefault();

    // Mostra o elemento de carregamento
    loadingElement.style.display = 'block';
    backgroundElement.style.opacity = '0.15'; // Aplica a opacidade de 0.3 ao fundo

    // Desativa o link enquanto carrega
    quizLink.style.pointerEvents = 'none';

    // Adiciona uma transição de 1 segundo antes do redirecionamento
    setTimeout(function() {
        // Redireciona para a página do quiz
        window.location.href = "../Quiz_NBA/menu_quiz.html";

        // Esconde o elemento de carregamento e restaura a opacidade do fundo após 1 segundo
        setTimeout(function() {
            loadingElement.style.display = 'none';
            backgroundElement.style.opacity = '1'; // Restaura a opacidade do fundo
        }, 1000);

        // Reativa o link após 1 segundo
        setTimeout(function() {
            quizLink.style.pointerEvents = 'auto';
        }, 1000);
    }, 1000); // 1000 milissegundos = 1 segundo
});