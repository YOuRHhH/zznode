# 开发规范

## Problem

* 因为`nodejs`很多`api`只支持`CJS mode`不支持`ESM mode`，所以不在此库开发有关`nodejs`的工具函数
  * 如`文件读取`、`写入文件`等等
  * 解决方案开发`nodejs`库，暂时命名为`@zzcpt/node`
  * `@zzcpt/zztool`和`@zzcpt/node`一起开发维护
  * `@zzcpt/zztool`
    * ESM 模式
    * 纯粹工具函数（跨平台，浏览器 + Node 都可用）
    * 不涉及 Node-only API（如 `fs`、`path`、`module`、`process`）
  * `@zzcpt/node`
    * Node-only 功能库
    * **CJS/ESM** 模式
    * 仅在 Node.js 上运行
    * 提供 Node 专用工具函数

## 3.0.0 [VERSION]

* 在`3.0.0`决定添加DOM操作工具函数
* `Node`不支持
* `Browser`全线支持，不会兼容`IE`
* `Mini Program`后续更新可能会支持

## Ban

1. 非重大BUG，禁止修改通用逻辑。

