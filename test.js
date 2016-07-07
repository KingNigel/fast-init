import test from 'ava';
const fs = require('fs');
const exec = require('co-exec');

test('install', function* (t) {
    const command1 = yield exec('node fi.js -i package.json@test');
    const command2 = yield exec('node fi.js -i package.json');
    setTimeout(function () {
        t.true(fs.accessSync('./templet/test.json') === undefined);
        t.true(fs.accessSync('./templet/package.json') === undefined);
        let list = JSON.parse(fs.readFileSync('./list.json', 'utf8'));
        t.true(list.test.fileName === 'package.json' && list.test.trueName === 'test.json');
        t.true(list.package.fileName === 'package.json' && list.package.trueName === 'package.json');
    }, 1000);
});
test('delete', function* (t) {
    const command1 = yield exec('node fi.js -i package.json@delete');
    let list = JSON.parse(fs.readFileSync('./list.json', 'utf8'));
    t.true(fs.accessSync('./templet/delete.json') === undefined);
    t.true(list.delete.fileName === 'package.json' && list.delete.trueName === 'delete.json')
    const command2 = yield exec('node fi.js -d delete');
    setTimeout(function () {
        fs.access('./templet/delete.json', (err) => {
            if (err) t.pass();
            else t.fail();
        });
        list = JSON.parse(fs.readFileSync('./list.json', 'utf8'));
        t.true(list.delete === undefined);
    }, 2000);
});
test('use', function* (t) {
    const command1 = yield exec('node fi.js -u i');
    const command2 = yield exec('node fi.js -u i@initAlias');
    const command3 = yield exec('node fi.js -u i@initAlias.js');
    setTimeout(function () {
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
        });
    }, 3000);
});
test('list', function* (t) {
    const command = yield exec('node fi.js -l');
    t.pass();
});