// Buttons
const btnMoreDetails = document.querySelectorAll('.btn_details');
const btnEdit = document.querySelectorAll('.btn_edit');
const btnLogin = document.querySelector('#login');
const btnPopupClose = document.querySelectorAll('.btn_popupClose');

//Popups
const popupDetails = document.querySelector('#popup_details');
const popupLogin = document.querySelector('#popup_login');
const popupEdit = document.querySelector('#popup_edit');

// Shows details popup
if(btnMoreDetails != null)
{
    for(i = 0; i < btnMoreDetails.length; i++){
        btnMoreDetails[i].addEventListener('click', (e) =>{
            popupDetails.style.display = "flex";
        });
    }
}
// Shows login popup
if(btnLogin != null)
{
    btnLogin.addEventListener('click', (e) =>{
        popupLogin.style.display = "flex";
    });
}
//Shows edit popup
if(btnEdit != null)
{
    for(i = 0; i < btnEdit.length; i++){
        btnEdit[i].addEventListener('click', (e) =>{
            popupEdit.style.display = "flex";
        });
    }
}
// Hide popup
for(i = 0; i < btnPopupClose.length; i++){
btnPopupClose[i].addEventListener('click', (e) =>{
    var popupId = e.target.parentNode.parentNode;
    switchPopup(popupId);
});
}
function switchPopup(popupToClose){
    if(popupToClose.style.display = "flex")
        popupToClose.style.display = "none";
    else if(popupToClose.style.display = "none")
        popupToClose.style.display = "flex";
}