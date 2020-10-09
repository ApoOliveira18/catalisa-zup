/**
 * Arquivo: intro.js
 * Data: 20/12/2019
 * Descrição: Lógica da Intro do filme Star Wars.
 * Author: Glaucia Lemos
 */

let width = window.innerWidth;
let height = window.innerHeight;

const intro = document.getElementsByClassName("intro")[0];
const historia = document.getElementsByClassName("historia")[0];
const paragrafos = document.getElementsByClassName("paragrafos")[0];
const som = document.getElementById("som");

intro.style.fontSize = width / 30 + "px";
historia.style.fontSize = width / 20 + "px";
paragrafos.style.height = height + 20 + "px";

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  intro.style.fontSize = width / 30 + "px";
  historia.style.fontSize = width / 20 + "px";
  paragrafos.style.height = height + "px";
});

function iniciar() {
  intro.className = "intro intro_texto intro_animacao";
  historia.className = "historia historia_texto historia_animacao";
  som.play();
}

inicio();
