import test from 'ava';
const fs=require('fs');
var exec = require('child_process').exec;
test('install', (t)=>{
   exec('node fi.js -i package.json@test',()=>{
    t.true(fs.accessSync('./templet/test.json')===undefined);
    const list=JSON.parse(fs.readFileSync('./list.json','utf8'));
    t.true(list.test.fileName==='package.json'&&list.test.trueName==='test.json');
   });
});
test('install2', (t)=>{
   exec('node fi.js -i package.json',()=>{
     t.true(fs.accessSync('./templet/package.json')===undefined);
     const list=JSON.parse(fs.readFileSync('./list.json','utf8'));
     t.true(list.package.fileName==='package.json'&&list.package.trueName==='package.json');
   });
});