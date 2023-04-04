//2.unique values(es6)
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