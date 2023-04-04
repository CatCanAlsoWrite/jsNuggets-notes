//6.destructure
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