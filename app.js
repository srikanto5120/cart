function updateProductNumber(product,price, increasing){
    const productInput = document.getElementById(product+'-number');
    let productNumber =productInput.value ;
    if(increasing==true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber >0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;
    claculate();
}
function getInput(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function claculate (){
    const phoneTotal = getInput('phone') *1219;
    const caseTotal = getInput('case')  * 59;
    const productTotal = phoneTotal + caseTotal;
    const subtotal = document.getElementById('sub-total');
     subtotal.innerText = productTotal;
     const tax = document.getElementById('tax-amount');
      const textAmount = tax.innerText = productTotal /10;
     const total = document.getElementById('total-price');
     total.innerText = productTotal + textAmount;}
// phone handle event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false)
})
document.getElementById('case-plus').addEventListener('click',function(){
   
  updateProductNumber('case',59,true);
})
document.getElementById('case-minus').addEventListener('click', function(){
     updateProductNumber('case',59,false)
})