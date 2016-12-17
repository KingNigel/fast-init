var program = require('commander');
var install=require('../lib/install');
var list=require('../lib/list');
var use=require('../lib/use');
 var installDescription='The path must be the true path，[alias] is a key to the templet.'+
 '\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'+
 'If [alias] is not set,the filename will be the default key.';
 var listDescription='List the templet.';
 var deleteDescription='The alias must be the true alias，you can see it by \'-l\'.';
 var useDescription='To initialize a file with a templet.<alias> is a key to a templet.'+
 '\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'+
 'A file well be created，[name] as a filename will be created.';
program
  .version('1.0.0')
  .usage('[options]')
  .option('-i, --install <path>@[alias]',installDescription,install)
  .option('-l, --list ',listDescription, list.showList)
  .option('-d, --delete <alias>',deleteDescription,list.del)
  .option('-u, --use <alias>@[name]',useDescription,use)
program
  .parse(process.argv);