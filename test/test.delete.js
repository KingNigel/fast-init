import test from 'ava';
const fs = require('fs');
const exec = require('child_process').execSync;
test.serial('delete', (t) => {
    exec('node fi.js -i package.json@delete');
    exec('node fi.js -d delete');
    fs.access('./templet/delete.json', (err) => {
        if (err) t.pass();
        else t.fail();
    });
    let list = JSON.parse(fs.readFileSync('./list.json', 'utf8'));
    t.true(list.delete === undefined);
});