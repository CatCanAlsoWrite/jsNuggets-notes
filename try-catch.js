//1.basic
/*(1)throw default Error
function isPositive(a) {
  try {
    if (a > 0) {
      console.log('YES')
    } else {
      throw new Error()
    }
  } catch (error) {
    console.log(error) //Error xx-error-details xxx-nested-calls-led-to-the-error
    // console.log(error.stack) //Error xx-error-details xxx-nested-calls-led-to-the-error
    // console.log(error.name) //Error
    // console.log(error.message) //Error xxx-error-details
  }
}
isPositive(1) //YES
isPositive(0) //Error xxx-error-details xxx-nested-calls-led-to-the-error
isPositive(-1) //Error xxx-error-details xxx-nested-calls-led-to-the-error
*/

/*(2)throw specific Error
function isPositive(a) {
  try {
    if (a > 0) {
      console.log('YES')
    } else {
      throw new TypeError()
    }
  } catch (error) {
    // console.log(error) //TypeError xx-error-details xxx-nested-calls-led-to-the-error
    // console.log(error.stack) //TypeError xx-error-details xxx-nested-calls-led-to-the-error
    console.log(error.name) //TypeError
    // console.log(error.message) //TypeError xxx-error-details
  }
}
isPositive(1) //YES
isPositive(0) //TypeError
isPositive(-1) //TypeError
*/

/*types
  - ReferenceError (undeclared variables)
  - SyntaxError (invalid code)
  - TypeError (non-supported data type)
  - RangeError (out of allowed range)
  - ...
*/

/*(3)add specific error message 
function isPositive(a) {
  try {
    if (a > 0) {
      console.log('YES')
    } else {
      throw new Error('input number is not positive')
    }
  } catch (error) {
    // console.log(error) //Error xx-error-details xxx-nested-calls-led-to-the-error
    // console.log(error.stack) //Error xx-error-details xxx-nested-calls-led-to-the-error
    // console.log(error.name) //Error
    console.log(error.message) //Error xxx-error-details
  }
}
isPositive(1) //YES
isPositive(0) //input number is not positive
isPositive(-1) //input number is not positive
*/

/*(4)add conditions to Error
function isPositive(a) {
  try {
    if (a > 0) {
      console.log('YES')
    } else if (a === 0) {
      throw new Error('input number is ZERO')
    } else {
      throw new Error('input number is NEGATIVE')
    }
  } catch (error) {
    // console.log(error) //Error xx-error-details xxx-nested-calls-led-to-the-error
    // console.log(error.stack) //Error xx-error-details xxx-nested-calls-led-to-the-error
    // console.log(error.name) //Error
    console.log(error.message) //Error xxx-error-details
  }
}
isPositive(1) //YES
isPositive(0) //input number is ZERO
isPositive(-1) //input number is NEGATIVE
*/

//2.100% run the code in 'finally' (will run after 'try', or after 'catch')
let n = 0
function isPositive(a) {
  try {
    if (a > 0) {
      console.log('YES')
    } else {
      throw new Error()
    }
  } catch (error) {
    console.log(error.name) //Error
  } finally {
    console.log((n += 1))
  }
}
isPositive(1) //YES 1
isPositive(0) //Error 2
isPositive(-1) //Error 3
