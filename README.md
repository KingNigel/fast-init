# fast-init
[![Build Status](https://travis-ci.org/KingNigel/fast-init.svg?branch=master)](https://travis-ci.org/KingNigel/fast-init)
[![Coverage Status](https://coveralls.io/repos/github/KingNigel/fast-init/badge.svg)](https://coveralls.io/github/KingNigel/fast-init)

快速打造自己的模板，创建文件。
## 命令
```
  Usage: fi [options]

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number
    -i, --install <path>@[alias]  The path must be the true path，[alias] is a key to the templet .
                                  If [alias] is not set,the filename will be the default key.
    -l, --list                    List the templet.
    -d, --delete <alias>          The alias must be the true alias，you can see it by '-l'.
    -u, --use <alias>@[name]      To initialize a file with a templet.<alias> is a key to a templet.
                                  A file well be created，[name] as a filename will be created.
```
###1. fi -i <path>@[alias] 加载文件模板
###2. fi -l 查看模板列表
###3. fi -d <alias>  删除模板
###4. fi -u <alias>@[name] 使用模板

