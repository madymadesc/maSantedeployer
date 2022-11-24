const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mobile = document.getElementById('mobile');
const motDePasse =document.getElementById('motDePasse');

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSucess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const mobileValue = mobile.value.trim();
    const motDePasseValue = motDePasse.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }else{
        setSucess(username);
    }

    if(emailValue === ''){
        setError(email,'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email,'Provalid email address');
    }else{
        setSucess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character.');
    }else{
        setSucess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Please confirm your password');
    }else if(password2Value !== passwordValue){
        setError(password2, "Passwords doesn't match");
    }else{
        setSucess(password2);
    }

    if(mobileValue === ''){
        setError(mobile, 'Numero est aubligatoir');
    }else if(mobileValue.length < 8){
        setError(mobile, 'Le numero doit etre 8')
    }else{
        setSucess(mobile);
    }

    if(motDePasseValue === ''){
        setError(motDePasse, 'Le mot de pass est oblicatoir');
    }else if(motDePasseValue.length < 4){
        setError(motDePasse, 'Mot de passe entre 4 et 16 chiffre');
    }else{
        setSucess(motDePasse);
    }

};