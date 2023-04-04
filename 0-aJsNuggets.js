/*1.map()
const data=[
    {key1:'v1',key2:'v2',key3:'v3'},
    {key1:'v4',key2:'v5',key3:'v6'},
    {key1:'v7',key2:'v8',key3:'v9'}
]

//(1)before es6: const keys2= data.map(function(){})
const keys1= data.map(()=>{});
console.log(keys1); //[undefined,undefined,undefined]

//(2)can set a parameter
const keys2= data.map((d)=>{
    console.log(d); //[{key1:'v1',key2:'v2',key3:'v3'}, {key1:'v4',key2:'v5',key3:'v6'}, {key1:'v7',key2:'v8',key3:'v9'}]
});
console.log(keys2); //[undefined,undefined,undefined]

//(3)can set a return value
const keys3= data.map(()=>{
    return 'hi'; 
});
console.log(keys3); //[ 'hi', 'hi', 'hi' ]

//(4)can short to one line
const keys4= data.map((a)=> a.key2);
console.log(keys4); //[ 'v2', 'v5', 'v8' ]

//(5)can set a function parameter
const getKey2= (t)=> t.key2;

const keys5= data.map(getKey2);
console.log(keys5); //[ 'v2', 'v5', 'v8' ]

//(6)can return an object
const keys6= data.map((i)=> {
    return {
        item1: i.key1.toUpperCase(),
        item2: 'hi:'+i.key2
    };
});
console.log(keys6); //[{ item1: 'V1', item2: 'hi:v2' }, { item1: 'V4', item2: 'hi:v5' }, { item1: 'V7', item2: 'hi:v8' }]

//(7)can insert into HTML
const keys7= data.map((e)=> `<h2>${e.key2}</h2>`);
const idMap= document.querySelector('#idMap');
idMap.innerHTML= keys7; //`keys7 is an array, so HTML be like: <h2>v2<br>,<br>v5<br>,<br>v8</h2>`
idMap.innerHTML= keys7.join(''); //`add '' separater, then HTML be like: <h2>v2<br>v5<br>v8</h2>`
idMap.innerHTML= data.map((e)=> `<h2>${e.key2}</h2>`).join(''); //`skip the 'const keys7' step, same HTML: <h2>v2<br>v5<br>v8</h2>`

//(8)can grab special keys into parameter
data.map((D) => {
  const { key3 } = D
  console.log(key3) //①v3 ②v6 ③v9
}) //grab 'key3' from data into D 

1.map*/

/*map returns a new array
    which doesn't change the size of original array(unlike filter),
    uses values from original array when making new one.
*/

/*2.unique values(es6)
const data=[
    {key1:'v1',key2:'v2'},
    {key1:'v3',key2:'v4'},
    {key1:'v5',key2:'v6'},
    {key1:'v7',key2:'v2'},
    {key1:'v8',key2:'v4'},
    {key1:'v9',key2:'v6'}
]

//(1)add 'map' funcion to grab values
const keys1= data.map((d)=>d.key2);
console.log(keys1); //[ 'v2', 'v4', 'v6', 'v2', 'v4', 'v6' ]

//(2)add 'new Set' function to grab unique values
const keys2= new Set(data.map((d)=>d.key2));
console.log(keys2); //Set(3) { 'v2', 'v4', 'v6' }

//(3)use '...' operator to separate object into array '[]'
const keys3= [...new Set(data.map((d)=>d.key2))];
console.log(keys3); //[ 'v2', 'v4', 'v6' ]

console.log(...['v2', 'v4', 'v6']); //v2 v4 v6
console.log([...['v2', 'v4', 'v6']]); //[ 'v2', 'v4', 'v6' ]
console.log({...['v2', 'v4', 'v6']}); //{ '0': 'v2', '1': 'v4', '2': 'v6' }

//(4)add value into array
const keys4= ['all',...new Set(data.map((d)=>d.key2))];
console.log(keys4); //[ 'all', 'v2', 'v4', 'v6' ]

//(5)insert into HTML
const idUniq= document.querySelector('#idUniq');
idUniq.innerHTML= keys4.map((t)=>{
    return `<button>${t}</button>`;
}).join(' ');
2.unique values(es6)*/

