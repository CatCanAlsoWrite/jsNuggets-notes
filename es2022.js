//16.es2022 (es6=ECMAScript 2015)
//(1).at()
const data= [1, 2, 3];
    //vs use '[]' to read data from array
const oldLast= data[data.length -1];
console.log(oldLast); //3
    //use '.at()' to read data from array in es2022
const esLast= data.at(-1);
console.log(esLast); //3
console.log(data.at(0)); //1
//(2)top level await
const url= 'https://api.github.com/users/john-smilga/repos?per_page=100';
    //vs use'fetch()' to read data from url
fetch(url)
    .then((t)=>console.log(t)) //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
    .catch((c)=>console.log(c))
    //vs use'fetch()'+ 'async&await' to read data from url
const fetchData= async()=>{
    const d= await fetch(url);
    console.log(d); //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
};
fetchData();
    //use top level 'await' to read data from url in es2022
const d= await fetch(url);
console.log(d); //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
    //or use import module+ top level 'await' to read data from url in es2022
/*//import code in './jsNuggets.js'
import fetchTabs from './es2022.js'

const t= await fetchTabs();
console.log(t); //Response {type: 'cors', url: 'https://api.github.com/users/john-smilga/repos?per_page=100', redirected: false, status: 200, ok: true, …}
*/
//export code in './es2022.js'
const fetchTabs=()=>{
    return (fetch(url)
        .then((t)=>console.log(t))
    );
};
export default fetchTabs;

/*module need './package.js' ("type": "module",)
    and './index.js'
    and './app.js'(or another name) to insert into './index.js'
*/

