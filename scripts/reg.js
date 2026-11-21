const signUpBtn = document.getElementById('signUpBtn')
const logInBtn = document.getElementById('logInBtn')
const signUp = document.getElementById('signUp')
const logIn = document.getElementById('logIn')

signUpBtn.addEventListener('click', function(){
    logIn.style.display = "none";
    signUp.style.display = "block";
})
logInBtn.addEventListener('click', function(){
    logIn.style.display = "block";
    logIn.style.marginTop = "13vh";
    signUp.style.display = "none";
})