/*3.dynamic object keys
const data1={
    key1:'v1'
};

//(1)use '.' operator
    //to call value
console.log(data1.key1); //v1
    //to add and update key-value
data1.key2=['v2','v3'];
data1.key1='v4';
console.log(data1); //{ key1: 'v4', key2: [ 'v2', 'v3' ] }

//(2)use '[]' operator
    //to call value
console.log(data1['key2']); //[ 'v2', 'v3' ]
    //to add key-value
let key3= 'loading';
const data2= {
    [key3]: true,
    key4: 1,
    'key5': '2'
};
console.log(data2); //{ loading: true, key4: 1, key5: '2' }
    //to update variable key name：before added to array
let key6= 'loaded1';
key6= 'error';
const data3= {
    [key6]: false,
};
console.log(data3); //{ error: false }
        //can't update: after added to array
let key7= 'loaded2';
const data4= {
    [key7]: false,
};
key7= 'error';
console.log(data4); //{ loaded2: false }
    //to update variable value
        //can't update: non-variable
const key8= 'hi';
data4[key8]= 'Lee';
console.log(data4); //{ loaded2: false, hi: 'Lee' }
        
//(3)use function 
    //to add and update key-value
const data5={
    key9: true,
    key10: '',
};
console.log(data5); //{ key9: true, key10: '' }

function updateData(key,value){
    data5[key]= value
};
updateData('key11','ho');
updateData('key10','hi');
console.log(data5); //{ key9: true, key10: 'hi', key11: 'ho' }
3.dynamic object keys*/

/*4.filter() and find()
const data=[
    {key1:'v1',key2:2,key3:'v3'},
    {key1:'v4',key2:5,key3:'v6'},
    {key1:'v7',key2:8,key3:'v9'}
]

//(1)filter
const dataSmall= data.filter((d)=>{
    if (d.key2<5){
        return d;
    }
});
console.log(dataSmall); //[ { key1: 'v1', key2: 2, key3: 'v3' } ]
    //can be shorter
const dataMid= data.filter((a)=>{
    return a.key2=== 5
});
console.log(dataMid); //[ { key1: 'v4', key2: 5, key3: 'v6' } ]
    //can short to one line
const dataBig= data.filter((t)=>t.key2> 5);
console.log(dataBig); //[ { key1: 'v7', key2: 8, key3: 'v9' } ]
    //no match
const dataNon= data.filter((i)=>i.key2=== 6);
console.log(dataNon); //[]
    //use '[]' &&'.'operator to call value
console.log(dataBig[0].key2); //8

//(2)find
const datasmall= data.find((e)=>e.key2< 5);
console.log(datasmall); //{ key1: 'v1', key2: 2, key3: 'v3' }
    //no match
const datanon= data.find((m)=>m.key2=== 6);
console.log(datanon); //undefined
    //multi-match returns the first match
const datamul= data.find((s)=> s.key2>= 5);
console.log(datamul); //{ key1: 'v4', key2: 5, key3: 'v6' }
    //use '.'operator to call value
console.log(datasmall.key2); //2
4.filter and find*/

/*filter returns a new array (based on condition)
    which can change the size of original array(unlike map),
    and no match returns an empty array.

  find returns single instance(string, object...),
    no match returns undefined,
    multi-match returns the first match.
*/

