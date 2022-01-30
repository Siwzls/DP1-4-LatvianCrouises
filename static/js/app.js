// Buttons
const btnMoreDetails = document.querySelectorAll('.btn_details');
const btnEdit = document.querySelectorAll('.btn_edit');
const btnLogin = document.querySelector('#login');
const btnPopupClose = document.querySelectorAll('.btn_popupClose');
const btnAddNew = document.querySelector('#btn_addNew');

//Popups
const popupDetails = document.querySelector('#popup_details');
const popupLogin = document.querySelector('#popup_login');
const popupEdit = document.querySelector('#popup_edit');
const popupCreate = document.querySelector('#popup_create');

document.addEventListener('click', (e) =>{
    for(i = 0; 
        i < btnMoreDetails.length + btnEdit.length; 
        i++)
    {
        switch(e.target){
            case btnMoreDetails[i]:
                switchPopup(popupDetails, e.target.className);
                break;
            case btnLogin:
                switchPopup(popupLogin, e.target.className);
                break;
            case btnEdit[i]:
                switchPopup(popupEdit, e.target.className);
                break;
            case btnAddNew:
                switchPopup(popupCreate, e.target.className);
                break;
        }
    }
})
// Hide popup
for(i = 0; i < btnPopupClose.length; i++){
btnPopupClose[i].addEventListener('click', (e) =>{
    var popupId = e.target.parentNode.parentNode;
    switchPopup(popupId, e.target.className);
});
}
document.addEventListener('click', (e) =>{
    const btnShips = document.querySelector('#btn_ships')
    const btnCruises = document.querySelector('#btn_crouises');
    const btnPorts = document.querySelector('#btn_ports');

    const cruiseOffers = document.getElementsByClassName("infoBlocks__offers--cruise");
    const shipOffers = document.getElementsByClassName("infoBlocks__offers--ship");
    const portsOffers = document.getElementsByClassName("infoBlocks__offers--port");

    //let indexLength = cruiseOffers.length + shipOffers.length + portsOffers.length;

    switch(e.target.id){
        case 'btn_ports':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            btnShips.style.backgroundColor = "#fff";
            btnShips.style.color = "#000000";
            btnCruises.style.backgroundColor = "#fff";
            btnCruises.style.color = "#000000";


            for(el of cruiseOffers) el.style.display = "none";
            for(el of shipOffers) el.style.display = "none";
            for(el of portsOffers) el.style.display = "block";
            break;
        case 'btn_ships':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            btnPorts.style.backgroundColor = "#fff";
            btnPorts.style.color = "#000000";
            btnCruises.style.backgroundColor = "#fff";
            btnCruises.style.color = "#000000";

            for(el of cruiseOffers) el.style.display = "none";
            for(el of shipOffers) el.style.display = "block";
            for(el of portsOffers) el.style.display = "none";
            break;
        case 'btn_crouises':
            e.target.style.backgroundColor = "#FF8A00";
            e.target.style.color = "#fff";
            btnPorts.style.backgroundColor = "#fff";
            btnPorts.style.color = "#000000";
            btnShips.style.backgroundColor = "#fff";
            btnShips.style.color = "#000000";

            for(el of cruiseOffers) el.style.display = "block";
            for(el of shipOffers) el.style.display = "none";
            for(el of portsOffers) el.style.display = "none";
            break;
    }
})
const selectType = document.getElementById("selectType");
selectType.onchange = function () {
    const portName = document.getElementById("portNameText");
    const departDate = document.getElementById("departText");
    const shipSelect = document.getElementById("shipOption");
    const shipText = document.getElementById("shipInput");
    const shipCapacity = document.getElementById("shipCap");
    const price = document.getElementById("priceText");
    const from = document.getElementById("fromOption");
    const to = document.getElementById("toOption");

    let index = selectType.selectedIndex;
    let option = selectType[index].value;
        switch(option){
            case "Port":
                portName.style.display = "flex";
                price.style.display = "none";
                shipText.style.display = "none";
                shipCapacity.style.display = "none";
                shipSelect.style.display = "none";
                departDate.style.display = "none";
                from.style.display = "none";
                to.style.display = "none";
                break;
            case "Ship":
                shipText.style.display = "flex";
                shipCapacity.style.display = "flex";
                portName.style.display = "none";
                shipSelect.style.display = "none";
                departDate.style.display = "none";
                from.style.display = "none";
                to.style.display = "none";
                price.style.display = "none";
                break;
            case "Cruise":
                price.style.display = "flex";
                shipSelect.style.display = "flex";
                departDate.style.display = "flex";
                from.style.display = "flex";
                to.style.display = "flex";
                portName.style.display = "none";
                shipText.style.display = "none";
                shipCapacity.style.display = "none";
                break;
        }
}
function switchPopup(popupToClose, btnClass){
    let index = btnClass.indexOf("btn_open");
    if(popupToClose.style.display == "flex" && index == -1) popupToClose.style.display = "none";
    else popupToClose.style.display = "flex";
    console.log(popupToClose.style.display);
}