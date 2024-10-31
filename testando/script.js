let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.carousel-images img'); // Seleciona todas as imagens

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active'); // Remove a classe 'active' de todas as imagens
        if (i === index) {
            img.classList.add('active'); // Adiciona 'active' apenas à imagem atual
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Avança para a próxima imagem
    showSlide(currentIndex); 
    
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Retorna para a imagem anterior
    showSlide(currentIndex);
}

// Troca automática de imagens a cada 3 segundos
setInterval(nextSlide, 3000);
