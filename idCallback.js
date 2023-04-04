//10.callback function
//(1)function name as parameter
function dataReverse(d){
    console.log(d.split('').reverse().join(''));
}
function dataHandle(para, func) {
    const paraFull= `${para} hi`
    func(paraFull) 
} 
dataHandle('ho', dataReverse); //ih oh 
//dataHandle('ho', dataReverse()); //TypeError

//(2)function as parameter
dataHandle('ha', function(t){console.log(t);}); //ha hi `t= paraFull`
    //short to one line
dataHandle('hu',(i)=>console.log(i)); //hu hi `t= paraFull`

//(3)function as parameter to a built-in function
const btn1= document.querySelector('.idCallback1');
btn1.addEventListener('mouseover',()=>btn1.style.color= 'red'); //he `when clicked`
    //chain function
const btn2= document.querySelector('.idCallback2');
btn2.addEventListener('click',()=>{
    setTimeout(()=>{
        btn2.style.color= 'blue'
    },1000) //`button turned red after 1s`
})
//(4)callback hell (use Promise() to avoid)
const btn3= document.querySelector('.idCallback3');
btn3.addEventListener('click',()=>{
    setTimeout(()=>{
        btn3.style.color= 'white'
        setTimeout(()=>{
            btn3.style.color= 'green'
        },1000)
    },1000) //`button turned blue after 1s, then green after another 1s`
})
//(5)use Promise() to solve callback hell (11.Promise())
const btn4= document.querySelector('.idCallback4');
btn4.addEventListener('click',()=>{
    changeColor(1000, '.idCallback4', 'white')
        .then(()=>changeColor(1000, '.idCallback4', 'green'))
        .catch((i)=>console.log(i))
})

function changeColor(time, selector, color){
    const sele= document.querySelector(selector)
    return new Promise((resolve,reject)=>{ 
        sele
        ? setTimeout(()=>{
            sele.style.color= color
            resolve()
        },time)
        : reject(`the selector donnot match '${selector}'`)
        })   
}





