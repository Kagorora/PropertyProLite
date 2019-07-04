const postproductsfrm = document.getElementById('postproductsfrm');
const postProdBtn = document.getElementById('postProd');
const MyAdvert = document.querySelector('.MyAdvert');
const MyProductsBtn = document.getElementById('MyProductsBtn');
const HomeBtn = document.getElementById('HomeBtn');
const EditMyAdvertBtn = document.querySelectorAll('#EditMyAdvertBtn');
const OwnAdverts = document.querySelector('.OwnAdverts'); 
const MyProductOnSellCard = document.querySelector('.MyProductOnSellCard');
// const MyOwnAdverts = document.querySelector('.MyOwnAdverts');
const MyOwnAdvertsTable = document.querySelector('.MyOwnAdvertsTable');
const CloseMyProductOnSellCard = document.querySelector('#CloseMyProductOnSellCard');
const DeleteConfirmationMsg = document.querySelector('.DeleteConfirmationMsg');
const DeletMyAdvrtBtn = document.querySelector('#DeletMyAdvrtBtn');
const CancelDeleteConfirmationMsgt = document.querySelector('#CancelDeleteConfirmationMsgt');
const DeleteMyAdvertBtn = document.querySelector('#DeleteMyAdvertBtn');
const Only3BedRBtn = document.querySelector('#Only3BedRBtn');
const threeBedRoom = document.querySelector('.threeBedRoom');
const TwoBedRoom = document.querySelector('.TwoBedRoom');
const OneBedRoom = document.querySelector('.OneBedRoom');
const CloseEachProductViewContentSide = document.querySelector('#CloseEachProductView-ContentSide');
const EachProductView = document.querySelector('.EachProductView');
const blocks = document.querySelector('.blocks');
const HousePost1 = document.querySelector('.HousePost1');
const HousePost2 = document.querySelector('.HousePost2');
const HousePost3 = document.querySelector('.HousePost3');
const HousePost4 = document.querySelector('.HousePost4');
const HousePost5 = document.querySelector('.HousePost5');
const HousePost6 = document.querySelector('.HousePost6');
const SoldPropertyBtn = document.querySelector('#SoldPropertyBtn'); 
const ProductStatusHold = document.querySelector('.ProductStatusHold');
const menuToggleCloseAgent = document.querySelector('#menuToggleCloseAgent');
const menuToggleAgent = document.querySelector('#menuToggleAgent');
const sidebar = document.querySelector('.sidebar');
const UpdateePropertyBtn = document.querySelector('#UpdateePropertyBtn');

// ============== Post Product =============================================================================

postProdBtn.addEventListener('click', displaypostproductform);

function displaypostproductform(){
    postproductsfrm.style.display = 'block';
    MyAdvert.style.display = 'none';
    
}

// ==============cancel posting form ==============

var cancelbtn =document.getElementById('cancelbtn');

cancelbtn.addEventListener('click', closepostproductform);

function closepostproductform(){
    postproductsfrm.style.display = 'none';
    MyAdvert.style.display = 'block';
}



//================== Home ===============

HomeBtn.addEventListener('click', displayAllProducts);
function displayAllProducts(){
    postproductsfrm.style.display = 'none';
    MyAdvert.style.display = 'block';
}




//  ======================= post item ================
const postItem = document.getElementById('add-item');
const btnAddProduct = document.getElementById('okpostproductbtn');
btnAddProduct.addEventListener('click', () => {
    postItem.innerHTML += `<div id="post-item" class="ProductsPosted">
                <div class="image">
                <img src="../img/caption.jpg"/>
                </div>
                <div class="NameOfProduct">
                ${dao.mdfndjnfs.klfsdjno}
                </div>
                <div class="QuantityOfProduct">

                </div>
            </div>`;

});




//  =========================== Show MyProducts ===========================

MyProductsBtn.addEventListener('click', displayMyProducts);

function displayMyProducts(){
    MyAdvert.style.display = 'none';
    // MyOwnAdverts.style.display = 'block';
    MyOwnAdvertsTable.style.display = 'block';
    postproductsfrm.style.display = 'none';
}


// ============================ Home ======================================

HomeBtn.addEventListener('click', displayHome);

function displayHome(){
    postproductsfrm.style.display = 'none';
    MyAdvert.style.display = 'block';
    MyOwnAdvertsTable.style.display = 'none';
}


// ============================= Display Update card =====================

for(Myprods of EditMyAdvertBtn){
    Myprods.addEventListener('click', displayMyAdvertUpdateCard);
}

function displayMyAdvertUpdateCard(){
    MyProductOnSellCard.style.display = 'block';
    MyOwnAdvertsTable.style.display = 'none';
    
}

