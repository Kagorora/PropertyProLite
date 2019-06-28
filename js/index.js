var MenuToggle = document.querySelector('#Menu-Toggle');
var MenuTogglecloser = document.querySelector('#Menu-Toggle-closer');
var SmallScreenMenu = document.querySelector('.small-screen-Menu');

var SignUpBtn = document.querySelector('#SignUpBtn');
var LoginBtn = document.querySelector('#LoginBtn');

var containersignup = document.querySelector('.container-signup');
var loginContainer = document.querySelector('.login-container');

var smallScreenMenuSignUpBtn = document.querySelector('#small-screen-Menu-signUp-btn'); 
var smallScreenMenuLoginbtn = document.querySelector('#small-screen-Menu-Login-btn');


// Display menu for small screens
MenuToggle.addEventListener('click', displayMenu);

function displayMenu(){
    MenuToggle.style.display = 'none';
    MenuTogglecloser.style.display = 'block';
    SmallScreenMenu.style.display = 'block';
    containersignup.style.display = 'none';
    
}

// close menu for small screens
MenuTogglecloser.addEventListener('click', closeMenu);

function closeMenu(){
    MenuToggle.style.display = 'block'
    MenuTogglecloser.style.display = 'none';
    SmallScreenMenu.style.display = 'none';
    containersignup.style.display = 'none';
    loginContainer.style.display = 'none';
}


// display signup
smallScreenMenuSignUpBtn.addEventListener('click', displaySignUp);
SignUpBtn.addEventListener('click', displaySignUp);

function displaySignUp(){
    containersignup.style.display = 'block';
    SmallScreenMenu.style.display = 'none';
    loginContainer.style.display = 'none';
}

// display Login
LoginBtn.addEventListener('click', displayLogin);
smallScreenMenuLoginbtn.addEventListener('click', displayLogin);

function displayLogin(){
    loginContainer.style.display = 'block';
    containersignup.style.display = 'none';
    SmallScreenMenu.style.display = 'none';
}


