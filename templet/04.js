//模拟异步配餐部分
//盯着炸薯条
function look(callback){
     setTimeout(function() {
         console.log('薯条炸好了');
         var food="炸薯条";
         callback(food);
     }, 10000);

}
function eat(food){
    console.log("吃"+food);
}
look(function(food){
    eat(food);

})


console.log("配餐员继续配餐");

console.log("配餐员继续配餐");

console.log("配餐员继续配餐");