/*5.reduce()
const data=[
    {key1:'v1',key2:2,key3:3.0003},
    {key1:'v4',key2:5,key3:6.0006},
    {key1:'v7',key2:8,key3:9.0009}
]

//(1)always return the 1st parameter(tocal of all calculations) with initial value(can set to '0')
//const dataTotal4= data.reduce(()=>{return total},0);
const dataTotal1= data.reduce((total,each)=>{return total},0);
console.log(dataTotal1); //0 
    //no return
const dataTotal2= data.reduce((total,each)=>{total += each.key2},0);
console.log(dataTotal2); //undefined

//(2)add 2nd parameter(current iteration/value)
const dataTotal3= data.reduce((total,each)=>{
    console.log(total); //①0 ③2 ⑤7
    console.log(each.key2); //②2 ④5 ⑥8
    total += each.key2
        return total    
},0);
console.log(dataTotal3); //⑦15

//(3)use '{}' object as initial value
//const dataTotal4= data.reduce(()=>{return total},{});
const dataTotal4= data.reduce((total,each)=>{
    return total
},{
    totalKey2: 0,
    totalData: 0
});
console.log(dataTotal4); //{ totalKey2: 0, totalData: 0 }
//add parameters
const dataTotal5= data.reduce((total,each)=>{
    const {key2, key3}= each;
    total.totalKey2 += key2;
    total.totalData += key2* key3;
    return total
},{
    totalKey2: 0,
    totalData: 0
});
console.log(dataTotal5); //{ totalKey2: 15, totalData: 108.01079999999999 }
//use '{}' as parameters
let {totalKey2,totalData}= data.reduce((total,each)=>{
    const {key2, key3}= each;
    total.totalKey2 += key2;
    total.totalData += key2* key3;
    return total
},{
    totalKey2: 0,
    totalData: 0
});
totalData= totalData.toFixed(2); //`can't use 'const' to set original {totalKey2,totalData}`
console.log({totalKey2,totalData}); //{ totalKey2: 15, totalData: '108.01' }
console.log(totalKey2,totalData); //15 108.01
console.log(totalData); //108.01
//analyse url data (11.Promise(), 12.async&await, 13.fetch() )
const url= 'https://api.github.com/users/john-smilga/repos?per_page=100';

const dataAnalyse1= async()=> { 
    const d= await fetch(url); 
    const a= await d.json();
    const t= a.reduce((total, each)=>{
        const {language}= each;
        if(language){
            if(total[language]){
                total[language] += 1
            }else{
                total[language] = 1
            }
        }    
        return total
    },{})
    console.log(t);
};
dataAnalyse1(); //{ JavaScript: 36, CSS: 45, HTML: 14, null: 3, SCSS: 2 }
    //short if() method
const dataAnalyse2= async()=> { 
    const d= await fetch(url); 
    const a= await d.json();
    const t= a.reduce((total, each)=>{
        const {language}= each;
        if(language){
            total[language] = total[language] + 1 || 1
        }    
        return total
    },{})
    console.log(t);
};
dataAnalyse2(); //{ JavaScript: 36, CSS: 45, HTML: 14, SCSS: 2 }
5.reduce()*/

/*6.destructure
//(1)array
const data1= ['v1', 'v2', 'v3'];
const value1= data1[0];
const value2= data1[1];
const value3= data1[2];
console.log(value1, value2, value3); //v1 v2 v3
    //use '[]' to set valuename 
const data2= ['v4', 'v5', 'v6'];
const [value7, , value6, value8]= data2; //`variable can be ' ' to skip the value (unlike object)`
console.log(value7, value6, value8); //v4 v6 undefined
    //use '[]' to exchange valuename
let value9= 'v9';
let value10= 'v10';
[value10, value9]= [value9, value10]; //`can't use 'const' to set original value9/value10`
console.log(value9, value10); //v10 v9
//(2)object
const data3={key1:'v1',key2:'v2',key3:{k3:'v3'},key4:{k4:'v4'}};
const key1Name= data3.key1; 
const key2Name= data3.key2; 
const key3Name= data3.key3.k3; 
console.log(key1Name, key2Name, key3Name); //v1 v2 v3
    //use '{}' to set value (use it's own name--key)  
const {key1name, key2name, key3name}= data3;
console.log(key1name, key2name, key3name); //undefined undefined undefined
const {key2, key1, key5}= data3; //`variable can't be ' ' to skip the value (unlike aray)`
console.log(key1, key2, key5); //v1 v2 undefined
    //use ':' to exchange valuename
const {key4: key3}= data3;
console.log(key3); //{ k4: 'v4' }
        //use ':' to add valuename
const {key3: {k3: key11}}= data3;
console.log(key11); //v3
//(3)application in function
    //set parameter to object
function printData1(d){
    console.log(d.key1);
}
printData1(data3); //v1
    //use '{}' to set value
function printData2(a){
    const {key1, key2}= a;
    console.log(key1, key2);
}
printData2(data3); //v1 v2
    //use ':' to exchange/add valuename
function printData3({key1:key2, key2:key1, key3, key4:{k4:key44}}){
    console.log(key1, key2, key3, key44);
}
printData3(data3); //v2 v1 { k3: 'v3' } v4
6.destructure*/

