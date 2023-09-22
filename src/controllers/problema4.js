// Hay que hacer un fetch a la url de los usuarios

const app = document.querySelector("#app");
const busqueda = document.querySelector("#busqueda");
const url = "https://jsonplaceholder.typicode.com/users";
const btnBuscar = document.querySelector("#btnBuscar");
const username = document.querySelector("#username");

const getUsers = async () => {
  const response = await fetch(url);
  const users = await response.json();
  return users;
};

const renderUsers = async () => {
  const users = await getUsers();
  const usersList = document.createElement("ul");
  usersList.classList.add("users-list");
  users.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.classList.add("user-item");
    userItem.innerHTML = `
              <p>
                  <strong>Id:</strong> ${user.id}
              </p>
              <p>
                  <strong>Name:</strong> ${user.name}
              </p>
              <p>
                  <strong>Username:</strong> ${user.username}
              </p>
              <p>
                  <strong>Email:</strong> ${user.email}
              </p>
          `;
    usersList.appendChild(userItem);
  });
  app.appendChild(usersList);
};
window.addEventListener("load", renderUsers);

const searchUser = async (username) => {
  const users = await getUsers();
  const user = users.find((user) => user.username === username);
  return user;
};

btnBuscar.addEventListener("click", async () => {
  busqueda.innerHTML = "";
  const user = await searchUser(username.value);
  if (user) {
    const userItem = document.createElement("li");
    userItem.classList.add("user-item");
    userItem.innerHTML = `
              <p>
                  <strong>Id:</strong> ${user.id}
              </p>
              <p>
                  <strong>Name:</strong> ${user.name}
              </p>
              <p>
                  <strong>Username:</strong> ${user.username}
              </p>
              <p>
                  <strong>Email:</strong> ${user.email}
              </p>
          `;
    busqueda.appendChild(userItem);
    username.value = "";
  } else {
    alert("No se encontró el usuario");
  }
});
