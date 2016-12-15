import test from 'ava';
const fs = require('fs');
const exec = require('child_process').execSync;
test.serial('list', (t) => {
    exec('node fi.js -l');
    t.pass();
});