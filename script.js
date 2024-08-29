let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Vai para a última foto
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Vai para a primeira foto
    }
    showSlide(currentSlide);
}

function showMessage(message) {
    alert(message);
}


showSlide(currentSlide);
// Configuração do IntersectionObserver
const observerOptions = {
    root: null, // Usa o viewport como root
    rootMargin: '0px',
    threshold: 0.1 // Visibilidade mínima de 10%
};


function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Se a última imagem estiver visível
            document.getElementById('fixedButton').style.display = 'block';
        } else {
            // Se a última imagem não estiver visível
            document.getElementById('fixedButton').style.display = 'none';
        }
    });
}

// Cria uma instância do IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Seleciona a última imagem da galeria
const lastImage = document.querySelector('.gallery-item:last-child');

// Observa a última imagem
if (lastImage) {
    observer.observe(lastImage);
}


