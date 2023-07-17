const form = document.querySelector(".login-form");
const usernameInput = form.querySelectorAll('input')[0];
const passwordInput = form.querySelectorAll('input')[1];
let formData;



form.addEventListener("submit", event => {
    event.preventDefault();
    /*if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
  alert("Please fill in all the fields!");
}

console.log(event.currentTarget.elements)*/
    usernameInput.addEventListener("input", event => {
        
        formData = { [event.currentTarget.name]: event.currentTarget.elements.email.value };
        console.log(event)
    })

    passwordInput.addEventListener("input", event => {
        formData = { ...formData, [event.currentTarget.name]: event.currentTarget.elements.password.value };
        console.log(formData);
    })
  //event.currentTarget.reset();
});
console.log(formData);


/*function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    //return console.log("Please fill in all the fields!");
      alert("All fields must be filled in");
  }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    //console.log(event.currentTarget.elements)
  event.currentTarget.reset();
}*/
