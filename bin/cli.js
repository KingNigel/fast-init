#!/usr/bin/env node
var program = require('commander');
var install=require('../lib/install');
var list=require('../lib/list');
var use=require('../lib/use');
var installDescription='The path must be the true path，[alias] is a key to the templet .'+
'\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'+
'If [alias] is not set,the filename will be the default key.';
var listDescription='List the templet.';
var deleteDescription='The alias must be the true alias，you can see it by \'-l\'.';
var useDescription='To initialize a file with a templet.<alias> is a key to a templet.'+
'\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'+
'A file well be created，[name] as a filename will be created.';

// function range(val) {
//   return val.split('..').map(Number);
// }

// function list(val) {
//   return val.split(',');
// }

// function collect(val, memo) {
//   memo.push(val);
//   return memo;
// }

// function increaseVerbosity(v, total) {
//   return total + 1;
// }

program
  .version('1.0.0')
  .usage('[options]')
  .option('-i, --install <path>@[alias]',installDescription,install)
  .option('-l, --list ',listDescription, list.showList)
  .option('-d, --delete <alias>',deleteDescription,list.del)
  .option('-u, --use <alias>@[name]',useDescription,use)
  



//   .option('-f, --float <n>', 'A float argument', parseFloat)
//   .option('-r, --range <a>..<b>', 'A range', range)
//   .option('-l, --list <items>', 'A list', list)
//   .option('-o, --optional [value]', 'An optional value')
//   .option('-c, --collect [value]', 'A repeatable value', collect, [])
//   .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
program
  .parse(process.argv);
  
//if (program.peppers) console.log('  - peppers');
// console.log(' int: %j', program.integer);
// console.log(' float: %j', program.float);
// console.log(' optional: %j', program.optional);
// program.range = program.range || [];
// console.log(' range: %j..%j', program.range[0], program.range[1]);
// console.log(' list: %j', program.list);
// console.log(' collect: %j', program.collect);
// console.log(' verbosity: %j', program.verbose);
// console.log(' args: %j', program.args);




// program
//   .version('0.0.1')
//   .usage('[options] <file ...>')
//   .option('-i, --integer <n>', 'An integer argument', parseInt)
//   .option('-f, --float <n>', 'A float argument', parseFloat)
//   .option('-r, --range <a>..<b>', 'A range', range)
//   .option('-l, --list <items>', 'A list', list)
//   .option('-o, --optional [value]', 'An optional value')
//   .option('-c, --collect [value]', 'A repeatable value', collect, [])
//   .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
//   .parse(process.argv);