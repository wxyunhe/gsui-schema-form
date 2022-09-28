
## 开发参考资料

### 0. 仓库介绍

本仓库使用 monorepo 形式管理，开发包在 packages 文件夹下。

- `packages/demo` 文件夹下存放 playground 和在线表单生成器
- `packages/lib/vue2` 文件夹下存放 schema 组件

在开发前，本地需要安装 `yarn`，其他命令请查看 `package.json` 自行使用

### 1. 如何开发自己的组件

组件均使用 functional 函数式组件开发，具体参考 https://cn.vuejs.org/v2/guide/render-function.html

### 2. 代码提交规范

提交日志遵循 angular 提交规范，具体参考：https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits

### 3. 使用 docker 自托管部署 Playground 和 可视化表单 Schema 生成器

```powershell
docker run --name vue-schema-form-html -p 41320:80 -d -v /data1/vue-schema-form:/usr/share/nginx/html nginx

```

这句话代表使用 docker 在外部端口 41320 启动一个 nginx 服务，同时将外部的 /data1/vue-schema-form 映射到 /usr/share/nginx/html
