//12.async& await
//(1)async a function
const prom1= async()=> {
    return 'hi' //`async always returns a promise`
}
console.log(prom1()); //Promise {<fulfilled>: 'hi'} `prom1 is a function, don't forget the '()'`
//(2)await the promise
async function prom2(){
    return await prom1();     
}
console.log(prom2()); //Promise {<pending>}
    //await waits till promise is settled
async function prom3(){
    const result= await prom1(); 
    console.log(result); 
    console.log('ho'); 
}
prom3(); //①hi ②ho `await leads to PromiseResult`
//(3)can use async&await to short Promise()
const data1=[
    {id:1, key1: 'v1'},
    {id:2, key1: 'v2'},
    {id:3, key1: 'v3'}
]
const data2=[
    {dataId:1, key2: ['v4']},
    {dataId:2, key2: ['v5','V6']},
    {dataId:3, key2: ['v7','V8']}
]
function findKey1(Key1){
    const i= data1.find((I)=>I.key1=== Key1)
    return new Promise((resolve, reject) => {
        i
        ? resolve(i)
        : reject(`can't find: '${Key1}'`)
    })
}
function getKey2(DataId){
    const d= data2.find((D)=>D.dataId=== DataId)
    return new Promise((resolve, reject) => {
        d
        ? resolve(d.key2)
        : reject(`can't find: '${DataId}'`)
    })
}
    //vs use Promise() only
console.log(findKey1('v1')); //Promise { { id: 1, key1: 'v1' } }
findKey1('v1')
    .then((t)=>console.log(t)) //{ id: 1, key1: 'v1' } `print PromiseResult`
    .catch((c)=>console.log(c)); 
findKey1('v1')
    .then((t)=>getKey2(t.id)) //`print another function`
    .then((T)=>console.log(T)) //[ 'v4' ] `print PromiseResult from another function`
    .catch((c)=>console.log(c)); 
    //add async& await
const straightKey2= async()=>{
    const i= await findKey1('v1');
    console.log(i);
}
straightKey2(); //{ id: 1, key1: 'v1' }

const straightkey2= async()=>{
    const i= await findKey1('v5');
    if (i){ 
        const d= await getKey2(i.id);
        console.log(d);
    }else{
        console.log('error')
    };
}
straightkey2(); //[ 'v4' ] ||Error `must use try()&catch() to print rejected message`
const straightkey2e= async()=>{
    try {
        const i= await findKey1('v5');
        const d= await getKey2(i.id); //
        console.log(d);
    } catch (e) {
        console.log(e); //[ 'v4' ] ||can't find: 'v5'
    }
}
straightkey2e(); 

/*async must be present, always returns a promise
    await waits till promise is settled (await must be used after async) 
*/