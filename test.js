import test from 'ava';
const fs=require('fs');
const exec = require('co-exec');

test('install', function * (t) {
     const commit1 = yield exec('node fi.js -i package.json@test');
     const commit2 = yield exec('node fi.js -i package.json');
     t.true(fs.accessSync('./templet/test.json')===undefined);
     t.true(fs.accessSync('./templet/package.json')===undefined);
     const list=JSON.parse(fs.readFileSync('./list.json','utf8'));
     t.true(list.test.fileName==='package.json'&&list.test.trueName==='test.json')
     t.true(list.package.fileName==='package.json'&&list.package.trueName==='package.json')
});
test('delete', function * (t) {
    const commit1 = yield exec('node fi.js -i package.json@delete');
     const list=JSON.parse(fs.readFileSync('./list.json','utf8'));
     console.log(list);
     t.true(fs.accessSync('./templet/delete.json')===undefined);
     t.true(list.delete.fileName==='package.json'&&list.delete.trueName==='delete.json')     
     const commit2 = yield exec('node fi.js -d delete');
     t.false(false);
     const err = new Error('The message');
    
     var a=function (params) {
          throw err;
     }
     t.notThrows(a());
    //  t.throws(fs.access('./templet/delete.json',(err)=>{
    //       if(err) throw err;
    //  }));
     //t.true(list.delete===undefined);
});