/*7.rest and spread operator '...'
//(1)rest
    //(1-1)array
        //use '...' to add rest valuename
const data1= ['v1', 'v2', 'v3'];
const [value1, ...restData]= data1; //`always put '...' in the end`
console.log(value1,restData); //v1 [ 'v2', 'v3' ]
        //analyse rest data
const value2= restData.find(e=> e[1]);
console.log(value2); //v2
    //(1-2)object
const data2={key1:'v1',key2:'v2',key3:{k3:'v3'},key4:{k4:'v4'}};
const {key2, ...restdata}= data2;
console.log(key2, restdata); //v2 { key1: 'v1', key3: { k3: 'v3' }, key4: { k4: 'v4' } }
    //(1-3)function
const getValues= (key1, ...restvalues)=>{ 
    console.log(key1); //①v1 ②v1 ③v1
    console.log(restvalues); //①[ 1, 2, 3 ]`rest when declare function` ②[ [ 4, 5, 6 ] ] ③[ 4, 5, 6 ]
    const average= restvalues.reduce(
        (total, each)=>{return total += each},0
    )/restvalues.length;
    console.log(average); //①2 ②NaN ③5
}
getValues(data2.key1, 1, 2, 3); //①

const data3= [4, 5, 6];
getValues(data2.key1, data3); //②

getValues(data2.key1, ...data3); //③`spread when invoke the function`

//(2)spread
    //(2-1)string
const data4= 'hi';
const letters= [...data4];
console.log(letters); //[ 'h', 'i' ]
    //(2-2)array
console.log(data3, data4); //[ 4, 5, 6 ] hi
console.log(...data3, ...data4); //4 5 6 h i
console.log(...data3, data4); //4 5 6 hi
console.log([...data3, data4]); //[ 4, 5, 6, 'hi' ]
        //vs reference (change original data)
const data5= ['v5','v6'];
const newData5= data5;
newData5[0]= 'v7';
console.log(data5); //[ 'v7', 'v6' ]
console.log(newData5); //[ 'v7', 'v6' ]
        //copy (use '...' to keep original data)
const data6= ['v8','v9'];
const newData6= ['v10', ...data6, 'v11'];
newData6[1]= 'v12';
console.log(data6); //[ 'v8', 'v9' ]
console.log(newData6); //[ 'v10', 'v12', 'v9', 'v11' ]
    //(2-3)object
const data7={key1:'v1',key2:'v2'};
const newData7= {...data7, key3:'v3'};
console.log(data7); //{ key1: 'v1', key2: 'v2' }
console.log(newData7); //{ key1: 'v1', key2: 'v2', key3: 'v3' }
7.rest and spread operator '...'*/

/*rest when declare function,
    spread when invoke the function
*/

/*8.Array.from()
const data1= 'hi';
    //vs '...' spread operator
const letters= [...data1];
console.log(letters); //[ 'h', 'i' ]
    //use Array.from()
console.log(Array.from(data1)); //[ 'h', 'i' ]

//(1)build an empty array
const data2= Array.from({length:4});
console.log(data2); //[ undefined, undefined, undefined, undefined ]
//(2)add index
const data3= Array.from({length:4},(_,index)=>{ //??index??
    return index
});
console.log(data3); //[ 0, 1, 2, 3 ]
//(3)divide index
const data3PerPage= 3;
const pages= data3.length/data3PerPage;
console.log(pages); //1.3333333333333333
console.log(Math.ceil(pages)); //2 (vs Math.floor()= 1)
//(4)use divided index to divide array
const data4= Array.from({length: pages},(_,index)=>{
    const start= index* data3PerPage;
    const data4Page= pages.slice(start, start+ data3PerPage); //??.slice??
    return data4Page
});
console.log(data4); //[0,1,2] [3]

//can grab from HTML
const idArrayFrom= document.querySelectorAll('.idArrayFrom');
console.log(idArrayFrom); //NodeList(3)[h2.idArrayFrom, h2.idArrayFrom, h2.idArrayFrom]
console.log(Array.from(idArrayFrom));//[h2.idArrayFrom, h2.idArrayFrom, h2.idArrayFrom]
const newId= Array.from(idArrayFrom).find((d)=>d.textContent==='hi');
console.log(newId);//<h2 class="idArrayFrom">hi</h2>
8.Array.from()*/

