"use strict";


window.onload = function () {
    const payAsYouGo = document.getElementById("payAsYouGo");
    payAsYouGo.onclick = optionOneBtn;
    const allInclusive = document.getElementById("allInclusive");
    allInclusive.onclick = optionTwoBtn;
}

function optionOneBtn() {
    let firstOption = document.getElementById("payAsYouGo");
    let resturantsForPayAsYouGo = document.getElementById("option1");
    if (firstOption.checked) {
        resturantsForPayAsYouGo.style.display = "block";
    } else {
        resturantsForPayAsYouGo.style.display = "none";
    }
    optionTwoBtn()
}

function optionTwoBtn() {
    let secondOption = document.getElementById("allInclusive")
    let restaurantsForAllInclusive = document.getElementById("option2");
    if (secondOption.checked) {
        restaurantsForAllInclusive.style.display = "block";
    } else {
        restaurantsForAllInclusive.style.display = "none";
    }
    optionOneBtn()
}