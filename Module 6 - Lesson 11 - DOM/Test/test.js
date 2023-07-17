const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  /*const {
    elements: { login, password }
  } = event.currentTarget;*/

  if (event.currentTarget.elements.login.value === "" || event.currentTarget.elements.password.value === "") {
    alert("Please fill in all the fields!");
  }

  //console.log(`Login: ${event.currentTarget.elements.login.value}, Password: ${event.currentTarget.elements.password.value}`);
  console.log(event)
}

