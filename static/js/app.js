// Buttons
const btnMoreDetails = document.querySelectorAll('.btn_details');
const btnEdit = document.querySelectorAll('.btn_edit');
const btnLogin = document.querySelector('#login');
const btnPopupClose = document.querySelectorAll('.btn_popupClose');
const btnAddNew = document.querySelector('#btn_addNew');
const btnDelete = document.querySelectorAll('.btn_popupDelete');

//Popups
const popupDetails = document.querySelector('#popup_details');
const popupLogin = document.querySelector('#popup_login');
const popupEdit = document.querySelector('#popup_edit');
const popupCreate = document.querySelector('#popup_create');

document.addEventListener('click', (e) =>{
    for(i = 0; i < btnMoreDetails.length + btnEdit.length; i++)
    {
        switch(e.target){
            case btnMoreDetails[i]:
                switchPopup(popupDetails);
                break;
            case btnLogin:
                switchPopup(popupLogin);
                break;
            case btnEdit[i]:
                switchPopup(popupEdit);
                break;
            case btnAddNew:
                switchPopup(popupCreate);
                break;
        }
    }
})
// Hide popup
for(i = 0; i < btnPopupClose.length; i++){
btnPopupClose[i].addEventListener('click', (e) =>{
    var popupId = e.target.closest('div[id]');
    switchPopup(popupId);
});
}
// Delete popup
for(i = 0; i < btnDelete.length; i++){
btnDelete[i].addEventListener('click', (e) =>{
    var popupId = e.target.closest('div[id]');
    switchPopup(popupId);
});
}
document.addEventListener('click', (e) =>{
    switch(e.target.id){
        case 'btn_ports':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            document.querySelector('#btn_ships').style.backgroundColor = "#fff";
            document.querySelector('#btn_ships').style.color = "#000000";
            document.querySelector('#btn_crouises').style.backgroundColor = "#fff";
            document.querySelector('#btn_crouises').style.color = "#000000";
            break;
        case 'btn_ships':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            document.querySelector('#btn_ports').style.backgroundColor = "#fff";
            document.querySelector('#btn_ports').style.color = "#000000";
            document.querySelector('#btn_crouises').style.backgroundColor = "#fff";
            document.querySelector('#btn_crouises').style.color = "#000000";
            break;
        case 'btn_crouises':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            document.querySelector('#btn_ports').style.backgroundColor = "#fff";
            document.querySelector('#btn_ports').style.color = "#000000";
            document.querySelector('#btn_ships').style.backgroundColor = "#fff";
            document.querySelector('#btn_ships').style.color = "#000000";
            break;
    }
})
function switchPopup(popupToClose){
    if(popupToClose.style.display == "flex")
        popupToClose.style.display = "none";
    else
        popupToClose.style.display = "flex";
}