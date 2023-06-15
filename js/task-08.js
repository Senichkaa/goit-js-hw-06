const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

const newUser = {};

function onSubmit(event) {
    event.preventDefault(); 
    
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, key) => {
        if (value === '') {
            alert("Містяться незаповнені поля. Заповніть їх.");
            
        }
        else {
            newUser[key] = value;
        }
        
        
    })
    console.log(newUser);
    formEl.reset();
    
}