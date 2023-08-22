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

9.token永久保存
9.1 localStorage
9.2 sessionStorage
对localStorage和sessionStorage进行封装，在utils中创建cache.ts 。在login的store中，token的默认值就从封装的函数拿，为空就''，这样就解决了刷新数据丢失问题
9.3 大型的后台项目，把一些通用的关键字，抽成常量，这样可以避免写错(在global中定义常量)

10 当用户登录成功->跳转首页
10.1 在缓存完成后进行跳转,当用户第一次没有登录，在浏览器中访问后台系统，第一次会跳入main页面，因为router路由做了重定向（如果未登录修改访问链接会跳转到首页）。所以跳转时要有守卫进行拦截，判断用户是否登录，，登录了就跳到main，没有登录就跳登录页面
解决：导航守卫
只有当跳转的是/main 页面并且token没有的时候，跳转到登录页面

11.退出登录按钮
11.1 1.删除token
11.2 2.跳转登录页面

12.记住密码功能
12.1 点击登录按钮后进行判断，但是账号密码在子组件当中。父组件获取子组件数据。两种方法1.子组建传递出账号密码2.父组件把是否记住密码传给子组件，然后在子组件中操作(登陆成功就本地保存密码)
12.2 初始化账号密码时在本地获取name和password，如果有就用，没有就位空

13.3当记住密码后点击退出登录，记住密码选项变成默认不勾选。（我们可以在点击时就记录当前的状态，然后根据它的状态给他初始化值:通过watch来控制）
13.4当不勾选时，删除name 和 password的本地保存

14.通过登录后进入首页（非常重要的 权限管理）
不同人登录后台管理系统时，同样回进入main页面。但是他们最终呈现的东西是不一样的。
权限管理：根据登录用户的不同，呈现不同的后台管理系统问题
不会给用户直接分配权限，而是给用户一个角色。（如超级管理员，管理员）再给超级管理员，管理员分配权限

后台数据库的表结构
用户表 角色表（管理员，超级管理员，员工） 关系表（记录了‘角色’和‘权限表’ 的关系） 权限表（商品菜单，音乐菜单）
每个用户对应着一种角色，每个角色表对应着多个菜单权限（多对多）

14.1 1.我们登录成功 只拿到了用户的id/name/token ,2.我们不知道用户的角色？，3.我们就不知道用户权限？
所以我们需要获取用户‘角色’，根据角色获取用户权限

1.获取用户角色（根据id获取用户的详细信息）
发送网络请求拿到用户详细信息(在页面跳转前请求) （这类请求需要授权，要携带token）
在请求拦截时，把token放到header里面 token前面加上'Bearer '

把用户详细信息保存到login的store中和本地保存

如何指定state的类型 （保存到state中的数据类型有问题，我们需要指定）

state是一个箭头函数，里面的类型会自动推导，我们需要改变里面的类型，就要修改函数返回值的类型，（定义一个接口，接口里面写了需要的类型，根据请求的数据写，在（）：类型，():类型=>{}）

2.根据角色请求用户的权限（菜单menus）保存到store和和本地保存(state的默认数据从本地拿，防止刷新后数据丢失)

15.main页面布局（三部分，菜单栏，导航栏，内容）
element puls的组件
15.1.把菜单栏和header分别封装成一个独立的组件
15.2.先手动搭建菜单，在根据服务器数据来展示菜单

15.3.在菜单组件中获取动态菜单（从store中拿）然后遍历生成之前手动搭建的代码

15.4.图标一般是后台返回的是字符串，我们需要将字符串转成element的图标组件：component 动态组件

16.编写 header 头部布局
16.1记录收缩按钮状态变化,在子组件header中点击，父组件的宽度也需要变化，用到自定义事件

16.2编写header 个人信息
个人信息后面可能会比较多的内容，封装成一个组件.鼠标移入个人信息会下拉菜单，这个下拉组件不在id未app的页面里面（调试看html结构）。如果要改变它的样式（直接拿，用deep拿都拿不到）但可以使用:global(类名称){}改变它的样式 （全局样式，给整个html设置样式）

17.点击菜单栏切换路由
在el-main使用占位符，并且创建对应映射，这是二级路由，只有跳转到main页面才行
方法一：（通过菜单进行权限管理）创建一个页面，配置一个路由映射（这种方法最简单）有漏洞（不管谁进来都要注册所有路由），在地址栏输入其他权限的页面地址也可以跳转过去（即便没有权限）

