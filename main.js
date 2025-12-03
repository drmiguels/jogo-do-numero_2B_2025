let numeroAleatorio = Math.floor(Math.random() *100) +1;
const palpites = document.querySelector('palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = number(campoPalpite.value);
    if (contagemPalpite === 1) {
        palpites.textContent ="Palpites anteriores: "
    }

palpites.textContent += palpiteUsuario + " ";

 if (palpiteUsuario === numeroAleatorio) {
 ultimoResultado.textContext = "Parabéns! Você Acertou =!";
 ultimoResultado.style.backgroundColor = "green";
 baixoOuAlto.text = "";
 finalizarJogo();
 } else if (contagemPalpites === 10) {
   ultimoResultado.textcontent = "FIM DE JOGO!!";
 baixoOuAlto.textconntent = "";
 finalizarJogo();
 } else {
 ultimoResultado.textContent = "Errado";
 ultimoResultado.style.backgroundColor ="red";
 if (palpiteUsuario < numeroAleatorio) {
   baixoOuAlto.textContent = "O último palpite foi muito baixo";
 } else if (palpiteUsuario > numeroAleatório) {
   baixoOuAlto.textContent ="O último palpite foi alto";
 }
}

contagemPalpites++;
campoPalpites.value="";
campoPalpite.focus();
}

envioPalpite.addEventlistener('click', verificarPalpite);

function finalizarjogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReiniciar = document.createElement('button')
  document.body.appendChild(botaoReiniciar);
  botaoreiniciar.textContent = 'Reiniciar Jogo';
  botaoReiniciar.classList.add('botaoReiniciar');
  botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
  contagempalpites = 1;
  const paragrafosReiniciar = document.querySelectorALL('.paragrafosResultado p')
  for (const paragrafoReiniciar of paragrafosReiniciar) {
    paragrafosReiniciar.textcontent = "";
}

botaoReiniciar.parentNode.removeChild(botaoReiniciar);
campoPalpite.disabled = false;
envioPalpite.disabled = false;
campoPalpite.value ="";
campoPalpite.focus();
ultimoResultado.style.backgroundColor = 'white';
numeroAleatorio = Math.floor(Math.random() *100) + 1;
}
