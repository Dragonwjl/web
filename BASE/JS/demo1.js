function say() {
    // 在函数内 省略 var 时  会创建一个 全局变量  
    var message = "hi"  //局部变量
    console.log(message);
    // var 有变量提升 

}
say();
console.log(message);

for (var i = 1; i <= 3; i++) {
    //   console.log("fot");
}
console.log(i);

for (var index = 0; index < 4; index++) {
    // console.log(index);
    setTimeout(() => console.log(index), 0);
}

for (let indexs = 0; indexs < 4; indexs++) {

    setTimeout(() => console.log(indexs), 0);
}

console.log(null == undefined);


console.log(null === undefined);


console.log(0.1 + 0.2)

//  toString() 可以接受参数 返回不同数值进制字符串表示
let nums = 100;
console.log(nums.toString(2));
console.log(nums.toString(8));
console.log(nums.toString(16));


let value1 = null;
let value2;
console.log(String(value1));
console.log(String(value2));


// 模板字面量 -字符串插值

let zfValue = 5;
let exponent = "second";
let out = `${zfValue} ${exponent} power is ${zfValue * zfValue} `;
console.log(out)

console.log(`Hello, ${`World`}!`);

//指数操作符
console.log(Math.pow(4, 2))
console.log(4 ** 2)




// 字符串与数值比较大小时  如果字符串不能转化为有效数值 会转化为 NaN ,若任何关系操作符涉及到NaN时 都会返回 false
let result = "a" < 3;
console.log(result);


//传参只有按值传递

function setName(obj) {
    obj.name = "first";
    obj = new Object();
    obj.name = "second"
}
let demo = new Object();
setName(demo)
console.log(demo.name);

console.log(Date.toLocalTime())



//正则
let text = "cat,PAT,fat,sAt,urt";
let pattern = /.at/gi;
let pattern1 = /.at/i;
let pattern2 = /.at/g;
let mattch = pattern.exec(text);
let mattch1 = pattern1.exec(text);
let mattch2 = pattern2.exec(text);

console.log(mattch instanceof Array);
console.log(mattch.index);
console.log(pattern.lastIndex);
console.log(mattch1.index);
console.log(pattern1.lastIndex);
console.log(mattch2.index);
console.log(pattern2.lastIndex);

//返回包含指定小数点位数的数值字符串 -- toFixed()

let count = 10;
let count1 = 10.00005
let count2 = 10.005
console.log(count.toFixed(3));  //  10.000
console.log(count1.toFixed(4)); //  10.0000   --为什么不是像下面一样四舍五入  查阅发现：四舍六入五考虑，五后非零就进一，五后为零看奇偶，五前为偶应舍去，五前为奇要进一
console.log(count2.toFixed(2));  // 10.01


//String ---slice() 、substr() 、substring()
let demoString = "Hello World !"
console.log(demoString.slice(2));
console.log(demoString.substr(2));
console.log(demoString.substring(2));

//参数为负值时 slice() --所有负值参数转换成 字符串长度+负值  substr()-- 第一个负值参数转换成 字符串长度+负值 ，第二个参数 变为0
// substring() -- 所有负值参数都变为0
console.log(stringValue.slice(-3));
console.log(stringValue.substring(-3));
console.log(stringValue.substr(-3));
console.log(stringValue.slice(3, -4));
console.log(stringValue.substring(3, -4));
console.log(stringValue.substr(3, -4));


// 字符串方法  -- startWith()、endWith()、includes()
// endsWith() 第二个参数  ---默认为字符串长度值  如果提供参数，将字符串当成只有参数个数个字符
let s = "wfkcvdhscncedge";
console.log(s.endsWith("cnc", 4));
console.log(s.endsWith("cnc", 10));
console.log(s.endsWith("cnc", 11));

// 字符串方法 padStasrt() pasEnd()
let sss = "xyz";
console.log(sss.padStart(6, "*"))
console.log(sss.padEnd(6, "*"))

console.log(sss.padStart(1))  // 参数值 小于原始字符串长度  返回原始字符串  
console.log(sss.padEnd(1))


// 对象属性存取方式---点语法  中括号
let person = {
    name: "hello",
    age: 36
}

console.log(person.name);
console.log(person["age"]);



