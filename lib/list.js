var listObj=require('../list.json');
exports.query=function(){
     console.log(listObj);
}
exports.showList=function () {
    console.log(listObj.list);
    for ( var e in listObj.list ){   
      console.log(e);

    }
    
} 