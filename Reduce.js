//5.reduce()
const data=[
    {key1:'v1',key2:2,key3:3.0003},
    {key1:'v4',key2:5,key3:6.0006},
    {key1:'v7',key2:8,key3:9.0009}
]

//(1)always return the 1st parameter(tocal of all calculations) with initial value(can set to '0')
//const dataTotal4= data.reduce(()=>{return total},0);
const dataTotal1= data.reduce((total,each)=>{return total},0);
console.log(dataTotal1); //0 
    //no return
const dataTotal2= data.reduce((total,each)=>{total += each.key2},0);
console.log(dataTotal2); //undefined

//(2)add 2nd parameter(current iteration/value)
const dataTotal3= data.reduce((total,each)=>{
    console.log(total); //①0 ③2 ⑤7
    console.log(each.key2); //②2 ④5 ⑥8
    total += each.key2
        return total    
},0);
console.log(dataTotal3); //⑦15

//(3)use '{}' object as initial value
//const dataTotal4= data.reduce(()=>{return total},{});
const dataTotal4= data.reduce((total,each)=>{
    return total
},{
    totalKey2: 0,
    totalData: 0
});
console.log(dataTotal4); //{ totalKey2: 0, totalData: 0 }
//add parameters
const dataTotal5= data.reduce((total,each)=>{
    const {key2, key3}= each;
    total.totalKey2 += key2;
    total.totalData += key2* key3;
    return total
},{
    totalKey2: 0,
    totalData: 0
});
console.log(dataTotal5); //{ totalKey2: 15, totalData: 108.01079999999999 }
//use '{}' as parameters
let {totalKey2,totalData}= data.reduce((total,each)=>{
    const {key2, key3}= each;
    total.totalKey2 += key2;
    total.totalData += key2* key3;
    return total
},{
    totalKey2: 0,
    totalData: 0
});
totalData= totalData.toFixed(2); //`can't use 'const' to set original {totalKey2,totalData}`
console.log({totalKey2,totalData}); //{ totalKey2: 15, totalData: '108.01' }
console.log(totalKey2,totalData); //15 108.01
console.log(totalData); //108.01
//analyse url data (11.Promise(), 12.async&await, 13.fetch() )
const url= 'https://api.github.com/users/john-smilga/repos?per_page=100';

const dataAnalyse1= async()=> { 
    const d= await fetch(url); 
    const a= await d.json();
    const t= a.reduce((total, each)=>{
        const {language}= each;
        if(language){
            if(total[language]){
                total[language] += 1
            }else{
                total[language] = 1
            }
        }    
        return total
    },{})
    console.log(t);
};
dataAnalyse1(); //{ JavaScript: 36, CSS: 45, HTML: 14, null: 3, SCSS: 2 }
    //short if() method
const dataAnalyse2= async()=> { 
    const d= await fetch(url); 
    const a= await d.json();
    const t= a.reduce((total, each)=>{
        const {language}= each;
        if(language){
            total[language] = total[language] + 1 || 1
        }    
        return total
    },{})
    console.log(t);
};
dataAnalyse2(); //{ JavaScript: 36, CSS: 45, HTML: 14, SCSS: 2 }
