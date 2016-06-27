#!/usr/bin/env node
var program = require('commander');
var install=require('../lib/install');
var list=require('../lib/list');
var installDescription='The path must be the true path，If [templetName] is not set,the filename will be the default name.';
var listDescription='List the templet.';

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
  .option('-i, --install <path>@[templetName]',installDescription, install)
  .option('-l, --list ',listDescription, list.showList());
  



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