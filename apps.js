const selectSeactEl=document.getElementById("select-seat");
const totalBooked=document.getElementById('total-booked');
const totalPriceEl=document.getElementById('total-price');
const couponInputEl=document.getElementById('coupon-field');
const couponBtnEl=document.getElementById('coupon-btn');
const defaulttextEl=document.getElementById('default-text');
const grandTotalEl=document.getElementById('grand-total');


// document.getElementById('next-page').addEventListener('click',function(){
//     window.location.href='/index1.html';
// })


let selectedSeat = [];
let totalPrice=0;


function handleSelect(event){
    const value =event.innerText;
    if(selectedSeat.includes(value)){
        return alert("Seat Already Booked");
    }else if(selectedSeat.length<4){

        event.classList.add('bg-lime-500');
        event.classList.add('text-white');
        selectedSeat.push(event.innerText);
        totalBooked.innerText=selectedSeat.length;

        defaulttextEl.innerText='';
    
        selectSeactEl.innerHTML += `<li class="flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>`;
    
        totalPrice += 550;
        totalPriceEl.innerText=totalPrice.toFixed(2);
    
        if(selectedSeat.length>3){
            couponInputEl.removeAttribute('disabled');
            couponBtnEl.removeAttribute('disabled');
        }
    }else{
        alert("Maximum seat Booked");
    }

    document.getElementById('coupon-btn').addEventListener('click',function(){
        const copounInputvalue=couponInputEl.value;
        let couponSave=0;
        if(copounInputvalue !== "New50" && copounInputvalue !== "Couple 20"){
            alert('Your Provided coupon is not valid');
            return;
        }

        if(copounInputvalue === "New50"){
            couponSave= totalPrice * .15 ;

        }else if(copounInputvalue === "Couple 20" ){
            couponSave=totalPrice * .20 ;
        }

        const grandTotalval=totalPrice - couponSave;
        grandTotalEl.innerText=grandTotalval.toFixed(2);
    })

   

}