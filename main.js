const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');
const hexCopyButton=document.querySelector('.hex-copy-color')
const rgbCopyButton=document.querySelector('.rgb-copy-color')

// hex color generator

hexBtn.addEventListener('click',()=>{
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput  = "";

    for(let i=0,charsetLength = characterSet.length;i<6; ++i){
        hexColorOutput += characterSet.charAt(Math.floor(Math.random()*charsetLength))
    }
    hexColorValue.textContent = `${hexColorOutput}`;
    hexColorContainer.style.backgroundColor =`#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`;
})

//rgb color generator

const rgbButton =document.querySelector('.rgb-button');
const rgbColorContainer= document.querySelector('.rgb-color-container')
const rgbColorValue = document.querySelector('.rgb-color-value') 

const getRedInputRange = document.querySelector('#red')
const getGreenInputRange = document.querySelector('#Green')
const getBlueInputRange = document.querySelector('#Blue')

rgbButton.addEventListener('click' , ()=>{
    let extractRedValue= getRedInputRange.value;
    let extractGreenValue= getGreenInputRange.value;
    let extractBlueValue= getBlueInputRange.value;
    // console.log(extractBlueValue,extractGreenValue,extractRedValue);

    rgbColorValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbColorContainer.style.backgroundColor=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbButton.style.color=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
})

function copyHexColorToClipboard(){
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert('hex color is copied in clipboard')
}
hexCopyButton.addEventListener("click",copyHexColorToClipboard);
function copyRgbColorToClipboard(){
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert('Rgb color copied to clipboard');
}
rgbCopyButton.addEventListener('click',copyRgbColorToClipboard)