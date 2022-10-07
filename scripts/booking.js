"use strict";


window.onload = function () {
    const calculateOrder = document.getElementById("calculateOrder");
    //calculateOrder.onclick = calculateTotal;
    calculateOrder.addEventListener("click", calculateTotal);
}

function calculateTotal() {
    if (!isValid()) {
        return; // do nothing
    }
    const pickUpDate = document.getElementById("pickUpDate").value;
    let priceRate = getRate(pickUpDate);
    const numOfDays = document.getElementById("numOfDays");
    let numOf = numOfDays.value;
    let numOfDayPrice = numOf * priceRate;
    const originalPrice = document.getElementById("originalPrice");
    originalPrice.value = numOfDayPrice.toFixed(2);

    let discountCharges = 0;
    let discount1 = document.getElementById("discount1").checked;
    if (discount1 == true) {
        discountCharges = 0;
    }
    let discount2 = document.getElementById("discount2").checked;
    if (discount2 == true) {
        discountCharges = 10 / 100;
    }
    let discount3 = document.getElementById("discount3").checked;
    if (discount3 == true) {
        discountCharges = 20 / 100;;
    }

    let discountPercentage = numOfDayPrice * discountCharges;
    let discountCheckout = document.getElementById("discountCheckout");
    discountCheckout.value = discountPercentage.toFixed(2);
    let priceForRoomWithDiscount = numOfDayPrice - (numOfDayPrice * discountCharges);
    let discountOnRoom = document.getElementById("discountOnRoom");
    discountOnRoom.value = priceForRoomWithDiscount.toFixed(2);

    let taxAmount = numOfDayPrice * (12 / 100);
    const tax = document.getElementById("tax");
    tax.value = taxAmount.toFixed(2);
    let totalDue = priceForRoomWithDiscount + taxAmount;
    const totalAmount = document.getElementById("totalAmount")
    totalAmount.value = "$" + totalDue.toFixed(2);
}

function getRate(pickUpDate) {
    let userDate = new Date(pickUpDate);
    let y = userDate.getFullYear();
    let rangeStart = new Date("June 1 " + y);
    let rangeEnd = new Date("August 31 " + y);
    let Queen = document.getElementById("Queen").checked;
    let King = document.getElementById("King").checked;
    let twoBed = document.getElementById("twoBed").checked;

    let priceRate = 0;
    if (userDate >= rangeStart && userDate <= rangeEnd && Queen == true) {
        priceRate = 250;
    } else if (userDate >= rangeStart && userDate <= rangeEnd && King == true) {
        priceRate = 250;
    } else if (userDate >= rangeStart && userDate <= rangeEnd && twoBed == true) {
        priceRate = 350;
    } else if (userDate < rangeStart || userDate > rangeEnd && Queen == true) {
        priceRate = 150;
    } else if (userDate < rangeStart || userDate > rangeEnd && King == true) {
        priceRate = 150;
    } else if (userDate < rangeStart || userDate > rangeEnd && twoBed == true) {
        priceRate = 210;
    } else {
        priceRate = 0;
    }
    return priceRate;
}

function isValid() {
    let amount = 0;
    let Queen = document.getElementById("Queen").checked;
    let King = document.getElementById("King").checked;
    let twoBed = document.getElementById("twoBed").checked;
    const numOfAdults = document.getElementById("numOfAdults");
    let numberOfAdults = numOfAdults.value;
    const numOfChildren = document.getElementById("numOfChildren");
    let numberOfChildren = numOfChildren.value;
    let totalGuest = Number(numberOfAdults) + Number(numberOfChildren);

    if(Queen) {
        amount = 5
    } else if (King) {
        amount = 2;
    } else if (twoBed) {
        amount = 6;
    }

    if(totalGuest > amount) {
        document.getElementById("message").style.display = "block"; //show
        return false;
    }
    document.getElementById("message").style.display = "none"; //disappear
    return true;
}