# 官网头像和用户名

导航栏在浏览器挂载后请求 `GET /api/v1/site/profile`，利用用户中心现有的 HttpOnly 会话 Cookie 读取当前用户。官网不需要 OAuth 客户端密钥，不接收、保存或转发登录令牌。SSG 构建期间不会请求用户资料，也不会把个人资料写入静态页面。

已登录时，桌面头像和移动端菜单顶部使用真实头像，移动端显示真实用户名；没有上传头像或图片加载失败时使用默认账户图标。未登录时显示“登录 / 注册”。服务暂不可用时保留“用户中心”入口。首次访问、重新打开移动菜单以及返回官网标签页时会更新资料，重复事件会合并，单次请求最多等待 8 秒。

## 生产配置

默认用户中心地址是 `https://uc.xingjisoft.com`，可通过构建环境变量 `VITE_USER_CENTER_URL` 指定其他 HTTPS origin。仅本地回环地址可使用 HTTP。变量为公开地址，不能填写密钥；修改后需要重新构建官网。

用户中心需部署对应接口，在用户中心环境中配置并重启：

```dotenv
UC_SITE_ALLOWED_ORIGINS=https://www.xingjisoft.com,https://xingjisoft.com
UC_COOKIE_SECURE=true
```

仅这个资料接口向明确允许的 Origin 开放携带凭据的 CORS。官网使用 `credentials: include` 和 `cache: no-store`，响应也须禁止缓存；反向代理应透传 Origin、保留接口的 CORS/Vary/Cache-Control 响应头，并且不能缓存个人资料响应。头像本身可以按 UUID URL 缓存。

官网与用户中心都使用 HTTPS，属于 `xingjisoft.com` 的同站子域，能使用现有 host-only、HttpOnly、SameSite=Strict Cookie。localhost、临时预览域名等跨站来源不能沿用生产登录 Cookie，仅添加 CORS 允许列表并不能解决这个限制。

接口返回：

```json
{"errno":0,"data":{"username":"example_user","avatar_url":"/api/v1/avatars/e626da55-247c-4e99-b12b-a7cb7ff6b769"}}
```

匿名会话返回 `{"errno":0,"data":null}`。相对头像地址以用户中心 origin 解析，不能以官网 origin 解析。官网只加载用户中心 `/api/v1/avatars/<UUID>` 下的头像。

## 本地联调

1. 在本地用户中心启用 debug，配置 `UC_COOKIE_SECURE=false` 和 `UC_SITE_ALLOWED_ORIGINS=http://localhost:5173`，启动 `http://localhost:8080`。如果官网使用其他端口，需要登记实际 Origin。
2. 在官网 `.env.local` 设置 `VITE_USER_CENTER_URL=http://localhost:8080`，运行 `npm run dev -- --port 5173 --strictPort`。
3. 浏览器先访问 `http://localhost:8080` 并登录、上传头像，再返回官网。两端均使用 `localhost`，不要混用 `127.0.0.1`。
4. 检查桌面头像、移动菜单用户名、替换头像后返回官网自动更新，以及退出登录后的默认图标和登录入口。

协议与后台部署细节见 UserCenter 仓库的 `docs/SITE_PROFILE.md`、`docs/AVATARS.md`。

## 验证

```sh
node --test tests/*.test.mjs
npm run build
```

服务层测试覆盖地址配置、头像 URL 边界、会话请求参数、匿名状态和服务异常；SSG 测试确认导航栏静态渲染不请求个人信息。浏览器验证还需覆盖真实凭据 CORS、头像文件失败回退和返回标签页刷新。
