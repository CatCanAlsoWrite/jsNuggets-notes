//19.Set()
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

/*Set object 
    only stores a collection of 
    unique values of any type (string, array, object...) 
*/
