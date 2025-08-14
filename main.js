
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

ultimoResultado.textContext = "Parabéns"
ultimoResultado.style.backgroundColor = "gren";
baixoOuAlto.text = "";
finalizarJogo();
} else if (contagemPalpites === 10) {
  ultimoResultado.textcontent =" 
baixoOuAlto.textconntent = "";
ultimoResultado.style.backgroundColor ="red";
if (palpiteUsuario
