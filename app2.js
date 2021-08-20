function updateNumber(product,price,incresing){
    const input = document.getElementById(product+'-number');
   const  inputText= input.value;
     inputNumber = parseInt(inputText);
     if(incresing==true){
       inputNumber = inputNumber + 1;
     }else if(inputNumber >0){
        inputNumber = inputNumber - 1;
     }
     input.value= inputNumber;
     const previousTotal= document.getElementById(  product+'-total');
     previousTotal.innerText = inputNumber * price;
     calculator()
}
 function getInput(product){
    const productInput = document.getElementById(product+'-total');
    const productTotal = parseInt(productInput.innerText);
    return productTotal;
}
function calculator(){
    const phoneTotal = getInput('phone') ;
    const caseTotal = getInput('case')  ;
    const productTotal = phoneTotal + caseTotal;
    const subTotal =document.getElementById('sub-total');
    subTotal.innerText= productTotal ;
    const textTotal =document.getElementById('tax-amount') ;
    textTotal.innerText = productTotal/10;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(subTotal.innerText) +parseFloat( textTotal.innerText);
 }
/* function getTotal(){
    const phoneTotoal = document.getElementById( 'phone-total');
    const phoneTotoalText= phoneTotoal.innerText
    const phoneTotoalNumber = parseInt(phoneTotoalText);
    const caseTotoal = document.getElementById( 'case-total');
    const caseTotoalText=caseTotoal.innerText
    const caseTotoalNumber = parseInt(caseTotoalText);
    const subTotal= phoneTotoalNumber +caseTotoalNumber;
    return subTotal
}  

  function calculator( ){
    const subTotal =document.getElementById('sub-total');
    subTotal.innerText= getTotal() ;
    const textTotal =document.getElementById('tax-amount') ;
    textTotal.innerText =getTotal()/10;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(subTotal.innerText) +parseFloat( textTotal.innerText);
}  */
document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber('phone',1219,false)
})
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',59,true)
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',59,false)
})

 