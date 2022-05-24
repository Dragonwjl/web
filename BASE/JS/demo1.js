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
let out = `${zfValue} ${exponent} power is ${zfValue*zfValue} `; 
console.log(out)

console.log(`Hello, ${ `World` }!`);