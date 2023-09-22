export function setupProblema1(element) {
  element.innerHTML = `
      <div class="container-fluid">
          Selecciona una opción:
          <div class="row mt-5">
              <div class="cards_item">
                  <div class="card">
                      <img
                          src=""
                          class="card-img-top"
                          alt="Piedra"
                      />
                      <div class="card-content">
                          <div class="class-title">
                              Piedra
                          </div>
                          <button id="btn-1" class="btn btn-primary"> Piedra </button>    
                      </div>
                  </div>
              </div>
              <div class="cards_item">
                  <div class="card">
                      <img
                          src=""
                          class="card-img-top"
                          alt="Papel"
                      />
                      <div class="card-content">
                          <div class="class-title">
                              Papel
                          </div>
                          <button id="btn-2" class="btn btn-primary"> Papel </button>    
                      </div>
                  </div>
              </div>
              <div class="cards_item">
                  <div class="card">
                      <img
                          src=""
                          class="card-img-top"
                          alt="Tijera"
                      />
                      <div class="card-content">
                          <div class="class-title">
                              Tijera
                          </div>
                          <button id="btn-3" class="btn btn-primary"> Tijera </button>    
                      </div>
                  </div>
              </div>
          </div>                        
      </div>
      <!-- <div id="resultado" class="mt-3"></div> -->
      `;

  const opciones = ["piedra", "papel", "tijera"];
  const btnContainer = element.querySelector(".row");
  //   const resultadoElement = element.querySelector("#resultado");

  btnContainer.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "BUTTON") {
      const userChoice = e.target.textContent.trim().toLowerCase();
      const cpuChoice = opciones[Math.floor(Math.random() * opciones.length)];
      const resultado = comparar(userChoice, cpuChoice);
      alert(`Tu: ${userChoice}\nCPU: ${cpuChoice}\nResultado: ${resultado}`);
      //   resultadoElement.innerHTML = `Tu: ${userChoice}<br>CPU: ${cpuChoice}<br>Resultado: ${resultado}`;
    }
  });

  const comparar = (user, cpu) => {
    if (user === cpu) {
      return "Empate";
    } else if (
      (user === "piedra" && cpu === "tijera") ||
      (user === "papel" && cpu === "piedra") ||
      (user === "tijera" && cpu === "papel")
    ) {
      return "Ganaste";
    } else {
      return "Perdiste";
    }
  };
}
