<!--
 * @Author: derek.chia
 * @Date: 2022-05-09 18:36:04
 * @LastEditTime: 2022-05-09 19:00:13
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/README.md
-->
# tmis-client

## Main Dependencies

- taro
- react
- mobx
- inversifyjs
- typescript
- taro-ui
- webpack

## Install Dependencies

```
$ yarn
```

## Run dev
### Run WeChat

```
$ yarn dev:weapp
```

微信开发者工具导入小程序，将小程序目录设置为 `dist/`

## Release Build

### Release WeChat

```
$ yarn build:weapp
```

微信开发者应用上传发布


## Project Structure

```
    |-- .vscode                         // VSCode 配置
    |-- config                          // taro 开发，生产环境配置及默认配置
    |-- src                             // 业务功能源码
        |-- common
            |-- components              // 公共组件
            |-- appConfig               // 应用配置（默认配置在这里修改）
            |-- appContext              // 应用上下文，可注入，避免污染 window
            |-- interceptor             // Taro 请求拦截器
        |-- constants                   // 定义的常量及inversifyjs注入时的identifiers
        |-- data                        // clean-architecture data层（repository的具体实现）
        |-- domain                      // clean-architecture domain层
            |-- entities                // 业务实体
            |-- repositories            // 定义如何访问实体
            |-- useCases                // 实体层业务逻辑
        |-- presenters                  // clean-architecture view层（每个目录对应左侧菜单的一个模块）
            |-- index.tsx               // 页面具体的view层代码
            |-- style.less              // 样式
            |-- viewModel.ts            // 处理被观察者的业务逻辑
        |-- app.config.ts               // 应用配置，页面注册，窗口样式等
        |-- app.tsx                     // 入口文件
        |-- index.html                  // 入口页面
        |-- globalDefinitions.ts        // 定义window变量
        |-- inversify.config.ts         // 创建并配置inversifyjs的容器
    |-- .editorconfig                   // 编辑器配置
    |-- .eslintrc.js                    // eslint 配置                  
    |-- .gitignore                      // git 忽略本地文件
    |-- .prettierrc.js                  // prettier 配置
    |-- babel.config.js                 // babel 配置
    |-- global.d.ts                     // typescript 全局类型定义
    |-- package.json
    |-- project.config.json             // taro 微信小程序项目配置
    |-- project.private.config.json     // taro 项目配置
    |-- project.tt.json                 // taro 字节跳动小程序项目配置
    |-- tsconfig.json                   // typescript 配置
    |-- yarn.lock
```

## Q & A

### 不允许引用资源

由于小程序的体积限制，资源比如图片，视频，字体等，都应通过 url 从服务端引用，不应打包进小程序

### taro-ui 使用必须按需加载

由于小程序的体积限制，如需引用 taro-ui 组件必须使用按需加载，参考 [Taro-UI 快速上手](https://taro-ui.jd.com/#/docs/quickstart)，也可参考 `simpleRequest` 示例
