# vue3_ts_cms

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 配置vue文件类型声明

    在env.d.ts文件夹配置 4-9行

# 配置项目环境

    安装volar 和volar+ts插件

# 配置项目代码规范 -见markdown

1.集成editorconfig配置
根目录创建.editorconfig文件
root = true
[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

      [*.md] # 表示仅 md 文件适用以下规则
      max_line_length = off
      trim_trailing_whitespace = false

2.使用prettier工具
Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

    配置vscode 文件->首选项->设置
        1.搜索default format（定义一个默认格式化程序, 该格式化程序优先于所有其他格式化程序设置。必须是提供格式化程序的扩展的标识符。）
        选择Prettier - Code formatter
        2.搜索Format On Save 勾选

1.安装prettier

```shell
npm install prettier -D
```

2.配置.prettierrc文件：

- useTabs：使用tab缩进还是空格缩进，选择false；
- tabWidth：tab是空格的情况下，是几个空格，选择2个；
- printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；
- singleQuote：使用单引号还是双引号，选择true，使用单引号；
- trailingComma：在多行输入的尾逗号是否添加，设置为 `none`，比如对象类型的最后一个属性后面是否加一个，；
- semi：语句末尾是否要加分号，默认值true，选择false表示不加；

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

3.创建.prettierignore忽略文件

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

4.VSCode需要安装prettier的插件

5.VSCod中的配置

- settings =>format on save => 勾选上
- settings => editor default format => 选择 prettier

### 1.3. 使用ESLint检测

1.在前面创建项目的时候，我们就选择了ESLint，所以Vue会默认帮助我们配置需要的ESLint环境。

2.VSCode需要安装ESLint插件：

![image-20210722215933360](https://tva1.sinaimg.cn/large/008i3skNgy1gsq2oq26odj30pw05faaq.jpg)

3.解决eslint和prettier冲突的问题：

安装插件：（vue在创建项目时，如果选择prettier，那么这两个插件会自动安装）

```shell
npm install eslint-plugin-prettier eslint-config-prettier -D
```

添加prettier插件：

```json
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    'plugin:prettier/recommended'
  ],
```

4.VSCode中eslint的配置

```json
  "eslint.lintTask.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

# 项目目录结构划分

base-ui 其他项目公用组件
views 每个页面的视图
hooks 一些可复用的方法像钩子一样挂着，可以随时被引入和调用以实现高内聚低耦合的目标，应该都能算是hook；
......

# CSS样式的重置

.对默认css样式进行重置：
在main.ts导入该样式
npm install normalize.css
npm install reset.css
.normalize.css

在assets/css中创建
.commen.less 复用文件
.index.less 入口文件
.reset.less 修改样式，在网上找一些就行

因为vite不能解析less文件，要安装依赖
npm install less -D

# 全家桶-路由配置

    1. 安装路由：npm install vue-router
    2.在src/router创建index.ts文件
    3.配置好后在main.ts中使用
    4.创建not-found视图：用户输入不存在页面时重定向到这个页面

# 全家桶-状态管理

    1.安装pinia： npm install pinia
    2.在src/store创建index.ts文件
    3.在main.ts中使用pinia
    4.创建对以上store

# 网络请求封装axios

1.安装axios: npm install axios 2.把之前封装好的库 复制过来

# 区分development （开发）和production （生成）环境

.对于有一些变量，它在开发环境下的值和生成环境下的值是不匹配的
例子：
baseURL = "服务器地址" （开发环境服务器地址，和生成环境服务器地址不是同一个，是两台服务器甚至多台。）
有两台服务器对于前端来说 我们要保存的标识符在开发环境和生产环境用的不是同一个

1.Vite的环境变量
Vite在一个特殊的import.meta.env对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量
import.meta.env.MODE:{string}应用运行的模式
import.meta.env.PROD:{boolean}应用是否运行在生产环境
import.meta.env.DEV:{boolean}应用是否运行在开发环境（永远于import.meta.env.PROD相反）
import.meta.env.SSR:{boolean}应用是否运行在server上

2.vite使用dotenv从你的环境目录中的下列文件加载额外的环境变量
里面的变量名必须以VITE开头
.env文件 开发环境生产环境都会读取
.env.development 开发环境读取
.env.production 生产环境读取
.env.local 所有情况都会加载，但会被git忽略
.env.[mode] 只在指定模式下加载
.env.[mode].local 只在指定模式下加载 但会被git忽略

# Element-Plus集成

1.安装element-plus： npm install element-plus 2.安装自动导入插件： npm install -D unplugin-vue-components unplugin-auto-import 3.官网有（然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中）(配置时，指定文件生成位置：dts: 'src/auto-imports.d.ts' 另一个同上)

2.注意：2.当按需引入时会生成两个文件 auto-imports.d.ts components.d.ts 把这两个文件在tsconfig.app.json里配置 "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "auto-imports.d.ts", "components.d.ts"],

3.按需导入只会导入<template></template>里面的组件，不会帮我们自动导入 ‘反馈组件’ 例如：Loading。因为这些组件是在<script>标签使用的

1.图标引入-搭建登录页面1.创建global文件和register-icons.ts,定义一个函数接收一个参数（传过来的app）并导出。在main.ts中use使用（和pinia一样）。注意传过来的app类型。然后按照官网步骤将icon图标创建成组件

2.封装帐号登录，手机登录组件，并编写表单校验

3.点击登录获取帐号密码，父组件获取子组件的值 两种办法1.子组件传递出来 2.父组件点击按钮后执行子组件的方法，登录操作在子组件进行，我们用方法2
使用defineExpose传出子组件方法给父组件使用
在3中 获取子组件需要绑定ref，但是ref要指定泛型这样提示会更友好，我们不知道这个组件的泛型是什么如下

4.导入的组件是setup语法糖导出的对象，它是一个‘实例’，那我想知道这个实例的类型怎么办？
这个实例可以当成类型使用，ts语法：InstanceType<typeof 构造器>返回构造器创建的实例的类型

5.完成用户登录输入时表单验证报错，点击登录无效效果. 1.给帐户登录的from一个ref 同上给ref定义泛型，通过ref拿到from表单验证结果

6.当输入错误弹出反馈组件，反馈组件和它的样式需要手动引入，1.解决办法下载 npm i vite-plugin-style-import -D （vite-plugin-style-import包依赖consola包也要下载 npm i consola -D）2.配置vite.config.ts 可以百度搜索

7.在网络请求文件夹创建 登录请求方法login 传入url 和 参数并执行

8.登录成功保存登录信息（保存到pinia）

8.1.在store中创建login的store，并且登录请求放到store中进行,请求成功保存信息
8.2.保存到pinia中（但是刷新数据会消失，所以需要保存到其他地方）
8.3.登录请求参数any类型不严谨，所以可以在login文件夹下创建一个type文件夹用来管理通用的 类型或接口 (这个类型放在哪里好？ 建议1.放在起源的地方，哪里第一次用.建议2.直接在scr目录下创建一个types文件来管理)
