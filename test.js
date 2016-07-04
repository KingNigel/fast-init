import test from 'ava';
const fs=require('fs');
const exec = require('co-exec');

test('install', function * (t) {
    const commit = yield exec('node fi.js -i package.json@test');
    t.true(fs.accessSync('./templet/test.json')===undefined);
});
test('install', function * (t) {
    const commit = yield exec('node fi.js -i package.json@test');
    t.true(fs.accessSync('./templet/test.json')===undefined);
});