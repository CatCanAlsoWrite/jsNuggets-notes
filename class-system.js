//《You Don't Know JS Yet》
//1.class as expression
//(1)named class expression
const Basic1 = class BasicTemplate {
  //code
}
//(2)anonymous class expression
const Basic2 = class {
  //code
}

//2.class as declaration
//(1)basic
class BasicTemplate {
  //public field
  X = 0
  y = null

  //constructor
  constructor(x, y) {
    console.log('2, Running BasicTemplate constructor')
    this.x = x
    this.y = y
  }

  //method
  functionName1() {
    return this.x * 3
  }
}

//method (can be added outside of the class)
BasicTemplate.prototype.functionName3 = function () {
  return this.x == null
    ? this.Y ** 2
    : this.y == null
    ? this.x ** 2
    : this.x * this.y
}

//instance
var instance1 = new BasicTemplate(10, 20) //2, Running BasicTemplate constructor

console.log(instance1.x) //10
console.log(instance1.y) //20
console.log(instance1.functionName1()) //30
console.log(instance1.functionName3()) //200

//(2)inheritance
class ExtendedTemplate extends BasicTemplate {
  //public field
  z = console.log("3, Initializing field 'z'")

  //constructor
  constructor(z, x, y) {
    console.log('1, Running ExtendedTemplate constructor')
    super(x, y)

    console.log(`4, Setting instance property 'z' to ${z}`)
    this.z = z
  }

  //method
  functionName2() {
    return this.x * 4
  }
}

//instance
var instance2 = new ExtendedTemplate(300, 100, 200) //1, Running ExtendedTemplate constructor
//2, Running BasicTemplate constructor
//3, Initializing field 'z'
//4, Setting instance property 'z' to 300

console.log(instance2.x) //100
console.log(instance2.y) //200
console.log(instance2.z) //300
console.log(instance2.functionName1()) //300
console.log(instance2.functionName2()) //400
console.log(instance2.functionName3()) //20000

/*sequence of perimeters is important */
var instance3 = new ExtendedTemplate(300, 100) //1... 2... 3... 4...
console.log(instance3.x) //100
console.log(instance3.z) //300
console.log(instance3.functionName1()) //300
console.log(instance3.functionName2()) //400
console.log(instance3.functionName3()) //10000
