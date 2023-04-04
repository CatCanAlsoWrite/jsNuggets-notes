//13.fetch() API
const url1 = 'https://api.github.com/users'
//console.log(fetch(url1)); //Promise { <pending> }

fetch(url1)
  .then((t) => console.log(t)) //Response {type: 'cors', url: 'https://api.github.com/users', redirected: false, status: 200, ok: true, …}
  .catch((c) => console.log(c))
fetch(url1)
  .then((t) => t.json())
  .then((T) => console.log(T)) //{login: 'mojombo', id: 1, node_id: 'MDQ6VXNlcjE=', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4', gravatar_id: '', …},{login: 'defunkt', id: 2, node_id: 'MDQ6VXNlcjI=', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4', gravatar_id: '', …},...
  .catch((c) => console.log(c))
//use async&await + try()catch() to fetch()
const getData1 = async () => {
  try {
    const t = await fetch(url1)
    const T = await t.json()
    console.log(T)
  } catch (c) {
    console.log(c)
  }
}
getData1() //{login: 'mojombo', id: 1, node_id: 'MDQ6VXNlcjE=', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4', gravatar_id: '', …},{login: 'defunkt', id: 2, node_id: 'MDQ6VXNlcjI=', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4', gravatar_id: '', …},...
//fetch errors
const url2 = 'https://api.github.com/u'
const getData2 = async () => {
  try {
    const t = await fetch(url2)
    const T = await t.json()
    console.log(T)
  } catch (c) {
    console.log(c)
  }
}
getData2() //①GET https://api.github.com/u 404 ②{message: 'Not Found', documentation_url: 'https://docs.github.com/rest'} `translate error message into json`
const getData3 = async () => {
  try {
    const t = await fetch(url2)
    console.log(t)
  } catch (c) {
    console.log(c)
  }
}
getData3() //①GET https://api.github.com/u 404 ②Response {type: 'cors', url: 'https://api.github.com/u', redirected: false, status: 404, ok: false, …}
const getData4 = async () => {
  try {
    const t = await fetch(url2)
    if (!t.ok) {
      const e = `there is an error: '${t.status} ${t.statusText}'`
      throw new Error(e)
    }
    const T = await t.json()
    console.log(T)
  } catch (c) {
    console.log(c)
  }
}
getData4() //①GET https://api.github.com/u 404 ②Error: there is an error: '404 ' at getData4 `inspect error first`
const getData5 = async () => {
  try {
    const t = await fetch(url2)
    if (t.status >= 200 && t.status <= 299) {
      const T = await t.json()
      console.log(T)
    } else {
      const e = `there is an error: '${t.status} ${t.statusText}'`
      throw new Error(e)
    }
  } catch (c) {
    console.log(c)
  }
}
getData5() //①GET https://api.github.com/u 404 ②Error: there is an error: '404 ' at getData5 `inspect needed condition first`

/*fetch API, is a browser API for HTTP(AJAX) requests
    default: GET requests,
    returns a promise (like async).

    only throws an error if can't resolve,
    error response still a response (400-500).
*/
