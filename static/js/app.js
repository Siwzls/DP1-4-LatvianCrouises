const btnMoreDetails = document.querySelectorAll('.btn_details');
const btnPopupClose = document.querySelectorAll('.btn_popupClose');
const popupDetails = document.querySelector('#popup_details');

// Shows details popup
for(i = 0; i < btnMoreDetails.length; i++){
    btnMoreDetails[i].addEventListener('click', (e) =>{
        popupDetails.style.display = "flex";
    });
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