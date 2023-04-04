//7.rest and spread operator '...'
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
