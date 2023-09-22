// import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./src/controllers/counter.js";
import { setupProblema1 } from "./src/controllers/problema1.js";
import { setupProblema2 } from "./src/controllers/problema2.js";

const btnInicio = document.querySelector("#btn-inicio");
const appContainer = document.querySelector("#app");

const createExerciseCard = (exerciseNumber, title, description) => {
  const card = document.createElement("div");
  card.className = "cards_item";
  card.innerHTML = `
    <div class="card">
      <!-- Coloca aquí la imagen de la tarjeta -->
      <div class="card-content">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <button id="btn-${exerciseNumber}" class="btn btn-primary">Ir al ejercicio</button>
      </div>
    </div>
  `;
  return card;
};

const setupApp = () => {
  appContainer.innerHTML = `
    <div class="container-fluid">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Repaso de JavaScript</h1>
      <div class="row mt-5">        
      </div>
    </div>
  `;

  // Agrega las tarjetas de ejercicio al DOM
  const exerciseCardsContainer = document.querySelector(".row");
  exerciseCardsContainer.appendChild(
    createExerciseCard(
      1,
      "Ejercicio 1",
      "Diseñar una aplicación en JavaScript que permita jugar el juego de piedra, papel o tijera..."
    )
  );
  exerciseCardsContainer.appendChild(
    createExerciseCard(
      2,
      "Ejercicio 2",
      "Diseñar una aplicación en JavaScript que capture la fecha de nacimiento de una persona..."
    )
  );
  exerciseCardsContainer.appendChild(
    createExerciseCard(
      3,
      "Ejercicio 3",
      "Diseñar una aplicación en JavaScript que realice lo siguiente: ..."
    )
  );
  exerciseCardsContainer.appendChild(
    createExerciseCard(
      4,
      "Ejercicio 4",
      "Diseñar una aplicación en JavaScript que realice una petición al sitio web JSON Placeholder..."
    )
  );

  addEventListeners();
};

const addEventListeners = () => {
  const exerciseButtons = document.querySelectorAll("[id^=btn-]");

  exerciseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const exerciseNumber = button.id.split("-")[1];
      switch (exerciseNumber) {
        case "1":
          setupProblema1(appContainer);
          break;
        case "2":
          setupProblema2(appContainer);
          break;
        case "3":
          // Navega a la ruta correspondiente
          window.location.href = "/problema3.html";
          //TODO: Llama a la función correspondiente para el ejercicio 3
          break;
        case "4":
          // Navega a la ruta correspondiente
          window.location.href = "/problema4.html";
          break;
        // TODO: Llama a la función correspondiente para el ejercicio 4
        default:
          break;
      }
    });
  });

  btnInicio.addEventListener("click", () => {
    setupApp();
    window.location.reload();
  });
};

window.addEventListener("DOMContentLoaded", () => {
  setupApp();
});
