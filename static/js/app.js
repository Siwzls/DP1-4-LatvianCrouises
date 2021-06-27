// Buttons
const btnMoreDetails = document.querySelectorAll('.btn_details');
const btnEdit = document.querySelectorAll('.btn_edit');
const btnLogin = document.querySelector('#login');
const btnPopupClose = document.querySelectorAll('.btn_popupClose');
const btnAddNew = document.querySelector('#btn_addNew');
const btnDelete = document.querySelectorAll('.btn_popupDelete');

const singleBtns = [btnLogin, btnAddNew];

//Popups
const popupDetails = document.querySelector('#popup_details');
const popupLogin = document.querySelector('#popup_login');
const popupEdit = document.querySelector('#popup_edit');
const popupCreate = document.querySelector('#popup_create');

document.addEventListener('click', (e) =>{
    for(i = 0; 
        i < btnMoreDetails.length + btnEdit.length + singleBtns.length; 
        i++)
    {
        switch(e.target){
            case btnMoreDetails[i]:
                if (popupDetails != null)
                    switchPopup(popupDetails);
                break;
            case singleBtns[i]:
                if (popupLogin != null)
                    switchPopup(popupLogin);
                break;
            case btnEdit[i]:
                if (popupEdit != null)
                    switchPopup(popupEdit);
                break;
            case btnAddNew:
                if (popupCreate != null)
                    switchPopup(popupCreate);
                break;
        }
    }
})
// Hide popup
for(i = 0; i < btnPopupClose.length; i++){
btnPopupClose[i].addEventListener('click', (e) =>{
    var popupId = e.target.parentNode.parentNode;
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
    const btnShips = document.querySelector('#btn_ships')
    const btnCruises = document.querySelector('#btn_crouises');
    const btnPorts = document.querySelector('#btn_ports');

    switch(e.target.id){
        case 'btn_ports':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            btnShips.style.backgroundColor = "#fff";
            btnShips.style.color = "#000000";
            btnCruises.style.backgroundColor = "#fff";
            btnCruises.style.color = "#000000";
            break;
        case 'btn_ships':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            btnPorts.style.backgroundColor = "#fff";
            btnPorts.style.color = "#000000";
            btnCruises.style.backgroundColor = "#fff";
            btnCruises.style.color = "#000000";
            break;
        case 'btn_crouises':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            btnPorts.style.backgroundColor = "#fff";
            btnPorts.style.color = "#000000";
            btnShips.style.backgroundColor = "#fff";
            btnShips.style.color = "#000000";
            break;
    }
})
const selectType = document.getElementById("selectType");
selectType.onchange = function () {
    const departDate = document.getElementsByClassName("departDate");
    const ship = document.getElementsByClassName("ship");
    const price = document.getElementsByClassName("price");

    let index = selectType.selectedIndex;
    let option = selectType[index].value;

    for(i in price && ship && departDate){
        switch(option){
            case "Port":
                price[i].style.display = "block";
                ship[i].style.display = "none";
                departDate[i].style.display = "none";
                break;
            case "Ship":
                ship[i].style.display = "block";
                price[i].style.display = "none";
                departDate[i].style.display = "none";
                break;
            case "Cruise":
                price[i].style.display = "block";
                ship[i].style.display = "block";
                departDate[i].style.display = "block";
        }
    }
}
function switchPopup(popupToClose){
    if(popupToClose.style.display == "flex"){
        popupToClose.style.display = "none";
    }
    else{
        popupToClose.style.display = "flex";
    }
    console.log(popupToClose.style.display);
}