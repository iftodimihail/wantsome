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
    const userContainer = document.createElement("a");
    userContainer.classList.add("user");
    userContainer.href = `user.html?id=${user.id}`;

    generateSingleUser(user, userContainer);

    const userDeleteButton = document.createElement("button");
    userDeleteButton.innerHTML = "Delete";
    userDeleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      deleteUser(user.id);
    });

    const userUpdateButton = document.createElement("button");
    userUpdateButton.innerHTML = "Update";
    userUpdateButton.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      updateUser(user.id);
    });

    userContainer.appendChild(userDeleteButton);
    userContainer.appendChild(userUpdateButton);
    usersContainer.appendChild(userContainer);
  });
}

async function getAllUsers() {
  const users = localStorage.getItem("users");
  if (users) {
    return;
  }

  let payload;
  try {
    payload = await fetchRequest(API_URL);
  } catch (err) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "The list of users could not be fetched. Please try again later!";
    errorMessage.classList.add("error");
  }

  localStorage.setItem("users", JSON.stringify(payload.data));
}

async function getSingleUser() {
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("id");
  const apiUrl = `${API_URL}/${userId}`;

  let payload;

  try {
    payload = await fetchRequest(apiUrl);
  } catch (err) {
    console.log(err);
  }

  const { data } = payload;
  const user = data;

  document.getElementById(
    "title"
  ).textContent = `${user.first_name} ${user.last_name}`;

  const userContainer = document.createElement("div");
  userContainer.classList.add("user");

  generateSingleUser(user, userContainer);
  document.body.appendChild(userContainer);
}

const form = document.getElementById("createUserForm");
async function createUser() {
  const formData = new FormData(form);

  let payload;
  try {
    payload = await fetchRequest(API_URL, "POST", {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
    });
  } catch (err) {
    console.log(err);
  }

  const users = JSON.parse(localStorage.getItem("users"));
  const newUsers = [payload, ...users];
  localStorage.setItem("users", JSON.stringify(newUsers));
  generateUsersList();
}
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  createUser();
});

async function updateUser(userId) {
  const users = JSON.parse(localStorage.getItem("users"));
  const selectedUser = users.find((user) => user.id === userId);

  selectedUser.last_name = "Smith";

  let payload;
  try {
    payload = await fetchRequest(`${API_URL}/${userId}`, "PUT", {
      ...selectedUser,
    });
  } catch (err) {
    console.log(err);
    return;
  }

  localStorage.setItem("users", JSON.stringify(users));
  generateUsersList();
}

async function deleteUser(userId) {
  const apiUrl = `${API_URL}/${userId}`;

  try {
    await fetchRequest(apiUrl, "DELETE");
  } catch (err) {
    console.log(err);
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  const newUsers = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(newUsers));

  generateUsersList();
}

async function onPageLoad() {
  await getAllUsers();
  generateUsersList();
}

function refetch() {
  localStorage.clear();
  onPageLoad();
}
