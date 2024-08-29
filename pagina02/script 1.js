const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Configurações iniciais
let t = 0; // variável de tempo para controlar o movimento do ponto
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const scale = 10; // escala do coração

// Função para calcular as coordenadas x e y do coração
function heartCoordinates(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x: x * scale, y: -y * scale }; // Inverter y para desenhar o coração na orientação correta
}

// Função para desenhar o coração e animar o ponto ao longo do contorno
function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas

    ctx.beginPath();
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 2;

    // Desenhar o contorno do coração
    for (let i = 0; i <= t; i += 0.05) {
        const pos = heartCoordinates(i);
        if (i === 0) {
            ctx.moveTo(centerX + pos.x, centerY + pos.y);
        } else {
            ctx.lineTo(centerX + pos.x, centerY + pos.y);
        }
    }

    ctx.stroke(); // Desenhar o contorno


    // Atualizar a posição do ponto
    t += 0.05;
    if (t > Math.PI * 2) t = 0; // Reiniciar a animação ao completar o contorno

    requestAnimationFrame(drawHeart); // Continuar a animação
}

// Iniciar a animação
drawHeart();
