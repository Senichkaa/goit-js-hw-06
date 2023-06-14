const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit',onSubmit);

function onSubmit(event) {
    event.preventDefault(); 
    
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, key) => {
        if (value === '') {
            alert("Містяться незаповнені поля. Заповніть їх.");
        }
        const newUser = {
            key: value,
        }
        console.log(newUser);
        formEl.reset();

    })
}