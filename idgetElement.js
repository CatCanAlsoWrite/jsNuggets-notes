//17.getElement
const p1= document.querySelector('.idgetElement1'); 
console.log(p1); //<p class="idgetElement1">hi</p> `p.idgetElement1 `|| null `if selector doesn't exist`
const p2= document.querySelectorAll('.idgetElement2'); 
console.log(p2); //[<p class="idgetElement2">ho</p>, <p class="idgetElement2">ha</p>] || [] `if selector doesn't exist`
    //add function
const getData1= (selector)=>{
    const d= document.querySelector(selector);
    if (d) return d;
    throw new Error(`double check selector: '${selector}'`)
};
console.log(getData1('.idgetElement1')); //<p class="idgetElement1">hi</p>
console.log(getData1('.idgetElement3')); //double check selector: '.idgetElement3'

const getData2= (selector, isList)=>{
    if (isList){
        const a= [...document.querySelectorAll(selector)];
        if (a.length>= 1) return d;
        throw new Error(`double check selector: '${selector}'`)
    }
    const d= document.querySelector(selector);
    if (d) return d;
    throw new Error(`double check selector: '${selector}'`)
};
console.log(getData2('.idgetElement1')); //<p class="idgetElement1">hi</p>
console.log(getData2('.idgetElement3')); //double check selector: '.idgetElement3'
console.log(getData2('.idgetElement2', true)); //[<p class="idgetElement2">ho</p>, <p class="idgetElement2">ha</p>] 
console.log(getData2('.idgetElement4', true)); //double check selector: '.idgetElement4'
        //short the code
const getData3=(selector, isList)=>{
    const t= isList 
        ? [...document.querySelectorAll(selector)] 
        : document.querySelector(selector)
    if((isList&& t.length>= 1)|| (!isList&& t)) return t;
    throw new Error(`double check selector: '${selector}'`)
}
console.log(getData3('.idgetElement1')); //<p class="idgetElement1">hi</p>
console.log(getData3('.idgetElement3')); //double check selector: '.idgetElement3'
console.log(getData3('.idgetElement2', true)); //[<p class="idgetElement2">ho</p>, <p class="idgetElement2">ha</p>] 
console.log(getData3('.idgetElement4', true)); //double check selector: '.idgetElement4'