# XINGJI Studio Website

XINGJI工作室官方网站，使用 Vue 3 + TypeScript + Tailwind CSS + Vite-SSG 构建。

## 环境要求

- Node.js >= 20

## 非常重要！

新版XINGJI官网需要搭配上[XJ-Auth](https://github.com/xingji-studio/xj-auth)套件使用！请务必先安装并配置好XJ-Auth，再继续以下步骤。

如果你不想使用登录功能，可以自行删去相关的代码。

## 项目设置

1. 克隆项目

```bash
git clone https://github.com/xingji-studio/XINGJI-offical-website.git
cd XINGJI-offical-website
```

2. 安装依赖

```bash
npm install
```

3. 写`.env`

```
# API Configuration
VITE_API_BASE_URL=https://api.example.com
```

4. 启动开发服务器

```bash
npm dev
```

现在可以在浏览器中访问 http://localhost:5173 查看网站。

5. 构建生产版本

```bash
npm build
```

构建后的文件将位于 `dist` 目录中。

## 技术栈

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 许可证

[MIT License](LICENSE)