/*9.optional chaining '&&'
const data=[
    {key1:'v1',key2:{key3:'v2',key4:{key5: 'v3'}}},
    {key1:'v4',key2:{key3:'v5'}},
    {key1:'v7',key2:{key3:'v8',key4:{key5: 'v9'}}}
]

data.forEach((d)=>{
    console.log(d.key1); //①v1 ②v4 ③(stoped when met ②TypeError)
    console.log(d.key2.key5); //①undefined ②undefined ③(stoped when met ②TypeError)
    //console.log(d.key2.key4.key5); //①v3 ②TypeError ③(stoped when met ②TypeError)
})
//(1)use '&&' to add a chain
console.log(true&&'hi'); //hi
console.log(false&&'ho'); //false

data.forEach((d)=>{
    console.log(
        d.key2.key4&&
        d.key2.key4.key5
    ); //①v3 ②undefined ③v9
})
//(2)short to one line
data.forEach((d)=>{console.log(d.key2.key4?.key5);}) //①v3 ②undefined ③v9
data.forEach((d)=>{console.log(d.key2.key4?.key5||'hi');}) //①v3 hi ③v9
9.optional chaining '&&'*/

/*10.callback function
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
10.callback function*/

/*11.Promise()
//like in a restuaruant, you get a reciept/promise after ordering/function;
    //it'll take time waiting/pending
const prom1= new Promise((resolve,reject)=>{});
console.log(prom1); //Promise { <pending> }
    //then you get fulfilled, which brings you food/data 
const prom2= new Promise((resolve,reject)=>{
    resolve('hi')
});
console.log(prom2); //Promise {<fulfilled>: 'hi'} `PromiseState and PromiseResult`
prom2.then((d)=>console.log(d)); //hi `use '.then()' to print PromiseResult`
    //or get rejected, which leads to refund/error
        //once get rejected, you can't go back to wait
const prom3= new Promise((resolve,reject)=>{
    reject('bye')
});
console.log(prom3); //Promise {<rejected>: 'bye'}
prom3.then((d)=>console.log(d)).catch((a)=>console.log(a)); //bye
    //add function
        //always resolve, if not, the promise won't pending again (loop stoped)
const data=2;
const prom4= new Promise((resolve,reject)=>{
    const rand= Math.floor(Math.random()*3); //`Math.floor(1.5)= 1 vs Math.ceil(1.5)= 2`
    console.log(rand); //1 ||2 ||3
    rand=== data ? resolve('right') : reject('wrong')
});
console.log(prom4); //Promise { <rejected> 'wrong' } || Promise { 'right' }
prom4.then((d)=>console.log(d)).catch((a)=>console.log(a)); //wrong ||right 
11.Promise()*/

/*12.async& await
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
*/

/*async must be present, always returns a promise
    await waits till promise is settled (await must be used after async) 
*/

