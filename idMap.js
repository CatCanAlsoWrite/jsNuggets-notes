//1.map()
const data = [
  { key1: 'v1', key2: 'v2', key3: 'v3' },
  { key1: 'v4', key2: 'v5', key3: 'v6' },
  { key1: 'v7', key2: 'v8', key3: 'v9' },
]

//(1)before es6: const keys2= data.map(function(){})
const keys1 = data.map(() => {})
console.log(keys1) //[undefined,undefined,undefined]

//(2)can set a parameter
const keys2 = data.map((d) => {
  console.log(d) //[{key1:'v1',key2:'v2',key3:'v3'}, {key1:'v4',key2:'v5',key3:'v6'}, {key1:'v7',key2:'v8',key3:'v9'}]
})
console.log(keys2) //[undefined,undefined,undefined]

//(3)can set a return value
const keys3 = data.map(() => {
  return 'hi'
})
console.log(keys3) //[ 'hi', 'hi', 'hi' ]

//(4)can short to one line
const keys4 = data.map((a) => a.key2)
console.log(keys4) //[ 'v2', 'v5', 'v8' ]

//(5)can set a function parameter
const getKey2 = (t) => t.key2

const keys5 = data.map(getKey2)
console.log(keys5) //[ 'v2', 'v5', 'v8' ]

//(6)can return an object
const keys6 = data.map((i) => {
  return {
    item1: i.key1.toUpperCase(),
    item2: 'hi:' + i.key2,
  }
})
console.log(keys6) //[{ item1: 'V1', item2: 'hi:v2' }, { item1: 'V4', item2: 'hi:v5' }, { item1: 'V7', item2: 'hi:v8' }]

//(7)can insert into HTML
const keys7 = data.map((e) => `<h2>${e.key2}</h2>`)
const idMap = document.querySelector('#idMap')
idMap.innerHTML = keys7 //`keys7 is an array, so HTML be like: <h2>v2<br>,<br>v5<br>,<br>v8</h2>`
idMap.innerHTML = keys7.join('') //`add '' separater, then HTML be like: <h2>v2<br>v5<br>v8</h2>`
idMap.innerHTML = data.map((e) => `<h2>${e.key2}</h2>`).join('') //`skip the 'const keys7' step, same HTML: <h2>v2<br>v5<br>v8</h2>`

//(8)can grab special keys into parameter
data.map((D) => {
  const { key3 } = D
  console.log(key3) //①v3 ②v6 ③v9
}) //grab 'key3' from data into D

/*map returns a new array
    which doesn't change the size of original array(unlike filter),
    uses values from original array when making new one.
*/
