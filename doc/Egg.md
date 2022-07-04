### Egg常用知识点
- 拓展
`app/extend下增加拓展`

| 拓展点      | 说明                                     | 使用方式          |
| ----------- | ---------------------------------------- | ----------------- |
| application | 全局应用对象                             | this.app          |
| context     | 请求上下文                               | this.ctx          |
| request     | 请求级别的对象，提供请求相关的属性和方法 | this.ctx.request  |
| response    | 请求级别的对象，提供相应相关的属性和方法 | this.ctx.response |
| helper      | 帮助函数                                 | this.ctx.helper   |

- 中间件
1. app/middleware下增加中间件
2. config/config.default.js中config.middleware数组添加后使用
3. config/config.default.js中，`config.[middlewareName]为插件增加配置

- 插件
1. lib/plugin下增加新插件
2. config/plugin.js中注
3. 如果插件中含中间件，需在app.js中push后使用
4. config/config.default.js中，`config.[pluginName]为插件增加配置
5. 插件也是一个egg应用，目录规则遵守egg规范

- 定时任务
1. app/schedule下增加[定时任务](https://www.eggjs.org/zh-CN/basics/schedule)
