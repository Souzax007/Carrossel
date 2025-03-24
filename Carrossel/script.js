// Variável que armazena o índice do slide atual
let currentIndex = 0;

// Função para mostrar o slide baseado no índice
function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const totalSlides = document.querySelectorAll('.carousel img').length; // Total de imagens no carrossel

    // Se o índice for maior ou igual ao número total de slides, volta para o primeiro slide
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) { // Se o índice for menor que 0, vai para o último slide
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index; // Caso contrário, define o índice diretamente
    }

    // Muda a posição do carrossel de acordo com o índice atual
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Função para avançar para o próximo slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Função para voltar para o slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Função que inicia o carrossel automaticamente, mudando os slides a cada 3 segundos
function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // Muda a cada 3 segundos
}

// Função que pausa a troca automática de slides
function stopAutoSlide() {
    clearInterval(interval); // Para o intervalo de mudança de slides
}

// Inicia a troca automática de slides ao carregar a página
startAutoSlide();

// Pausa a troca de slides quando o mouse entra na área do carrossel
document.getElementById('carousel').addEventListener('mouseenter', stopAutoSlide);

// Retoma a troca de slides quando o mouse sai da área do carrossel
document.getElementById('carousel').addEventListener('mouseleave', startAutoSlide);

