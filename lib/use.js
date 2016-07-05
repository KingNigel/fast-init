var listObj=require('../list.json')?require('../list.json'):{};

var fs=require('fs');
var path=require('path');
module.exports=function(val){
    console.log(val);
    var valArray = val.split('@');
    var alias = valArray[0];
    var createName = valArray[1];
    console.log(listObj[alias]);
    if(listObj[alias]){
        //console.log(path.join(__dirname,"../templet",listObj[alias].trueName));
        //console.log(process.cwd());
            var templetPath=path.join(__dirname,"../templet",listObj[alias].trueName);
             var filePath=path.join(process.cwd(),listObj[alias].fileName);
            var rs = fs.createReadStream(templetPath);
             var ws = fs.createWriteStream(filePath);
             rs.pipe(ws);
    }
    else{
       console.log(alias+" is not found.");
    }
}