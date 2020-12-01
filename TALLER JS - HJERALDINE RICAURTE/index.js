console.log("Hola desde index.js")

/*variables*/
var x = 10
var y = 55.55
console.log("X:"+x+ " Y:"+y)

var nombre = "Pedro"
var tex = "Mi nombre es Pedro Perez"
console.log(nombre)
console.log(tex)

/*operadores matemáticos*/
var a = 10;
var b = a+5+22+1000+50;
var c = a*2;
var d = b/4;
var e = 26%6;
console.log ("a:"+a);
console.log ("b:"+b);
console.log ("c:"+c);
console.log ("d:"+d);
console.log ("e:"+e);

/*operadores de incremento y decremento*/
var f = 10;
var g = ++f;
var h = 20;
var i = --h;
console.log ("incremento: " +g);
console.log ("decremento: " +i);

/*operadores de asignación*/
console.log ("x: " + x);
console.log ("Y: " + y);
console.log (x -= y += 9);


/*operadores de comparación*/
var m1 = 4;
var m2 = 10;
console.log (m1 == m2);

/*operadores lógicos o booleanos*/
console.log (4>2)&&(10<15);

/*Operadores de cadena de texto*/
var texto1 = "Mi nombre es Hjeraldine Ricaurte ";
var texto2 = "aprendo JavaScript ";
document.write (texto1 + texto2);

var j = "50";
var k = "200";
document.write (j+k);

/*Condicionales*/
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
    alert ("JavaScript es fácil de aprender.")
}

var course = 3;
if (course == 1) {
    document.write ("<h1> HTML TUTORIAL </h1>");
}
else if (course == 2) {
    document.write ("<h1> CSS TUTORIAL </h1>");
}
else {
    document.write ("<h1> JAVA TUTORIAL </h1>");
}

/*Switch: Multiples condiciones */
var day = 6;
switch (day) {
    case 1: 
        document.write ("Lunes");
        break;
    case 2: 
        document.write ("Martes");
        break;
    case 3: 
        document.write ("Miercoles");
        break;
    default:
        document.write ("Otro día de la semana ");
}

/*Bucles: varias veces el mismo código */
/*Bucles: For */
for (l=1; l<=10; l++) {
    document.write (l + "<br  />");
}

/*Bucles: While */
var m = 0;
while (m<=6) {
    document.write ("hjeraldine" + "<br/>");
    m++;
}

/*Bucles: Do While */
var n = 20;
do {
    document.write (n + "<br/>");
    n++;
}
while (n<=25);

/*Diferencia entre el break y el continue*/
for (o = 0; o <= 10; o++) {
    if (o == 5) {
        break;
    }
    document.write (o + "<br/>");
}

for (o = 0; o <= 10; o++) {
    if (o == 5) {
        continue;
    }
    document.write (o + "<br/>");
}

/*Funciones*/
function sayHello(name) {
    alert ("Hi, " + name);
}
sayHello ("hjeraldine");

function sayHello(name, age) {
    document.write (name + " is " + age + " years old. ");
}

function myFunction (p, q) {
    return p * q;
}
var r = myFunction (5, 6);
console.log (r); // 30

/*Ventanas: Alert*/
alert ("¿De verdad quieres salir de esta página?");

/*Ventanas: Prompt*/
var user = prompt ("Por favor, escriba su nombre");
alert (user);

/*Ventanas: Confirm*/
var result = confirm ("¿De verdad quieres salir de esta página?");
if (result == true) {
    alert ("Gracias por su visita");
}
else {
    alert ("Gracias por quedarte con nosotros");
}

/*Var y let*/
function varTest () {
    var s = 1;
    if (true) {
        var s = 2; 
        console.log (s); // 2
    }
    console.log (s); //2
}
varTest ()

function letTest () {
    let s = 1;
    if (true) {
        let s = 2;
        console.log (s); //2
    }
    console.log (s); //1
}
letTest ()

for (let t = 0; t < 5; t++) {
    document.write (t);
}

/*Template literals:Se utilizan para devolver variables en la cadena*/
let name_1="Angie";
let msg=`Welcome ${name_1}`;
console.log(msg);

let num_1=4;
let num_2=3;

let msg_2=`The sum is ${num_1+num_2}`;
console.log(msg_2);

/*Bucles y funciones*/
/*For*/
let list=["x","y","c"];
for (let val of list) {
    console.log (val)
}

/*Funciones*/
const add = (n, m) => {
    let sum = n + m;
    console.log (sum);
}
add (2,4);

const test = (u, v = 3, w = 42) =>
{
    return u + v + w;
}
console.log (test(5));

/*Objetos*/
let prop = "name"
let id = "1234"
let mobile = "08923"

let user_1 = {
    [prop] : "jack",
    [`user_${id}`]:`${mobile}`
};

var aa = 0;
var bb = {
    ['foo'+ ++aa]:aa,
    ['foo'+ ++aa]:aa,
    ['foo'+ ++aa]:aa
};

