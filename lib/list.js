'use strict'
let listObj = require('../list.json')
const fs = require('fs')
const path = require('path')

exports.showList = function () {
  console.log('*'.repeat(60))
  console.log('')
  let length = 0
  for (let e in listObj) {
    if (e.length > length && e.length < 20) {
      length = e.length
    } else if (e.length >= 20) {
      length = 20
    }
  }
  for (let e in listObj) {
    let l = length - e.length
    let nbsp = ' '.repeat(2)
    let s = ' '.repeat(l)
    console.log(`alias:${nbsp}${e}${s}${nbsp}|${nbsp}templetName:${nbsp}${listObj[e].fileName}`);
  }
  console.log('')
  console.log('*'.repeat(60))
}

exports.add = function (id, fileName, trueName) {
  listObj[id] = { 'fileName': fileName, 'trueName': trueName, 'param': '' }
  var s = JSON.stringify(listObj)
  fs.writeFile(path.join(__dirname, '../list.json'), s, 'utf8', function (err) {
    if (err) throw err
    console.log('Successfully installed!')
  })
}

exports.del = function (id) {
  if (!listObj[id]) {
    console.log(`Not find alias: ${id}`)
    return
  }
  fs.unlink(path.join(__dirname, '../templet/', listObj[id].trueName), (err) => {
    if (err) throw err
    delete listObj[id]
    var s = JSON.stringify(listObj)
    fs.writeFile(path.join(__dirname, '../list.json'), s, 'utf8', function (err) {
      if (err) throw err
      console.log('Successfully deleted!')
    })
  })
}
