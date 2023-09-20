// import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./src/controllers/counter.js";
import { setupProblema1 } from "./src/controllers/problema1.js";

const btnInicio = document.querySelector("#btn-inicio");

const setupApp = () => {
  document.querySelector("#app").innerHTML = `
<div class="container-fluid">
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    target="_blank"
  >
    <img
      src="${javascriptLogo}"
      class="logo vanilla"
      alt="JavaScript logo"
    />
  </a>
  <h1>Repaso de JavaScript</h1>
  <div class="row mt-5">
    <div class="cards_item">
      <div class="card">
        <img
          src="https://media.gettyimages.com/id/1172129181/es/vector/people-playing-paper-rock-scissors.jpg?s=1024x1024&w=gi&k=20&c=ijvXVrQMQwqqfKrxArwVLiD7pcrx3vUTKI6VuWb0Lr0="
          class="card-img-top"
          alt="Piedra, papel o tijera"
        />
        <div class="card-content">
          <h5 class="card-title">Ejercicio 1</h5>
          <p class="card-text">
            Diseñar una aplicación en JavaScript que permita jugar el juego
            de piedra, papel o tijera contra la computadora. El usuario
            deberá poder de seleccionar su opción a elegir (piedra, papel o
            tijera), encapsular toda la lógica de comparaciones del juego en
            una arrow function, y finalmente mostrar el resultado, si ganó
            el usuario o la computadora.
          </p>
          <button id="btn-1" class="btn btn-primary">Ir al ejercicio</button>
        </div>
      </div>
    </div>
    <div class="cards_item">
      <div class="card">
        <img
          src="https://www.crearuncurriculum.com/wp-content/uploads/2020/03/Calendario.jpg"
          class="card-img-top"
          alt="Fecha de nacimiento"
        />
        <div class="card-content">
          <h5 class="card-title">Ejercicio 2</h5>
          <p class="card-text">
            Diseñar una aplicación en JavaScript que capture la fecha de
            nacimiento de una persona, determine y muestre en un mensaje,
            cuantos años, cuantos meses y cuantos días han pasado desde que
            nació.
          </p>
          <button id="btn-2" class="btn btn-primary">Ir al ejercicio</button>
        </div>
      </div>
    </div>
    <div class="cards_item">
      <div class="card">
        <img
          src="https://www.encodedna.com/javascript/filter-out-numbers-only-from-array-using-javascript.png"
          class="card-img-top"
          alt="Arreglo de números"
        />
        <div class="card-content">
          <h5 class="card-title">Ejercicio 3</h5>
          <p class="card-text">
            Diseñar una aplicación en JavaScript que realice lo siguiente:
            <ul>
              <li>
                Crear un arreglo con 20 números aleatorios entre 0 y 100.
              </li>
              <li>Mostrar la lista de números</li>
              <li>Mostrar el número mayor</li>
              <li>
                Mostrar el número menor Utiliza solo funciones de arreglos.
              </li>
            </ul>
          </p>
          <button id="btn-3" class="btn btn-primary">Ir al ejercicio</button>
        </div>
      </div>
    </div>
    <div class="cards_item">
      <div class="card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/32/32441.png"
          class="card-img-top"
          alt="JSON Placeholder"
        />
        <div class="card-content">
          <h5 class="card-title">Ejercicio 4</h5>
          <p class="card-text">
            Diseñar una aplicación en JavaScript que realice una petición al sitio web JSON Placeholder para recuperar los datos de 10 usuarios (https://jsonplaceholder.typicode.com/users), una vez recibidos los datos la aplicación deberá de permitir realizar las siguientes acciones
            <ul>
              <li>
                1. Desplegar la lista de usuarios mostrando solo: id,nombre, username y email.
              </li>
              <li>2. Buscar a un usuario por medio de su username, y mostrar los mismos datos.</li>
            </ul>
          </p>
          <button id="btn-4" class="btn btn-primary">Ir al ejercicio</button>
        </div>
      </div>
    </div>
  </div>
</div>
`;
};

window.addEventListener("DOMContentLoaded", () => {
  setupApp();
  const btn1 = document.querySelector("#btn-1");
  const btn2 = document.querySelector("#btn-2");
  const btn3 = document.querySelector("#btn-3");
  const btn4 = document.querySelector("#btn-4");

  btn1.addEventListener("click", (e) => {
    e.preventDefault();
    setupProblema1(document.querySelector("#app"));
  });
  btn2.addEventListener("click", (e) => {
    e.preventDefault();
    setupProblema1(document.querySelector("#app"));
  });
  btn3.addEventListener("click", (e) => {
    e.preventDefault();
    setupProblema1(document.querySelector("#app"));
  });
  btn4.addEventListener("click", (e) => {
    e.preventDefault();
    setupProblema1(document.querySelector("#app"));
  });
});

btnInicio.addEventListener("click", () => {
  setupApp();
  window.location.reload();
});

// setupCounter(document.querySelector('#counter'))
