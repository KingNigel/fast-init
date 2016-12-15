var fs = require('fs');
var path = require('path');
var list = require('./list');
module.exports = function install(val) {
  var valArray = val.split('@');
  var filePath = valArray[0];
  var alias = valArray[1];
  var templetPath = '';
  var fileName = path.basename(filePath);
  if (alias) {
    templetPath = path.join(__dirname, '../templet', alias + path.extname(filePath));
  }
  else {
    templetPath = path.join(__dirname, '../templet', fileName);
    alias = path.basename(filePath, path.extname(filePath));
  }
  var trueName = alias + path.extname(filePath);
  fs.stat(filePath, (err, st) => {
    if (err) {
      return console.log(err.message); 
    }
    if (st.isFile()) {
      var rs = fs.createReadStream(filePath);
      var ws = fs.createWriteStream(templetPath);
      rs.pipe(ws);
      list.add(alias, fileName, trueName);
    }
    else {
      console.log(filePath + " no such file!");
    }
  })
}