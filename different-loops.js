/*1.basic
'for' loop equals 'while' loop, just gathering the loop stuff together；
'do while' loop is almost the same as them, but will run the code in the beginning, no mater if matches the condition
*/

//if match condition
for (var i = 0; i < 3; i++) {
  console.log('ha') //①ha ②ha ③ha
}

var i = 0
while (i < 3) {
  console.log('hi') //①hi ②hi ③hi
  i++
}

var i = 0
do {
  console.log('ho') //①ho ②ho ③ho
  i++
} while (i < 3)

//if not match condition
for (var i = 4; i < 3; i++) {
  console.log('ha') //
}

var i = 4
while (i < 3) {
  console.log('hi') //
  i++
}

var i = 4
do {
  console.log('ho') //①ho
  i++
} while (i < 3)

/*2.add more syntax */
//use 'continue' to immediately jump to the next iteration of the loop
for (var i = 0; i < 3; i++) {
  continue
  console.log('ha') //`skipped over`
}

//use 'break' to terminate the execution of a loop
for (var i = 0; i < 3; i++) {
  console.log('ha') //①ha
  break
}
