//18.for...in&for...of
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

/*object: 'for...in' (unless the order of array is important),
    use 'Object.keys()', 'Object.values()', 'Object.entries()' to convert object into array

    array: 'for...of'
*/