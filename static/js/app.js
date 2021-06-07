const btnMoreDetails = document.querySelectorAll('.btn_details');
const btnPopupClose = document.querySelector('#btn_popupClose');
const popupDetails = document.querySelector('#popup_details');

for(i = 0; i < btnMoreDetails.length; i++)
{
    btnMoreDetails[i].addEventListener('click', (e) =>{
        popupDetails.style.display = "flex";
    });
}

btnPopupClose.addEventListener('click', (e) =>{
    switchPopup(popupDetails);
})

function switchPopup(popupToClose){
    if(popupToClose.style.display = "flex")
        popupToClose.style.display = "none";
    else if(popupToClose.style.display = "none")
        popupToClose.style.display = "flex"
}