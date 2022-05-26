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


//String ---slice() 、slice()) 、substring()
let demoString = "Hello World !"
console.log(demoString.slice(2));
console.log(demoString.substr(2));
console.log(demoString.substring(2));

//参数为负值时 slice() --所有负值参数转换成 字符串长度+负值  slice()-- 第一个负值参数转换成 字符串长度+负值 ，第二个参数 变为0
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
console.log(s.endsWith("cnc",4));  
console.log(s.endsWith("cnc",10));
console.log(s.endsWith("cnc",11));

// 字符串方法 padStasrt() pasEnd()
let  sss = "xyz";
console.log(sss.padStart(6,"*"))
console.log(sss.padEnd(6,"*"))

console.log(sss.padStart(1))  // 参数值 小于原始字符串长度  返回原始字符串  
console.log(sss.padEnd(1))
