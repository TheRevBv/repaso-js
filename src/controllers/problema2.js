// export interface

export function setupProblema2(element) {
  element.innerHTML = `
  <div class="container-fluid">
  <h1>Calculadora de Edad</h1>
  <label for="birthdate">Ingresa tu fecha de nacimiento:</label>
  <input type="date" date-format="dd/mm/yyyy" id="birthdate" name="birthdate">
  <button id="btnCalcula" >Calcular</button>
  <p id="resultado"></p>
  </div>
  `;

  const btnCalcula = element.querySelector("#btnCalcula");

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    //Dias de diferencia entre las dos fechas
    const diff = today.getTime() - birthDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //Meses que han pasado desde la fecha de nacimiento
    const months = Math.floor(days / 31);
    //Años que han pasado desde la fecha de nacimiento
    const years = Math.floor(months / 12);
    const response = {
      años: years,
      meses: months,
      dias: days,
      edad: age,
    };
    return response;
  };

  btnCalcula.addEventListener("click", () => {
    const birthdate = element.querySelector("#birthdate").value;
    const resultado = element.querySelector("#resultado");
    const data = calculateAge(birthdate);
    alert(
      "Tienes " +
        data.edad +
        " años, " +
        data.meses +
        " meses y " +
        data.dias +
        " días de edad."
    );
  });
}
