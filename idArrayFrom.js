//8.Array.from()
const data1= 'hi';
    //vs '...' spread operator
const letters= [...data1];
console.log(letters); //[ 'h', 'i' ]
    //use Array.from()
console.log(Array.from(data1)); //[ 'h', 'i' ]

//(1)build an empty array
const data2= Array.from({length:4});
console.log(data2); //[ undefined, undefined, undefined, undefined ]
//(2)add index
const data3= Array.from({length:4},(_,index)=>{ //??index??
    return index
});
console.log(data3); //[ 0, 1, 2, 3 ]
//(3)divide index
const data3PerPage= 3;
const pages= data3.length/data3PerPage;
console.log(pages); //1.3333333333333333
console.log(Math.ceil(pages)); //2
//(4)use divided index to divide array
const data4= Array.from({length: pages},(_,index)=>{
    const start= index* data3PerPage;
    const data4Page= pages.slice(start, start+ data3PerPage); //??.slice??
    return data4Page
});
console.log(data4); //[0,1,2] [3]

//can grab from HTML
const idArrayFrom= document.querySelectorAll('.idArrayFrom');
console.log(idArrayFrom); //NodeList(3)[h2.idArrayFrom, h2.idArrayFrom, h2.idArrayFrom]
console.log(Array.from(idArrayFrom));//[h2.idArrayFrom, h2.idArrayFrom, h2.idArrayFrom]
const newId= Array.from(idArrayFrom).find((d)=>d.textContent==='hi');
console.log(newId);//<h2 class="idArrayFrom">hi</h2>
