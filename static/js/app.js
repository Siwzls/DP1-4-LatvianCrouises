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
if(btnMoreDetails != null){
    for(i = 0; i < btnMoreDetails.length; i++){
        btnMoreDetails[i].addEventListener('click', (e) =>{
            switchPopup(popupDetails);
        });
    }
}
// Shows login popup
if(btnLogin != null){
    btnLogin.addEventListener('click', (e) =>{
        switchPopup(popupLogin);
    });
}
//Shows edit popup
if(btnEdit != null){
    for(i = 0; i < btnEdit.length; i++){
        btnEdit[i].addEventListener('click', (e) =>{
            switchPopup(popupEdit);
        });
    }
}
// Hide popup
for(i = 0; i < btnPopupClose.length; i++){
btnPopupClose[i].addEventListener('click', (e) =>{
    var popupId = e.target.parentNode.parentNode;
    switchPopup(popupId);
});
document.addEventListener('click', (e) =>{
    switch(e.target.id){
        case 'ports':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            document.querySelector('#ships').style.backgroundColor = "#fff";
            document.querySelector('#ships').style.color = "#000000";
            document.querySelector('#crouises').style.backgroundColor = "#fff";
            document.querySelector('#crouises').style.color = "#000000";
            break;
        case 'ships':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            document.querySelector('#ports').style.backgroundColor = "#fff";
            document.querySelector('#ports').style.color = "#000000";
            document.querySelector('#crouises').style.backgroundColor = "#fff";
            document.querySelector('#crouises').style.color = "#000000";
            break;
        case 'crouises':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            document.querySelector('#ships').style.backgroundColor = "#fff";
            document.querySelector('#ships').style.color = "#000000";
            document.querySelector('#ports').style.backgroundColor = "#fff";
            document.querySelector('#ports').style.color = "#000000";
            break;
    }
})
}
function switchPopup(popupToClose){
    if(popupToClose.style.display == "flex")
        popupToClose.style.display = "none";
    else
        popupToClose.style.display = "flex";
}