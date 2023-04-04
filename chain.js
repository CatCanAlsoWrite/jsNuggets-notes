//9.optional chaining '&&'
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