/*13.fetch() API
const url1 = 'https://api.github.com/users'
//console.log(fetch(url1)); //Promise { <pending> }

fetch(url1)
  .then((t) => console.log(t)) //Response {type: 'cors', url: 'https://api.github.com/users', redirected: false, status: 200, ok: true, …}
  .catch((c) => console.log(c))
fetch(url1)
  .then((t) => t.json())
  .then((T) => console.log(T)) //{login: 'mojombo', id: 1, node_id: 'MDQ6VXNlcjE=', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4', gravatar_id: '', …},{login: 'defunkt', id: 2, node_id: 'MDQ6VXNlcjI=', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4', gravatar_id: '', …},...
  .catch((c) => console.log(c))
//use async&await + try()catch() to fetch()
const getData1 = async () => {
  try {
    const t = await fetch(url1)
    const T = await t.json()
    console.log(T)
  } catch (c) {
    console.log(c)
  }
}
getData1() //{login: 'mojombo', id: 1, node_id: 'MDQ6VXNlcjE=', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4', gravatar_id: '', …},{login: 'defunkt', id: 2, node_id: 'MDQ6VXNlcjI=', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4', gravatar_id: '', …},...
//fetch errors
const url2 = 'https://api.github.com/u'
const getData2 = async () => {
  try {
    const t = await fetch(url2)
    const T = await t.json()
    console.log(T)
  } catch (c) {
    console.log(c)
  }
}
getData2() //①GET https://api.github.com/u 404 ②{message: 'Not Found', documentation_url: 'https://docs.github.com/rest'} `translate error message into json`
const getData3 = async () => {
  try {
    const t = await fetch(url2)
    console.log(t)
  } catch (c) {
    console.log(c)
  }
}
getData3() //①GET https://api.github.com/u 404 ②Response {type: 'cors', url: 'https://api.github.com/u', redirected: false, status: 404, ok: false, …}
const getData4 = async () => {
  try {
    const t = await fetch(url2)
    if (!t.ok) {
      const e = `there is an error: '${t.status} ${t.statusText}'`
      throw new Error(e)
    }
    const T = await t.json()
    console.log(T)
  } catch (c) {
    console.log(c)
  }
}
getData4() //①GET https://api.github.com/u 404 ②Error: there is an error: '404 ' at getData4 `inspect error first`
const getData5 = async () => {
  try {
    const t = await fetch(url2)
    if (t.status >= 200 && t.status <= 299) {
      const T = await t.json()
      console.log(T)
    } else {
      const e = `there is an error: '${t.status} ${t.statusText}'`
      throw new Error(e)
    }
  } catch (c) {
    console.log(c)
  }
}
getData5() //①GET https://api.github.com/u 404 ②Error: there is an error: '404 ' at getData5 `inspect needed condition first`
13.fetch()*/

/*fetch API, is a browser API for HTTP(AJAX) requests
    default: GET requests,
    returns a promise (like async).

    only throws an error if can't resolve,
    error response still a response (400-500).
*/

/*14.width&height
console.log('width', window.innerWidth); //width 616 `width as the page shows`
console.log('height', window.innerHeight); //height 587 `height as the page shows`

const idData= document.querySelector('.backgroundImage');
idData.addEventListener('click',()=>{
    const d= idData.getBoundingClientRect()
    console.log(d);
})
14.width&height*/

/*15.timestamps
console.log(new Date()); //Wed Feb 08 2023 18:00:45 GMT+0800 (China Standard Time)
//unix time, milliseconds since 1 January 1970
console.log(Date.now()); //1675850897942 
console.log(new Date().getTime()); //1675850897942
console.log(new Date().valueOf()); //1675850897942
setTimeout(() => {
    console.log(Date.now()); //1675850898949 `delayed 1000ms`
}, 1000);
    //application: create user id in apps
let data= [];
data= [...data, {id: Date.now(), key1: 'v1'}] 
console.log(data); //[ { id: 1675851539721, key1: 'v1' } ]
setTimeout(() => {
    data= [...data, {id: Date.now(), key1: 'v2'}]
    console.log(data); //[{ id: 1675851539721, key1: 'v1' }, { id: 1675851540730, key1: 'v2' }]
}, 1000);
    //application: create/get dates  
console.log(new Date(1675850897942)); //Wed Feb 08 2023 18:00:45 GMT+0800 (China Standard Time)

const now= Date.now();
console.log(now); //1675852090713
console.log(new Date()); //Wed Feb 08 2023 18:28:10 GMT+0800 (China Standard Time)
const future= new Date(now+ 1000*60); //`add one hour`
console.log(future); //Wed Feb 08 2023 18:29:10 GMT+0800 (China Standard Time)
const oneday= new Date('2023-4-1'); //`'2023-4-1'||'April 1,2023'`
console.log(oneday); //Sat Apr 01 2023 00:00:00 GMT+0800 (China Standard Time)

const diff= future.getTime()-now;
console.log(diff/(1000*60)); //1
15.timestamps*/

