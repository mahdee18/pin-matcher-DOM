function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
function getPin() {
    const pin = generatePin()
    const pinString = pin + ''
    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin()
    }
}
document.getElementById('btn-generate').addEventListener('click',function(){
    const code = getPin()
    
    //Display Pin
    const displayPin = document.getElementById('display-pin')
    displayPin.value = code;
})
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number')
    const previousTypedNumber = typedNumber.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumber.value= '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('')
            typedNumber.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber+number
        typedNumber.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin')
    const currentPin = displayPin.value;

    const typedPin = document.getElementById('typed-number')
    const typedNumber = typedPin.value;
    typedPin.value = '';

    const pinSuccess = document.getElementById('pin-success')
    const pinFailed = document.getElementById('pin-failed')
    
    if(typedNumber === currentPin){
        pinSuccess.style.visibility = 'visible'
        pinFailed.style.visibility = 'hidden'
    }
    else{
        pinSuccess.style.visibility = 'hidden'
        pinFailed.style.visibility = 'visible'
    }
})