/* const originalPrice = 100;
const rebate = 15; */

function priceRebate(price, rebate) {
    const priceRebatePercent = 100 - rebate;
    return ((price * priceRebatePercent) / 100);
}

function onClickButtonPriceRebate() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputRebate = document.getElementById("inputRebate");
    const rebateValue = inputRebate.value;

    const rebatePrice = priceRebate(priceValue, rebateValue);

    const resultP = document.getElementById("resultP");

    resultP.innerText = `El precio con descuento es de: $${rebatePrice}.`;

}
