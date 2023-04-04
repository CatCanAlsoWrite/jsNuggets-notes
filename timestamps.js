//15.timestamps
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