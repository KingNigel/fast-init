var fs = require('fs');
var path = require('path');
module.exports = function install(val) {
    var valArray = val.split('@');
    var filePath = valArray[0];
    var alias = valArray[1];
    //alias ? alias : path.basename(filePath)
    var templetPath=path.join(__dirname, '../templet',path.basename(filePath));
     
    if (alias) {
        alias = path.extname(alias) ? alias : path.basename(filePath);
    }

    fs.stat(filePath, (err, st) => {
        if (err) throw err;
        if (st.isFile()) {
            var rs = fs.createReadStream(filePath);
            var ws = fs.createWriteStream(templetPath);
            rs.pipe(ws);
        }
        else {
            console.log(filePath + " no such file!");
        }
    })
}