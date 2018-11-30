var listObj = require('../list.json') ? require('../list.json') : {}
var fs = require('fs')
var path = require('path')

module.exports = function (val) {
  var valArray = val.split('@')
  var alias = valArray[0]
  var createName = valArray[1]
  if (listObj[alias]) {
    var filePath = ''
    var templetPath = path.join(__dirname, '../templet', listObj[alias].trueName)
    if (createName) {
      if (path.extname(createName)) {
        filePath = path.join(process.cwd(), createName)
      } else {
        createName = createName + path.extname(listObj[alias].fileName)
        filePath = path.join(process.cwd(), createName)
      }
    } else {
      filePath = path.join(process.cwd(),listObj[alias].fileName)
    }
    var rs = fs.createReadStream(templetPath)
    var ws = fs.createWriteStream(filePath)
    rs.pipe(ws)
  } else {
    console.log(alias + ' is not found.')
  }
}