// Array ES6新增创建数组的静态方法
// from()  类数组结构转换为数组  还可以接收第二个可选的映射函数参数
console.log(Array.from("123456"))
let array1 = [1, 2, 3, 4, 5]
console.log(Array.from(array1, x => x * 2))

// of()  将一组参数转化为数组
console.log(Array.of(1, 2, 3, 4, 5))

// 判断是否为数组
let array2 = [1, 23, 3];
console.log(Array.isArray(array2));

// Array 迭代器方法  ---entries()
let array3 = ["one", "two", "three", "for"];
for (const [index, element] of array3.entries()) {
    console.log(index + "----" + element);
}
// 0----one
// 1----two
// 2----three
// 3----for


for (const arr of array3.entries()) {
    console.log(arr);
}
// [ 0, 'one' ]
// [ 1, 'two' ]
// [ 2, 'three' ]
// [ 3, 'for' ]

let values = [2, 53, 224, 5, 123]
console.log(values.sort());  // [ 123, 2, 224, 5, 53 ] 排序出现问题
//sort 可以接受一个比较函数   判断哪些值应该排在前面
console.log(values.sort((a, b) => a < b ? -1 : a > b ? 1 : 0))  //[ 2, 5, 53, 123, 224 ]  升序排序正确
console.log(values.sort((a, b) => a < b ? 1 : a > b ? -1 : 0))  // [ 224, 123, 53, 5, 2 ] 降序排序正确

// splice()-- 作用--删除、插入、替换  主要作用是往数组中插入元素

// 删除  传入2个参数  开始位置 和删除元素数量
// 插入  传入3个参数  开始位置 0（删除元素数）、要插入的元素
// 替换  传入3个参数  开始位置 0（删除元素数）、要插入的元素  

let colors = ["red", "blue", "yello", "pink", "green"]
console.log(colors); //[ 'red', 'blue', 'yello', 'pink', 'green' ]
console.log(colors.splice(1, 2));  //[ 'blue', 'yello' ]  返回一个数组 ，包含被删除的元素
console.log(colors.splice(0, 0, "white")); // []  返回一个数组 ，包含被删除的元素
console.log(colors); // [ 'white', 'red', 'pink', 'green' ]
console.log(colors.splice(1, 2, "black"))  //[ 'red', 'pink' ]  返回一个数组 ，包含被删除的元素
console.log(colors);  //[ 'white', 'black', 'green' ]

let array4 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 4];
console.log(array4.indexOf(4)); // 3
console.log(array4.lastIndexOf(4));// 10 
console.log(array4.indexOf(4, 4));  //10
console.log(array4.lastIndexOf(4, 9)); //  3
console.log(array4.lastIndexOf(4, 10));   //10  从后往前 第一个

// 迭代方法 -- every() some() filter() map() forEach()
let array5 = [1, 3, 5, 67, 78, 95]
console.log(array5.every((item, index, array) => item > 5));  // false
console.log(array5.some((item, index, array) => item > 5));  // ture
console.log(array5.filter((item, index, array) => item > 5));   // [ 67, 78, 95 ]
console.log(array5.map((item, index, array) => item * 5)); //[ 5, 15, 25, 335, 390, 475 ]
array5.forEach((item,) => console.log(item));

// 归并方法 -- reduce()
let array6 = [1, 2, 3, 4, 5];
let sum = array6.reduce((prev, cur, index, array) => prev + cur);
console.log(sum);


// Map  相较于Object 只能使用数值、符号、字符串作为键不同  Map 可以使用任何JS数据类型作为键

let m1 = new Map().set("key1", "value1").set("key2", "value2")
console.log(m1.size);
console.log(m1.has("key1"));
console.log(m1.get("key2"));



let m2 = new Map([["k1", "v1"], ["k2", "v2"], ["k3", "v3"]])
// map使用forEach进行遍历时 传参1 为值 传参2为键
m2.forEach((v, k) => {
    console.log(`${k}-----${v}`)
});
for (const [k, v] of m2.entries()) {
    console.log(`${k}-----${v}`)
}

for (const iter of m2.entries()) {
    console.log(`${iter}`)
}

console.log([...m2]);