方法二：（动态路由）根据不同的用户（菜单），动态的注册应该有的路由，而不是一次性将所有的路由注册到router中
实现：动态路由

实现一（动态路由）：基于角色（Role）的动态路由管理
const roles = {
"superadmin":[所有路由], //超级管理员
"admin":[一部分路由],
"service":[少部分路由]//客户
}

登录接口请求了三个接口
1.token 2.用户信息，角色信息（role对象）3.菜单信息. 我们就根据角色信息去匹配roles的路由。把匹配的路由加入到合适的位置（router.main.children）

<!-- 弊端：每增加一个角色，都要增加key/value，要不前端直接加上新增的路由然后重新打包发布。要不就是后端返回的路由，然后再添加到roles中 -->

采用实现二
实现二 （动态路由）：基于菜单（menu）的动态路由管理
我们拿到了菜单信息：=> 已经动态的展示了菜单了（系统总览/核心技术/用户管理/角色管理..）没有对应的权限就没有这个菜单
所以把菜单映射成路由对象

在router文件夹中创建 和view相同目录结构的文件夹（内创建ts文件），并返回该页面对应的路由对象

根据菜单动态添加路由对象（现在路由对象都保存在一个一个对应的文件夹中）

1.获取菜单

2.动态获取所有的路由对象（路由对象都在独立的文件中，从文件中将所有路由对象先读取到数组中）

3.根据菜单去匹配正确路由，把匹配到的菜单加入到router中addRouter 1.编写方法加载本地路由放入数组并返回2.编写方法遍历菜单判断路径筛选匹配路由并返回3.在跳转main页面前遍历2返回的数组并添加到main路由（刷新后路由消失，因为获取路由的方法写在登录的时候还没有跳转之前，跳转过后并没有从新获取路由导致路由丢失）
（刷新后代码会重新执行，只会加载router里面写好的路由）
解决办法：在刷新的时候再映射一次1.我们必须保证store中的菜单已经加载完成后，再去映射

1.在logo的stoer中添加actions方法，刷新页面数据重新获取

2.在main.ts页面的app.use(pinia) 后面去调用login的store的刷新后数据重置的方法（注意在app.use(router)前面）
app.use(pinia) 抽成一个函数，在store的index.ts中导出一个函数，并在main.ts中使用
这个函数（带参数把main.ts中的app传过来，自动传过去并写泛型）1.首先使用pinia app.use(pinia) 2.获取本地logon的store，然后调用刷新后数据重置的方法

4.在store中写的方法太多抽离一些出去，当作工具使用，在utils里面 map-menus.ts (映射路由工具)

总结（动态路由）
进行本地缓存之后，写动态路由1.首先创建一个方法map-menus.ts（加载本地路由，就是写在router中和view文件夹一样目录结构里面的文件）两个方法：1.本地路由写入数组，2.根据菜单匹配路由，如果在本地的路由中找到菜单就find出来，放到新数组，并返回.然后在页面跳转前把find出的数组添加main的路由里面.

main页面刷新保持路由注册
接着在login的store中，写刷新后数据重置的方法，在token 和userinfo和菜单都有的情况下。再去执行一遍，调用map-menus.ts（获取根据菜单加入路由的方法）

这个方法要确保在菜单完全的到后调用，所以我们可以在mait.ts中调用这个方法.（由于直接在根文件写逻辑不美观，影响阅读.我们把app.use(pinia抽离出去)）
抽离pinia：在store中的index.ts中，是导出pinia的。我们改成导出一个函数，这个函数在mait.ts中调用，会自动传入app。所以我们先使用app.use（pinia）。然后获取本地数据
拿到store。再调用之前创建的 刷新重置store数据的方法 （该方法刷新后会从新映射路由）

在main.ts中使用store中导出的函数，注意需要在router之前调用

18.在登录时，第一次进入的是main页面，但是没有对应的页面是空白的（一般都是匹配的第一个页面）（某些用户权限不用，第一个页面可能也不同）、
登录成功时，第一次的进入的页面，动态注册所有的页面中，第一个页面（保留动态路由的第一个页面）
在我们获取动态路由的map-menus.ts方法中 定义一个全局遍历并导出.我们在遍历时第一个路由赋值给他

在路由守卫的地方，去跳转(当跳转到main时就去第一个路由对象页面)（不管是登录还是修改访问地址都可以跳转到指定页面）
