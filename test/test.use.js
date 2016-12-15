import test from 'ava';
const fs = require('fs');
const exec = require('child_process').execSync;
test.serial('use', (t) => {
    exec('node fi.js -u i');
    exec('node fi.js -u i@initAlias');
    exec('node fi.js -u i@initAlias.js');
    fs.access('./init.json', (err) => {
        if (err) t.fail();
        else t.pass();
    });
    fs.access('./initAlias.json', (err) => {
        if (err) t.fail();
        else t.pass();
    });
    fs.access('./initAlias.js', (err) => {
        if (err) t.fail();
        else t.pass();
    });;
});