// Set 
let sset = new Set(["demo1", "demo2", "demo3", "demo4"])
for (const iterator of sset) {
    console.log(iterator);
}

console.log([...sset]);


let collection = ['foo', 'bar', 'baz'];
collection.forEach((item) => console.log(item));



let p = {
    name: "happy"
}

//修改对象属性的默认特性---Object.defineProperty()  ---接收3个参数    1属性的对象(不用添加引号)    2 属性名称    3 描述对象
Object.defineProperty(p, 'name', {
    writable: false,
    value: "happy",

})

console.log(p.name);
p.name = "unhappy"
console.log(p["name"]);


//增强对象的语法 

//  属性简写 ---属性值只要使用变量名就会被自动解释为同名的属性键

let name1 = 'mini';

let Odemo = {
    name1
}
console.log(Odemo);
Odemo["name2"] = "demo2";
console.log(Odemo["name1"]);
console.log(Odemo);

//对象解构 -- 使用于对象相匹配的结构实现对对象的赋值

let demo5 = {
    name: 'lili',
    age: 35
}

let { name, age } = demo5;
console.log(name + '---->' + age);

//可以在解构的同时定义默认值 --- 适合引用属性不存在于原对象中的情况
let { name: nam, age: ag, job = 'work' } = demo5;
console.log(nam + '---->' + ag + '---->' + job);



let personName, personAge;
let person1 = {
    name: 'Matt',
    age: 27
};
({ name: personName, age: personAge } = person1);  //对于事先声明的变量进行赋值---表达式必须包含在() 中
console.log(personName, personAge);


//原型  --原型所定义的属性和方法是由所有实例所共享的
function People() { }

People.prototype.name = 'man';
People.prototype.age = 13;
People.prototype.say = function () {
    console.log(this.name);
}
const people1 = new People();
people1.say()
const people2 = new People()
console.log(people2.age);

console.log(people2.__proto__); //实例通过__proto__链接到原型对象


// 对象迭代  --- 两个静态方法
// Object.values() ---返回对象值的数组
// Object.entries() ---返回键/值对数组
let people = {
    name: "hello",
    age: 13,
    say() {
        console.log("say name");
    }
}
console.log(Object.values(people));
console.log(Object.entries(people));
people.say();

// 原型继承


// 类 ---函数声明可以提升 类定义不会被提升

// 类声明主要方式  --两种
// 类声明方式 
class People { }
//类表达式
const Animal = class { }

class man {
    constructor() {
        console.log("构造函数");
    }
}

let man1 = new man();
man1;
console.log(typeof man);

console.log(man1 instanceof man);



// 函数
//箭头函数
let sum1 = (a, b) => { return a+b};
console.log(sum1(4,6));

// 默认参数值  --- 在参数名后面加上一个= 就可以为参数赋一个默认值   
function sayName(name= "henry"){
console.log(`Hello ${name}`);
}

sayName();
sayName("lilei")

// 参数的扩展  --- 使用扩展操作符
let array7 = [1,2,3,4]

function getSum(){
    let sum = 0
    for (let index = 0; index <arguments.length; index++) {
        sum += arguments[index];
        
    }
    return sum;
}

console.log(getSum(... array7));

// 箭头函数不支持arguments对象，但支持收集参数的定义方式  ---可以实现和arguments一样的逻辑
 let getSum1 = (... values) => {
     return values.reduce((x,y)=> x+y);
 }

 console.log(getSum1(1,2,3));



// apply() ---接收两个参数 第一个是：函数内this的值 第二个：参数数组(可以是Array实例还可以是arguments对象)

function sumAll(num1 ,num2){
    return num1 + num2;
}

function callSum1(num1,num2){
    return sumAll.apply(this,arguments) //arguments对象
}

function callSum2(num1,num2){
    return sumAll.apply(this,[num1,num2]) //Array实例
}
console.log(callSum1(1,2));
console.log(callSum2(1,2));

//  call()  与apply作用相同   传参形式不同   第一个参数与apply相同   剩下的参数需要逐个进行传递
function callSum3(num1,num2){
    return sumAll.call(this,num1,num2) //Array实例
}

console.log(callSum3(1,2));


 let p =new Promise((resolve ,reject) =>{
    console.log('first');
    resolve();
})
p.then(()=> console.log('sencond'))

