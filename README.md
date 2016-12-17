# fast-init
[![Build Status](https://travis-ci.org/KingNigel/fast-init.svg?branch=master)](https://travis-ci.org/KingNigel/fast-init)
[![Coverage Status](https://coveralls.io/repos/github/KingNigel/fast-init/badge.svg)](https://coveralls.io/github/KingNigel/fast-init)

快速打造自己的模板，快速创建文件。
v0.1.0版重大修改，将原来的工具使用fi命令修改f命令。
## 命令
```
  Usage: f [options]

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
###1. f -i <path>@[alias] 加载文件模板

- path：要装载的模板路径，路径必须正确。
- alias：包的别名，模板装载后的使用可以通过别名简化操作

###2. f -l 查看模板列表
- 将已经装载模板的信息输出到控制台

###3. f -d <alias>  删除模板
- 删除装载的模块，<alias>为模板别名，可以通过 fi -l 查看

###4. f -u <alias>@[name] 使用模板
- 已别名为<alias>的模板创建文件，[name]为创建文件的文件名，如果不写，按原文件名创建。

