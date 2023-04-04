//14.width&height
console.log('width', window.innerWidth); //width 616 `width as the page shows`
console.log('height', window.innerHeight); //height 587 `height as the page shows`

const idData= document.querySelector('.backgroundImage');
idData.addEventListener('click',()=>{
    const d= idData.getBoundingClientRect()
    console.log(d);
})