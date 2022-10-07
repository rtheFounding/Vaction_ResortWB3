"use strict";


window.onload = function () {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateTotal;
}

function calculateTotal() {
    let extraPerDay = 0;
    let tollTag = document.getElementById("tollTag").checked;
    if (tollTag == true) {
        extraPerDay += 3.95;
    }
    let gps = document.getElementById("gps").checked;
    if (gps == true) {
        extraPerDay += 4.95;
    }
    let roadside = document.getElementById("roadside").checked;
    if (roadside == true) {
        extraPerDay += 2.95;
    }

    let selectedOption = document.querySelector("input[name='checkone']:checked");
    let subcharge = 0;
    if (selectedOption.value == "No") {
        subcharge = 0;
    } else { 
        subcharge = 29.99 * 0.3;
    }
    const numOfDays = document.getElementById("numOfDays");
    let numOf = numOfDays.value;
    const rentalAmount = document.getElementById("rentalAmount");
    let rentalCost = numOf * 29.99;
    rentalAmount.value = rentalCost;
    let currentOption = extraPerDay * numOf;
    const userOptions = document.getElementById("userOptions")
    userOptions.value = currentOption.toFixed(2);
    let currentAgeCharge = subcharge;
    const userChecked = document.getElementById("userChecked")
    userChecked.value = currentAgeCharge.toFixed(2);
    let totalDue = rentalCost + currentOption + currentAgeCharge;
    const totalAmount = document.getElementById("totalAmount")
    totalAmount.value = "$" + totalDue.toFixed(2);
}