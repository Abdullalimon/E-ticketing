




// document.addEventListener("DOMContentLoaded", function () {
//     const buyButton = document.querySelector("#buyButton");
//     const seats = document.querySelectorAll(".kbd")
   
//     const totalPriceElement = document.querySelector("#totalPrice");
//     const couponInput = document.querySelector("coupon-Input");
//     const applyCouponButton = document.querySelector("#applyCouponButton");
//     const seatsLeftElement = document.querySelector("#seatsLeft");
//     const maxTickets = 4;
//     let selectedTickets = 0;
//     let totalPrice = 0;
//     let discount = 0;


//    
// }

//     // Function to update total price
//     function updateTotalPrice() {
//         totalPrice = selectedTickets * 550; // Assuming each ticket costs 550 BDT
//         totalPriceElement.textContent = totalPrice - discount + " BDT";
//     }

//     // Function to apply coupon code
//     applyCouponButton.addEventListener("click", function () {
//         const couponCode = couponInput.value;
//         // Implement your coupon code logic here
//         if (couponCode === "NEW15") {
//             discount = totalPrice * 0.15; // 15% discount
//             updateTotalPrice();
//         }
//     });

//     // Function to update seats left count
//     function updateSeatsLeft() {
//         seatsLeftElement.textContent = 40 - selectedTickets;
//     }

//     // Event listener for seat selection
//     seatButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             if (selectedTickets < maxTickets) {
//                 button.classList.toggle("selected");
//                 if (button.classList.contains("selected")) {
//                     selectedTickets++;
//                 } else {
//                     selectedTickets--;
//                 }
//                 updateSeatsLeft();
//                 updateTotalPrice();
//             } else {
//                 alert("You can only buy a maximum of 4 tickets.");
//             }
//         });
//     });

//     // Event listener for buy button
//     buyButton.addEventListener("click", function () {
//         alert("You have successfully purchased " + selectedTickets + " tickets.");
//         // Reset selected tickets and update seats left and total price after purchase
//         selectedTickets = 0;
//         updateSeatsLeft();
//         updateTotalPrice();
//     });

// });
