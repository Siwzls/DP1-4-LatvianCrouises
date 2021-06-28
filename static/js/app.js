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
            // case btnLogin:
            //     if (popupLogin != null)
            //         switchPopup(popupLogin);
            //     break;
            case btnEdit[i]:
                if (popupEdit != null)
                    switchPopup(popupEdit);
                break;
            // case btnAddNew:
            //     if (popupCreate != null)
            //         switchPopup(popupCreate);
            //     console.log(popupCreate.style.display)
            //     break;
        }
        if(e.target == btnLogin){
            if (popupLogin != null)
                   switchPopup(popupLogin);
            console.log(popupCreate.style.display)
        }
        else if(e.target == btnAddNew){
            if (popupCreate != null)
                switchPopup(popupCreate);
            console.log(popupCreate.style.display)
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
    const shipSelect = document.getElementById("shipSelect");
    const shipText = document.getElementById("shipText");
    const shipTitle = document.getElementById("shipTitle");
    const price = document.getElementsByClassName("price");
    const fromTo = document.getElementsByClassName("fromTo");

    console.log(fromTo.length);

    let index = selectType.selectedIndex;
    let option = selectType[index].value;

    for(i in price && fromTo && departDate){
        switch(option){
            case "Port":
                price[i].style.display = "block";
                shipTitle.style.display = "none";
                shipText.style.display = "none";
                shipSelect.style.display = "none";
                departDate[i].style.display = "none";
                fromTo[0].style.display = "none"; 
                fromTo[1].style.display = "none"; 
                fromTo[2].style.display = "none"; 
                fromTo[3].style.display = "none"; 
                break;
            case "Ship":
                shipText.style.display = "block";
                shipTitle.style.display = "block";
                shipSelect.style.display = "none";
                price[i].style.display = "none";
                departDate[i].style.display = "none";
                fromTo[0].style.display = "none"; 
                fromTo[1].style.display = "none"; 
                fromTo[2].style.display = "none"; 
                fromTo[3].style.display = "none"; 
                break;
            case "Cruise":
                price[i].style.display = "block";
                shipSelect.style.display = "block";
                shipTitle.style.display = "block";
                departDate[i].style.display = "block";
                fromTo[0].style.display = "block"; 
                fromTo[1].style.display = "block"; 
                fromTo[2].style.display = "block"; 
                fromTo[3].style.display = "block"; 
                shipText.style.display = "none";
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
}