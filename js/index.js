// function addPlus(){
//     const iphone = document.getElementById('iphone-number');
//     const iphoneValueElement = iphone.value;
//     const iphoneValue = parseInt(iphoneValueElement);
//     const newIphoneValue = iphoneValue+1;
//     iphone.value = newIphoneValue;
// }

function plus(item, isIncrease) {
  const num = document.getElementById(item);
  const numField = num.value;
  const previousNum = parseInt(numField);
  if (isIncrease == true) {
    var newNum = previousNum + 1;
  } else if (isIncrease == false) {
    var newNum = previousNum - 1;
  }
  if (newNum >= 0) {
    num.value = newNum;
  }
  if (item === "iphone-number") {
    calculation(newNum, "iphone-price", 1219);
  } else if (item === "cover-value") {
    calculation(newNum, "cover-price", 59);
  }
}

function calculation(newNum, item, number) {
  const subTotalValueField = document.getElementById("subtotal-value");
  

  const PriceField = document.getElementById(item);
  const PriceString = PriceField.innerText;
  const price = parseInt(PriceString);

  const sumPrice = number * newNum;

  PriceField.innerText = sumPrice;

  const iphoneField = document.getElementById("iphone-price");
  const coverField = document.getElementById("cover-price");
  const iphonePriceString = iphoneField.innerText;
  const coverPriceString = coverField.innerText;
  const iphonePrice = parseInt(iphonePriceString);
  const coverPrice = parseInt(coverPriceString);

  const subTotal = iphonePrice + coverPrice;

  subTotalValueField.innerText=subTotal;
  
  const taxField = document.getElementById("tax");
  const taxString = taxField.innerText;
  const tax = parseInt(taxString);

  const taxAmountString = (subTotal*0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString)

  console.log(taxAmount)
  taxField.innerText = taxAmount;

  const totalField = document.getElementById("total");
  

  const total = subTotal+taxAmount;

  totalField.innerText = total;
}

function btnPlus(item, value) {
  document.getElementById(item).addEventListener("click", function () {
    plus(value, true);
  });
}

function btnMinus(item, value) {
  document.getElementById(item).addEventListener("click", function () {
    plus(value, false);
  });
}

btnPlus("iphone-plus", "iphone-number");
btnMinus("iphone-minus", "iphone-number");

btnPlus("cover-plus", "cover-value");
btnMinus("cover-minus", "cover-value");
