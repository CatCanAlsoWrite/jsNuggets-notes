//20.includes()
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

/*String includes() checks whether a string contains another string;
  Array includes() checks whether the string is in an array, 
    useful in the conditional statements
*/