/*16.es2022 (es6=ECMAScript 2015)
//(1).at()
const data= [1, 2, 3];
    //vs use '[]' to read data from array
const oldLast= data[data.length -1];
console.log(oldLast); //3
    //use '.at()' to read data from array in es2022
const esLast= data.at(-1);
console.log(esLast); //3
console.log(data.at(0)); //1
//(2)top level await
const url= 'https://api.github.com/users/john-smilga/repos?per_page=100';
    //vs use'fetch()' to read data from url
fetch(url)
    .then((t)=>console.log(t)) //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
    .catch((c)=>console.log(c))
    //vs use'fetch()'+ 'async&await' to read data from url
const fetchData= async()=>{
    const d= await fetch(url);
    console.log(d); //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
};
fetchData();
    //use top level 'await' to read data from url in es2022
const d= await fetch(url);
console.log(d); //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
    //or use import module+ top level 'await' to read data from url in es2022
import fetchTabs from './es2022.js'

const t= await fetchTabs();
console.log(t); //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
16.es2022 (es6=ECMAScript 2015)*/

/*export code in './es2022.js'
const fetchTabs=()=>{
    return (fetch(url)
        .then((t)=>console.log(t))
    );
};
export default fetchTabs;
*/

/*module need './package.js' ("type": "module",)
    and './index.js'
    and './app.js'(or another name) to insert into './index.js'
*/

/*17.getElement
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
17.getElement*/

/*18.for...in&for...of
const data={key1:'v1',key2:'v2',key3:'v3'}
//(1)for...in
for (const Key in data){
    console.log(`${Key}: ${data[Key]}`); //①key1: v1 ②key2: v2 ③key3: v3
}
//(2)Object.keys()& Object.values()
const keys= Object.keys(data);
console.log(keys); //[ 'key1', 'key2', 'key3' ]
const values= Object.values(data);
console.log(values); //[ 'v1', 'v2', 'v3' ]
//(3)Object.entries()
const entries= Object.entries(data);
console.log(entries); //[ [ 'key1', 'v1' ], [ 'key2', 'v2' ], [ 'key3', 'v3' ] ]
    //(4)Object.entries(), reverse of Object.entries()
console.log(Object.fromEntries(entries)); //{ key1: 'v1', key2: 'v2', key3: 'v3' }
    //(5)for...of
for (const newEnt1 of entries){
    const [d1, d2]= newEnt1;
    console.log(d1, d2); //①key1 v1 ②key2 v2 ③key3 v3
}
        //short the code
for (const [d1, d2] of entries){
    console.log(d1, d2); //①key1 v1 ②key2 v2 ③key3 v3
}
    //vs use 'map()' to destructure
const newEnt2= entries.map((a)=>a[0])
console.log(newEnt2); //[ 'key1', 'key2', 'key3' ]
    //vs use '[]' to destructure
const newEnt3= entries.map((t)=>{
    const [t1, t2]= t;
    console.log(t1, t2); //①key1 v1 ②key2 v2 ③key3 v3
    console.log(t1); //①key1 ②key2 ③key3 
    const [i1, i2, i3]= t;
    console.log(i1); //①key1 ②key2 ③key3 
    console.log(i2); //①v1 ②v2 ③v3
    console.log(i3); //①undefined ②undefined ③undefined
    return i1
})
console.log(newEnt3); //[ 'key1', 'key2', 'key3' ]
18.for...in&for...of*/

/*object: 'for...in' (unless the order of array is important),
    use 'Object.keys()', 'Object.values()', 'Object.entries()' to convert object into array

    array: 'for...of'
*/

/*19.Set()
const d= new Set();
console.log(d); //Set(0) {size: 0}

d.add('hi'); //vs FormData() use '.append()'
d.add('ho');
d.add('ha');
d.add('hi');
console.log(d); //Set(3) { 'hi', 'ho', 'ha' } `save only unique values`

d.delete('hi');
console.log(d); //Set(2) { 'ho', 'ha' }
d.delete('hu');
console.log(d); //Set(2) { 'ho', 'ha' } `can't delete unexisted value`
d.clear(); 
console.log(d); //Set(0) {}
const a= d.delete('hu');
console.log(a); //false `delete in a new Set leads to 'false'`

const t= d.has('he');
console.log(t); //false
//accept iterable objects
const data=[
    {key1:'v1',key2:'v2',key3:'v3'},
    {key1:'v4',key2:'v5',key3:'v6'},
    {key1:'v1',key2:'v8',key3:'v9'}
]
const Values= data.map((i)=>i.key1);
console.log(Values); //[ 'v1', 'v4', 'v1' ]
const uniqValues= new Set(Values);
console.log(uniqValues); //Set(3) { 'v1', 'v4' }
const arrValues1= ['all', ...uniqValues];
console.log(arrValues1); //[ 'all', 'v1', 'v4' ]
    //short to oneline
const arrValues2=['all', ...new Set(data.map((e)=>e.key1))];
console.log(arrValues2); //[ 'all', 'v1', 'v4' ]
19.Set()*/

