var listObj=require('../list.json');
var fs=require('fs');
var path=require('path');
exports.exist=function(val){
     for ( var e in listObj ){  
         if(val===e||val===listObj[e].fileName)
      console.log("alias:"+e+"|templetName:"+listObj[e].fileName);
    }
     console.log(listObj);
}
exports.showList=function () {
    console.log("*****************************************************"); 
    console.log(""); 
    for ( var e in listObj ){  
      console.log("alias:"+e+" | templetName:"+listObj[e].fileName);
    }
     console.log(""); 
    console.log("*****************************************************"); 
} 
exports.add=function (id,fileName,trueName) {
    listObj[id]={"fileName":fileName,"trueName":trueName,"param":[]};
    var s=JSON.stringify(listObj)
    fs.writeFile(path.join(__dirname,"../list.json"),s,'utf8',function(err){
        if(err) throw err;
    })
} 
exports.del=function (id) {
    fs.unlink(path.join(__dirname,"../templet/",listObj[id].trueName));
    delete listObj[id];

    var s=JSON.stringify(listObj);
    console.log(s);
    fs.writeFile(path.join(__dirname,"../list.json"),s,'utf8',function(err){
        if(err) throw err;
    })
}