const API_URL = "https://reqres.in/api/users";
const usersContainer = document.getElementById("users");

async function fetchRequest(apiUrl, method = "GET", body) {
  let options = {
    method,
  };

  if (body) {
    options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }

  const response = await fetch(apiUrl, options);

  if (response.status === 404) {
    throw { message: "Not found!" };
  }

  if (response.status === 204) {
    return Promise.resolve({});
  }

  return response.json();
}

function generateSingleUser(user, userContainer) {
  // user avatar
  const avatar = document.createElement("img");
  avatar.src = user.avatar;
  avatar.alt = `${user.first_name} ${user.last_name} avatar`;

  // user name
  const name = document.createElement("p");
  name.textContent = `${user.first_name} ${user.last_name}`;

  // user email
  const email = document.createElement("p");
  email.textContent = user.email;

  userContainer.appendChild(avatar);
  userContainer.appendChild(name);
  userContainer.appendChild(email);
}

async function generateUsersList() {
  const usersData = JSON.parse(localStorage.getItem("users"));
  // Stergem toti copii pentru a genera noua lista de useri dupa ce selectam o noua pagina
  // https://www.w3schools.com/jsref/met_node_removechild.asp

  while (usersContainer.hasChildNodes()) {
    usersContainer.removeChild(usersContainer.firstChild);
  }

  if (!usersData) {
    return;
  }

  usersData.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user");
    generateSingleUser(user, userContainer);
    usersContainer.appendChild(userContainer);
  });
}

// GET /users
function getAllUsers() {}

// GET /users/1
function getSingleUser() {}

// POST /users
function createUser() {}

// PUT /users
function updateUser(userId) {}

// DELETE /users/1
function deleteUser(userId) {}

function onPageLoad() {
  getAllUsers();
  generateUsersList();
}

function refetch() {
  localStorage.clear();
  onPageLoad();
}
