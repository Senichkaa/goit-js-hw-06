// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", onSubmit);

// const newUser = {};

// function onSubmit(event) {
//   event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value, key) => {
//       if (value === "") {
//         alert("Містяться незаповнені поля. Заповніть їх.");
//         return;
//       } else {
//         newUser[key] = value;
//       }
//     });
//     console.log(newUser);
// }
// formEl.reset();

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const user = {};

  const currForm = event.currentTarget;
  for (let index = 0; index < currForm.elements.length - 1; index += 1) {
    if (currForm.elements[index].value === "") {
      alert("Detected empty forms!");
      return;
    } else {
      user[currForm.elements[index].name] = currForm.elements[index].value;
    }
  }
  console.log(user);
  currForm.reset();
}
