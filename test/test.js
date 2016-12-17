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
test.serial('list', (t) => {
    exec('node fi.js -l');
    t.pass();
});