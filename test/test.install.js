import test from 'ava';
const fs = require('fs');
const exec = require('child_process').execSync;
test.serial('install', (t) => {
    exec('node fi.js -i package.json@test');
    exec('node fi.js -i package.json');
    t.true(fs.accessSync('./templet/test.json') === undefined);
    t.true(fs.accessSync('./templet/package.json') === undefined);
    let list = JSON.parse(fs.readFileSync('./list.json', 'utf8'));
    t.true(list.test.fileName === 'package.json' && list.test.trueName === 'test.json');
    t.true(list.package.fileName === 'package.json' && list.package.trueName === 'package.json');
});