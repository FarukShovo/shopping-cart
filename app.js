function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {

        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;

    //update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //calculate total
    calcaluteTotal();
}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calcaluteTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    // update on html

    document.getElementById('sub-total').innerText = subTotal;
    //set tax
    const tax = subTotal / 10;
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = subTotal + tax;
    document.getElementById('total-price').innerText = grandTotal; 0.


}

//update case 
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

})

//update phones 
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true);

})

document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, false);

})