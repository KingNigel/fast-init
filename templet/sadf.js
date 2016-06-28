//同步 for循环阻塞后面代码的执行 同步代码特点按顺序执行
for (var index = 0; index < 1000000; index++) {
  console.log(index);
    
}
while(true){
console.log('囧');

}
console.log('同步');