---
title: mongodb in eggjs
date: 2019-11-16
---

### 创建项目

```js
egg-init egg-mongoose --type=simple
cnpm install
cnpm install egg-mongoose --save
npm run dev
```

### 配置

::: tip
config/plugin.js
:::

```js
exports.mongoose = {
  enable: true,
  package: "egg-mongoose"
};
```

::: tip
config/config.default.js
:::

```js
config.mongoose = {
  client: {
    url: "mongodb://eggadmin:123456@127.0.0.1/eggcms",
    options: {}
  }
};
```

### 数据库

::: tip
app/model/user.js
:::

```js
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  });
  return mongoose.model('User', UserSchema,'user');
};
```

::: tip
app/service/user.js
:::

```js
class UserService extends Service {
  async list() {
    const { ctx } = this;
    const list = await ctx.model.user.find({});
    return list;
  }

  async detail(id) {
    const { ctx } = this;
    const detail = await ctx.model.user.findById(id);
    return detail;
  }
}
```

::: tip
app/controller/user.js
:::

```js
"use strict";

const Controller = require("../core/base_controller");

class UserController extends Controller {
  async list() {
    const list = await this.service.user.list();
    this.success(list);
  }

  async detail() {
    const { ctx, service } = this;
    const res = await service.flow.detail(ctx.params.id);
    this.success(res);
  }
}

module.exports = UserController;
```

::: tip
app/router.js
:::

```js
"use strict";

module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);

  router.get("/flows", controller.user.list);
  router.get("/flows/:id", controller.user.detail);
  // router.patch('/flows/:id', controller.flow.modify);
  // router.del('/flows/:id', controller.flow.destroy);
};
```