var param = 'size';
var config = {
    [param]:12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log (config)

/*Object.assign*/
let person = {
    name:'jack',
    age:18,
    sex:'male'
};
let student = {
    name_4:'Bob',
    age_4:20,
    xp:'2'
};
let newStudent = Object.assign ({}, person, student);
console.log (person.name);
console.log (newStudent);

let person_1 = {
    name:'jack',
    age:18,
};
let newPerson = Object.assign ({},person);
newPerson.name = "bob";
console.log(person.name);
console.log(newPerson.name);

let person_2 = {
    name_5:'jack',
    age_5:18
};
let newPerson_1 = Object.assign ({}, person_2, {name: 'bob'});


/*Desestructuración */
let arr = ['1','2','3'];
let [one,two,three] = arr;

console.log(one);
console.log(two);
console.log(three);

let obj = {cc:100, s: true};
let {cc, s} = obj;

console.log(cc);
console.log(s);

let {dd, ee} = {dd: "Hello ", ee: "Jack"};
console.log (dd + ee);

var obj1 = {id_1: 42, name_2:"jack"};
let {id_1 = 10, age_1 = 20} = obj;
console.log (id_1);
console.log (age_1);

/*Parámetros Rest*/
function containsAll (arr, ...nums)
{
    for (let num of nums) {
        if (arr.indexOf (num) === -1)
        {
            return false;
        }
    }
    return true;
}

/*Parámetros Spread*/
var dateFields = [1970, 0, 1]; // 4 Jan 1970
var date = new 
Date (...dateFields);
console.log (date);

const obj2 = {foo: "bar", ff: 42 };
const obj3 = {foo: "baz", hh: 5 };
const merge = (...Object) => ({...Object});
let mergeObj = merge (obj2, obj3); 
let mergeObj2 = merge ({}, obj1, obj2); 

/*Clases*/
class Rectanble {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
}
const square = new Rectanble (5,5);
const poster = new Rectanble (2,3);

/*Clases - nombrada*/
var square1 = class Rectanble {
    constructor (height, width) {
        this.height = height
        this.width = width;
    }
};

/*Clases - ejemplo*/
class Rectanble2 {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
    get area () {
        return this.calcArea ();
    }
    calcArea () {
        return this.height * this.width;
    }
}
const square2 = new Rectanble2 (5,5);
console.log (square2.area); //25

class Point {
    constructor (ii, jj) {
        this.ii = ii;
        this.jj = jj;
    }
    static distance (kk, ll) {
        const dx = kk.ii - ll.ii;
        const dy = kk.jj - ll.jj;
        return Math.hypot (dx, dy);
    }
}
const p1 = new Point (7, 2);
const p2 = new Point (3, 8);
console.log (Point.distance (p1, p2));

/*Herencia*/
class Animal {
    constructor (name_3) {
        this.name_3 = name_3;
    }
    speak () {
        console.log (this.name_3 + "hace un ruido");
    }
} 
class Dog extends Animal {
    speak () {
        console.log (this.name_3 + "ladra");
    }
}
let dog = new Dog ("Rex ");
dog.speak ();

/*Objeto map*/
let map = new Map ([["k1", "v1"], ["k2", "v2"]]);
console.log (map.size); //2

let map2 = new Map ();
map2.set ("a1", "b1").set ("a2", "b2");
console.log (map2.get("a1")); //b1
console.log (map2.has("a2")); //true
for (let ab of map2.entries())
    console.log (ab [0] + " : " + ab [1]);

/*Objeto set*/
let set = new Set ([1, 2, 4, 2, 5, 9, 4, 9, 1]);
console.log (set.size); //5

/*Métodos, definición y ejemplo*/
let set1 = new Set ();
set1.add(5).add(9).add(59).add(9);
console.log (set.has (9));
for (let v of set.values ())
    console.log (v);

/*Promises*/
function asyncFunc (work) {
    return new 
Promise (function (resolve, reject)
{
    if (work === "")
    reject (Error ("Nothing"));
    setTimeout (function () {
        resolve (work);
    }, 1000);
    });
}
asyncFunc ("Work 1") // Work 1
.then (function (result) {
    console.log (result);
    return asyncFunc ("Work 2"); // work 2
}, function(error) {
    console.log (error);
})
.then (function(result) {
    console.log (result);
}, function (error) {
    console.log (error);
}),
console.log ("End"); //End

/*Iteradores y generadores*/
/*Ejemplo para un objeto*/
let myIterableObj = {
    [Symbol.iterator] : function* ()
    {
    yield 1; yield 2; yield 3;
    }
}
console.log ([myIterableObj]);


/*Ejemplo para una function*/
function* idMaker () {
    let index = 0;
    while (index < 5)
    yield index++;
} 
var gen = idMaker ();
console.log (gen.next () .value);

/*Ejemplo un objeto con 7 elementos y funciones generadoras*/
const arr1 = ["0", "1", "4", "a", "9", "c", "16"];
const my_obj = {
    [Symbol.iterator] : function* ()
    {
        for (let index of arr) {
            yield `${index}`;
        }
    }
} ;
const all = [...my_obj]
    .map (c1 => parseInt (c1, 10))
    .map (Math.sqrt)
    .filter ((c1) => c1 < 5)
    .reduce ((c1, d1) => c1 + d1);
console.log (all);

/*Módulos*/

/*Métodos integrados */
/*Búsqueda de elemeto de arrays: */
[4, 5, 1, 8, 2, 0] .find (x => x > 3);
[4, 5, 1, 8, 2, 0] .findIndex (x => x > 3);

/*Repeticiones de strings*/
console.log ("foo" .repeat(3)); //foofoofoo

/*Búsqueda de strings */
"SoloLearn" .startsWith ("Solo", 0); //true
"SoloLearn" .endsWith ("Solo", 4); //true
"SoloLearn" .includes ("loLe"); //true
"SoloLearn" .includes ("olo", 1); //true
"SoloLearn" .includes ("olo", 2); //false
