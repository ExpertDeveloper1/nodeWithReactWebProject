# front teach & nodejs

## 流行前端技术应用


## 后端目录为src，dist时拷贝到dist/app,Node.js当前版本 6.2.1已经支持除模块外所有的Es6特性,所以可不用gulp处理,直接拷贝到dist目录下
## 前端目录为public，dist时拷贝到dist/public

## 后端介绍

  server.js为应用入口,dist时拷贝到dist目录下.config目录下保存系统配置文件,格式为json.


本地安装的命令在node_modules/.bin目录下面,需要导出export PATH="./node_modules/.bin:$PATH",或者 export PATH="$(npm bin):$PATH"

为了避免首页内容过多,首页只加载最基本的CSS和第一级导航,暂未实现