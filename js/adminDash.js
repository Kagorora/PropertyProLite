const UpdateUserForm = document.querySelector('.UpdateUserForm');
const updateUserBtnOnUserForms = document.querySelectorAll('.updateUserBtnOnUserForms');
const UserTable = document.querySelector('.UserTable');
const cancelBtnUpdateUserForm = document.querySelector('#cancelBtnUpdateUserForm');
const container = document.querySelector('.container');
const UserTableRow = document.querySelector('.UserTableRow');
const CreateUserForm = document.querySelector('.CreateUserForm');
const CreateAccountToggle = document.querySelector('.CreateAccountToggle');
const cancelBtnCreateUser = document.querySelector('#cancelBtnCreateUser');
const UserTableForm = document.getElementById('UserTableForm');
const PropertiesBtn = document.querySelector('.PropertiesBtn');
const indicatorProperties = document.querySelector('.indicatorProperties');
const indicator = document.querySelector('.indicator'); 
const PropertiesRecords = document.querySelector('.PropertiesRecords');
const ProductOnSellCard = document.querySelector('.ProductOnSellCard');
const UsersBtn = document.querySelector('.UsersBtn'); 
const UpdatePropertiesRecords = document.querySelectorAll('.UpdatePropertiesRecords');




// UserTableRow.addEventListener('click', displayUserUpdateForm);
// updateUserBtnOnUserForms.addEventListener('click', displayUserUpdateForm);
function displayUserUpdateForm(){
    UpdateUserForm.style.display = 'block';
    // UpdateUserForm.style.opacity = 1;
    UserTable.style.opacity = 0.3;
}


for(item of updateUserBtnOnUserForms){
    item.addEventListener('click', displayUserUpdateForm);
}


// updateUserBtnOnUserForms.forEach(function(item){
//     item.addEventListener('click', displayUserUpdateForm);
// });


cancelBtnUpdateUserForm.addEventListener('click', closeUserUpdateForm);
function closeUserUpdateForm(){
    UpdateUserForm.style.display = 'none';
    UserTable.style.opacity = 1;
}

// ====================== Create User Form ==================



// diplay User Form

CreateAccountToggle.addEventListener('click', displayCreateAccountForm);

function displayCreateAccountForm(){
    CreateUserForm.style.display = 'block';
    UserTable.style.opacity = 0.2;
}


// cancel User Form

cancelBtnCreateUser.addEventListener('click', closeCreateAccountForm);

function closeCreateAccountForm(){
    CreateUserForm.style.display = 'none';
    UserTable.style.opacity = 1;
}


// Properties

PropertiesBtn.addEventListener('click', displayPropertiesContent);
function displayPropertiesContent() {
    
    UserTable.style.display = 'none';
    CreateAccountToggle.style.display = 'none';
    indicator.style.display = 'none';
    PropertiesRecords.style.display = 'block';
    UsersBtn.style.background = '#ddd';
    indicatorProperties.style.display = 'block'
}


// display update Properties Forms

for(products of UpdatePropertiesRecords){
    products.addEventListener('click', displayUpdatPropertiesForm);
}

function displayUpdatPropertiesForm(){
    ProductOnSellCard.style.display = 'block';
    PropertiesRecords.style.opacity = 0.2;

}

// Resposinveness =========================================


