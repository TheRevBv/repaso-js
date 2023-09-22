const app = document.getElementById("app");
const array = [];
const arrayLength = 20;
const min = 1;
const max = 100;

for (let i = 0; i < arrayLength; i++) {
  array.push(Math.floor(Math.random() * (max - min + 1)) + min);
}

const maxNumber = Math.max(...array);
const minNumber = Math.min(...array);

window.addEventListener("DOMContentLoaded", () => {
  app.innerHTML = `
  <div class="container-fluid">
<p>
    <strong>Array:</strong> ${array}
</p>
<br />
<p>
    <strong>Numero mayor:</strong> ${maxNumber}
</p>
<br />
<p>
    <strong>Numero menor:</strong> ${minNumber}
</p>
</div>
`;
});
