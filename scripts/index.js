function scrollWin() {
    window.scrollTo(0, 1400);

}

document.addEventListener('DOMContentLoaded',function(){
    const maxTickets = 4;
    let selectedSeats = [];



function update(){
    const seatsLeft = maxTickets - selectedSeats.length;
    document.getElementsByClassName('.kbd').innerText = seatsLeft + 'seats-left';


let totalPrice = selectedSeats.length * 550;
const couponCode = document.getElementById('coupon-card').value;
if (couponCode === 'NEW15') {
    totalPrice *= 0.85; 
} else if (couponCode === 'Couple20') {
    totalPrice *= 0.8; 
}
document.getElementById('total-Price').innerText = 'BDT' + totalPrice.toFixed(2);
const allSeats = document.querySelectorAll('.kbd');
        allSeats.forEach(seat => {
            seat.classList.remove('selected');
            if (selectedSeats.includes(seat.id)) {
                seat.classList.add('selected');
            }
        });
    }

function  selectedSeat(seatId){
    if(selectedSeats.includes(seatId)){
        selectedSeats = selectedSeats.filter(id=> id !== seatId);

    }
    else if(selectedSeats.length < maxTickets){
        selectedSeats.push(seatId);

    }
    else{
        alert('You can only buy up to 4 tickets');
    }
    update();
}
const allSeats = document.querySelectorAll('.kbd');
    allSeats.forEach(seat => {
        seat.addEventListener('click', function () {
            seat.classList.add('bg-[#1DD100]')
            selectedSeat(seat.id);
        });
    });

const seats = document.querySelectorAll(".kbd");

seats.forEach(seat => {
    seat.addEventListener('click',function(){
        selectedSeat(seat.id);
    })
});

document.getElementById('coupon-card').addEventListener('click', function () {
    update();
});
});
