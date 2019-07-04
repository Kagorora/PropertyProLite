const MenuToggle = document.querySelector('#Menu-Toggle');
const MenuTogglecloser = document.querySelector('#Menu-Toggle-closer');
const SmallScreenMenu = document.querySelector('.small-screen-Menu');
const wordsSide = document.querySelector('.wordsSide');

const SignUpBtn = document.querySelector('#SignUpBtn');
const LoginBtn = document.querySelector('#LoginBtn');

const containersignup = document.querySelector('.container-signup');
const loginContainer = document.querySelector('.login-container');

const smallScreenMenuSignUpBtn = document.querySelector('#small-screen-Menu-signUp-btn'); 
const smallScreenMenuLoginbtn = document.querySelector('#small-screen-Menu-Login-btn');

const LoginBtnBtn = document.querySelector('.Login-Btn');

const StartNow = document.querySelector('.StartNow');

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
    wordsSide.style.display = 'block';
}


// display signup
StartNow.addEventListener('click', displaySignUp);
smallScreenMenuSignUpBtn.addEventListener('click', displaySignUp);
SignUpBtn.addEventListener('click', displaySignUp);

function displaySignUp(){
    containersignup.style.display = 'block';
    SmallScreenMenu.style.display = 'none';
    loginContainer.style.display = 'none';
    wordsSide.style.display = 'none';
}

// display Login
LoginBtn.addEventListener('click', displayLogin);
smallScreenMenuLoginbtn.addEventListener('click', displayLogin);

function displayLogin(){
    loginContainer.style.display = 'block';
    containersignup.style.display = 'none';
    SmallScreenMenu.style.display = 'none';
    wordsSide.style.display = 'none';
}

// Login  into the system
LoginBtnBtn.addEventListener('click', LoginIntoTheSystem);


function LoginIntoTheSystem(){
    window.location.href = './agent.html';
} 