UpdateePropertyBtn.addEventListener('click', closeMyAdvertUpdateCard);

function closeMyAdvertUpdateCard(){
    MyProductOnSellCard.style.display = 'none';
    MyOwnAdvertsTable.style.display = 'block';
    
}


// close My products card

CloseMyProductOnSellCard.addEventListener('click', CloseMyProductOnSellCardForm);
function CloseMyProductOnSellCardForm(){
    MyProductOnSellCard.style.display = 'none';
    MyOwnAdverts.style.opacity = 1;
}

// ============================== Display Own Adverts ================
// MyProductsBtn.addEventListener('click', displayMyOwnProducts);

// function displayMyOwnProducts(){
//     MyOwnAdverts.style.display = 'block';
//     MyAdvert.style.display = 'none';
    
// }


// Delete My Product

DeleteMyAdvertBtn.addEventListener('click', displayDeleteAlert);
function displayDeleteAlert(){
    DeleteConfirmationMsg.style.display = 'block';
    MyOwnAdvertsTable.style.display = 'none';
}

// cancel Delete My Product

CancelDeleteConfirmationMsgt.addEventListener('click', cancelDeleteAlertMsg);
function cancelDeleteAlertMsg(){
    MyOwnAdvertsTable.style.display = 'block';
    DeleteConfirmationMsg.style.display = 'none';
}

 // close Product detailed info

 CloseEachProductViewContentSide.addEventListener('click', closeProductDetailInfoo);

 function closeProductDetailInfoo(){
    EachProductView.style.display = 'none';
    blocks.style.opacity = 1;
 }

 // display details info

//  OneBedRoom.addEventListener('click', displayDetailedProppInffo);

// for(TBRoom of  TwoBedRoom){
//     TBRoom.addEventListener('click', displayDetailedProppInffo);
// }

//  OneBedRoom.addEventListener('click', displayDetailedProppInffo);

// for(threeBRoom of threeBedRoom){
//     threeBRoom.addEventListener('click', displayMyAdvertUpdateCard);
// }


HousePost1.addEventListener('click', displayDetailedProppInffo);
HousePost2.addEventListener('click', displayDetailedProppInffo);
HousePost3.addEventListener('click', displayDetailedProppInffo);
HousePost4.addEventListener('click', displayDetailedProppInffo);
HousePost5.addEventListener('click', displayDetailedProppInffo);
HousePost6.addEventListener('click', displayDetailedProppInffo);

function displayDetailedProppInffo(){
    EachProductView.style.display = 'block';
    blocks.style.opacity = '0.02';
}


// Mark Product as Sold
// SoldPropertyBtn.addEventListener('click', markProductAsSold);

// function markProductAsSold(){
//     ProductStatusHold.value = 'Sold';
// }

const btnChange = document.querySelector('#SoldPropertyBtn');
btnChange.addEventListener('click', () => {
    if(btnChange.className === 'btn btn-warn') {
        document.querySelector('#txt-status').value = 'Sold';
        document.querySelector('#txt-status').style.background = '#2e9914';   

        btnChange.innerHTML = 'Available';
        btnChange.classList.add('btn-success');
        // btnChange.style.background = '#992720';
    }else {
        document.querySelector('#txt-status').value = 'Availlable';
        document.querySelector('#txt-status').style.background = '#992720';  

        btnChange.innerHTML = 'On Sell';
        btnChange.classList.remove('btn-success');
        // btnChange.style.background = '#2e9914';
    }
})


// Search By Choice

const SearchAdvertsPanel = document.querySelector('#SearchAdvertsPanel');
SearchAdvertsPanel.addEventListener('click', () => {
    if(SearchAdvertsPanel.className === 'Only3BedRBtn') {
        HousePost1.style.display = 'block';
        HousePost2.style.display = 'none';
        HousePost3.style.display = 'none';
        HousePost4.style.display = 'none';
        HousePost5.style.display = 'none';
        HousePost6.style.display = 'none';
    }
});


// =======  Responiveness 

// Display SideBar-Menu
menuToggleAgent.addEventListener('click', displaySideBar);
function displaySideBar(){
    menuToggleAgent.style.display='none';
    menuToggleCloseAgent.style.display='block';
    sidebar.style.width = '30%';
    sidebar.style.opacity = '0.7';
  
}

// Close SideBar-Menu
menuToggleCloseAgent.addEventListener('click', HideSideBar);
function HideSideBar(){
    menuToggleAgent.style.display='block';
    menuToggleCloseAgent.style.display='none';
    sidebar.style.width = '10%';
}


