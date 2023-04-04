//4.filter() and find()
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

/*filter returns a new array (based on condition)
    which can change the size of original array(unlike map),
    and no match returns an empty array.

  find returns single instance(string, object...),
    no match returns undefined,
    multi-match returns the first match.
*/