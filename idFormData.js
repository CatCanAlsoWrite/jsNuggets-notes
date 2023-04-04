//21.formData() API
//https://www.youtube.com/watch?v=5-x4OUM-SP8&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=29
//vs old method
const form1= document.querySelector('.form');
const nInput= document.querySelector('#name');
const eInput= document.querySelector('#email');
const pInput= document.querySelector('#password');

form1.addEventListener('submit',(d)=>{
    d.preventDefault(); //`'.preventDefault()' cancel default action`
    const nValue= nInput.value;
    const eValue= eInput.value;
    const pValue= pInput.value;
    if(!nValue|| !eValue|| !pValue){ //`check for empty values`
        console.log('input values');
        return;
    }
    console.log(nValue, eValue, pValue); 
    console.log('thanks'); //`add new action`
    
    nInput.value= ''; //`clear values`
    eInput.value= '';
    pInput.value= '';
})
//use formData() to short codes
const form2= document.querySelector('.form');
//const t= new FormData(form2); //formData{} `same result as line1002 'const t= new FormData(a.currentTarget)'`
form2.addEventListener('submit',(a)=>{
    a.preventDefault();
    const f= new FormData(a.currentTarget); //`'.currentTarget' returns the HTML element whose event listener triggered the event`
    console.log(f); //formData{} `not empty, won't directly return values`
    const Values= [...f.values()];
    console.log(Values); 
    
    if(Values.includes('')){
        console.log('input values');
        return;
    }
    const F= Object.fromEntries(f);
    console.log(F); //{name: 'n', email: 'e', password: 'p'}
    //axios.post('someUrl', F); `??will work`
    console.log('thanks'); //`add new action`

    a.currentTarget.reset(); //`clear values`

    //some other method
    console.log([...f.keys()]); //['name', 'email', 'password']
    console.log([...f.values()]); //['n', 'e', 'p']
    
    console.log([...f.entries()]); //[['name', 'n'], ['email', 'e'], ['password', 'p']]
    //axios.post('someUrl', f); `??it's not JSON so....(depends on the server)`

    for (let [na, va] of f){
        console.log((`${na}=${va}`)); //①name=n ②email=e ③password=p
    }
    
    const i= f.get('name');
    console.log(i); //n
    const t= f.has('name');
    console.log(t); //true

    f.append('address', 'a'); //`add key-value pair, vs Set() use '.add()'`
    f.delete('email');  //`delete key-value pair`
})