/*Set object 
    only stores a collection of 
    unique values of any type (string, array, object...) 
*/

/*20.includes()
//(1)string includes()
const data1= 'hi';
console.log(data1.includes('h')); //true
console.log(data1.includes('H')); //false
console.log(data1.includes('h',0)); //true `check also the position`

const data2=[
    {key1:'v1',key2:'v2',key3:'v3'},
    {key1:'v4',key2:'v5',key3:'v6'},
    {key1:'v1',key2:'v8',key3:'v9'}
]
const d= {key1:'v1',key2:'v2',key3:'v3'};
console.log(d.key1.includes('v')); //true
console.log(data2.includes(d)); //false `check only strings`
console.log(data2.key1.includes('v')); //false `can't read into two layers`

const t= 'V1';
const D= data2.filter((a)=>a.key1.toUpperCase().includes(t));
console.log(D); //[{key1: 'v1', key2: 'v2', key3: 'v3'}, {key1: 'v1', key2: 'v8', key3: 'v9'}]
//(2)array includes()
const data3= ['v1', 'v2', 'v3'];
console.log(data3.includes('v1')); //true
console.log(data3.includes('v1', 1)); //false
    //application in condition statement
if (data3.includes('v1')){
    console.log(`you guess right!`); //you guess right!
}
20.includes()*/

/*String includes() checks whether a string contains another string;
  Array includes() checks whether the string is in an array, 
    useful in the conditional statements
*/

/*21.formData() API
//https://www.youtube.com/watch?v=5-x4OUM-SP8&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=29
//vs old method
const form1= document.querySelector('.form');
const nInput= document.querySelector('#name');
const eInput= document.querySelector('#email');
const pInput= document.querySelector('#password');

form1.addEventListener('submit',(d)=>{
    d.preventDefault(); //`'.preventDefault()' cancel default action`
    const nValue= nInput.value;
    const eValue= eInput.value;
    const pValue= pInput.value;
    if(!nValue|| !eValue|| !pValue){ //`check for empty values`
        console.log('input values');
        return;
    }
    console.log(nValue, eValue, pValue); 
    console.log('thanks'); //`add new action`
    
    nInput.value= ''; //`clear values`
    eInput.value= '';
    pInput.value= '';
})
//use formData() to short codes
const form2= document.querySelector('.form');
//const t= new FormData(form2); //formData{} `same result as line1002 'const t= new FormData(a.currentTarget)'`
form2.addEventListener('submit',(a)=>{
    a.preventDefault();
    const f= new FormData(a.currentTarget); //`'.currentTarget' returns the HTML element whose event listener triggered the event`
    console.log(f); //formData{} `not empty, won't directly return values`
    const Values= [...f.values()];
    console.log(Values); 
    
    if(Values.includes('')){
        console.log('input values');
        return;
    }
    const F= Object.fromEntries(f);
    console.log(F); //{name: 'n', email: 'e', password: 'p'}
    //axios.post('someUrl', F); `??will work`
    console.log('thanks'); //`add new action`

    a.currentTarget.reset(); //`clear values`

    //some other method
    console.log([...f.keys()]); //['name', 'email', 'password']
    console.log([...f.values()]); //['n', 'e', 'p']
    
    console.log([...f.entries()]); //[['name', 'n'], ['email', 'e'], ['password', 'p']]
    //axios.post('someUrl', f); `??it's not JSON so....(depends on the server)`

    for (let [na, va] of f){
        console.log((`${na}=${va}`)); //①name=n ②email=e ③password=p
    }
    
    const i= f.get('name');
    console.log(i); //n
    const t= f.has('name');
    console.log(t); //true

    f.append('address', 'a'); //`add key-value pair, vs Set() use '.add()'`
    f.delete('email');  //`delete key-value pair`
})
21.formData() API*/
