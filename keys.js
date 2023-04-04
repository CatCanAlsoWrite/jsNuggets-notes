//3.dynamic object keys
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
