//11.Promise()
//like in a restuaruant, you get a reciept/promise after ordering/function;
    //it'll take time waiting/pending
const prom1= new Promise((resolve,reject)=>{});
console.log(prom1); //Promise { <pending> }
    //then you get fulfilled, which brings you food/data 
const prom2= new Promise((resolve,reject)=>{
    resolve('hi')
});
console.log(prom2); //Promise {<fulfilled>: 'hi'} `PromiseState and PromiseResult)`
prom2.then((d)=>console.log(d)); //hi `use '.then()' to print PromiseResult`
    //or get rejected, which leads to refund/error
        //once get rejected, you can't go back to wait
const prom3= new Promise((resolve,reject)=>{
    reject('bye')
});
console.log(prom3); //Promise {<rejected>: 'bye'}
prom3.then((d)=>console.log(d)).catch((a)=>console.log(a)); //bye
    //add callback function
        //always resolve, if not, the promise won't pending again (loop stoped)
const data=2;
const prom4= new Promise((resolve,reject)=>{
    const rand= Math.floor(Math.random()*3); //`Math.floor(1.5)= 1 vs Math.ceil(1.5)= 2`
    console.log(rand); //1 ||2 ||3
    rand=== data ? resolve('right') : reject('wrong')
});
console.log(prom4); //Promise { <rejected> 'wrong' } || Promise { 'right' }
prom4.then((d)=>console.log(d)).catch((a)=>console.log(a)); //wrong ||right 

