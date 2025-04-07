// ===== Canvas 1 =====
const c1 = document.getElementById('canvas1');
const ctx1 = c1.getContext('2d');

ctx1.fillStyle = "white";
ctx1.fillRect(0, 0, 300, 300);

// Linhas de divisão
ctx1.strokeStyle = "black";
ctx1.beginPath();
ctx1.moveTo(150, 150);
ctx1.lineTo(150, 300); // Apenas da metade para baixo
ctx1.stroke();

ctx1.beginPath();
ctx1.moveTo(0, 150);
ctx1.lineTo(300, 150);
ctx1.stroke();

// Retângulos superiores
ctx1.fillStyle = "blue";
ctx1.fillRect(0, 0, 40, 40);

ctx1.fillStyle = "red";
ctx1.fillRect(260, 0, 40, 40);

// Retângulos centrais laterais
ctx1.fillStyle = "cyan";
ctx1.fillRect(0, 110, 20, 40);
ctx1.fillRect(280, 110, 20, 40);

// Círculo cyan central
ctx1.fillStyle = "cyan";
ctx1.beginPath();
ctx1.arc(150, 110, 12, 0, 2 * Math.PI);
ctx1.fill();

// Círculo amarelo inferior esquerdo
ctx1.fillStyle = "yellow";
ctx1.beginPath();
ctx1.arc(60, 180, 15, 0, 2 * Math.PI);
ctx1.fill();

// Círculo amarelo inferior direito
ctx1.beginPath();
ctx1.arc(240, 180, 15, 0, 2 * Math.PI);
ctx1.fill();

// Semicírculo inferior azul claro
ctx1.fillStyle = "cyan";
ctx1.beginPath();
ctx1.arc(150, 300, 40, Math.PI, 0);
ctx1.closePath();
ctx1.fill();

// "L" amarelo canto inferior esquerdo
ctx1.fillStyle = "yellow";
ctx1.fillRect(0, 260, 20, 20);
ctx1.fillRect(0, 280, 20, 20);
ctx1.fillRect(20, 280, 20, 20);

// "L" preto canto inferior direito
ctx1.fillStyle = "black";
ctx1.fillRect(280, 260, 20, 20);
ctx1.fillRect(280, 280, 20, 20);
ctx1.fillRect(260, 280, 20, 20);

// ===== Canvas 2: Casa =====
const c2 = document.getElementById('canvas2');
const ctx2 = c2.getContext('2d');

ctx2.fillStyle = "#a0fff0";
ctx2.fillRect(0, 0, 300, 300);

// Sol
ctx2.beginPath();
ctx2.arc(240, 60, 40, 0, 2 * Math.PI);
ctx2.fillStyle = "yellow";
ctx2.fill();

// Grama e montes
ctx2.fillStyle = "gray";
ctx2.fillRect(0, 200, 300, 100);

ctx2.fillStyle = "#3399ff";
ctx2.beginPath();
ctx2.moveTo(0, 150);
ctx2.quadraticCurveTo(60, 170, 60, 200);
ctx2.lineTo(60, 300);
ctx2.lineTo(0, 300);
ctx2.closePath();
ctx2.fill();

ctx2.beginPath();
ctx2.moveTo(0, 250);
ctx2.quadraticCurveTo(80, 270, 80, 300);
ctx2.lineTo(0, 300);
ctx2.closePath();
ctx2.fill();

// Casa
ctx2.fillStyle = "#8B4513";
ctx2.fillRect(120, 150, 60, 60);

ctx2.fillStyle = "#5C3317";
ctx2.fillRect(145, 180, 10, 30);

ctx2.fillStyle = "#66ccff";
ctx2.fillRect(125, 160, 15, 15);
ctx2.fillRect(160, 160, 15, 15);

// Telhado
ctx2.fillStyle = "#FF6347";
ctx2.beginPath();
ctx2.moveTo(120, 150);
ctx2.lineTo(150, 120);
ctx2.lineTo(180, 150);
ctx2.closePath();
ctx2.fill();

// Árvores
ctx2.fillStyle = "#8B4513";
ctx2.fillRect(60, 170, 10, 30);
ctx2.beginPath();
ctx2.arc(65, 165, 15, 0, 2 * Math.PI);
ctx2.fillStyle = "green";
ctx2.fill();

ctx2.fillStyle = "#8B4513";
ctx2.fillRect(230, 190, 10, 30);
ctx2.beginPath();
ctx2.arc(235, 185, 15, 0, 2 * Math.PI);
ctx2.fillStyle = "green";
ctx2.fill();
