# 湖北呈尚营销策划有限公司展示页

这是一个基于 Vite + React 的静态展示项目，适合直接部署到 GitHub Pages。

## 本地运行

前置要求：Node.js 20 及以上。

1. 安装依赖：
   `npm install`
2. 启动开发环境：
   `npm run dev`
3. 本地构建：
   `npm run build`
4. 运行测试：
   `npm test`

## GitHub Actions 自动部署

项目已内置 GitHub Pages 工作流，推送到 `main` 分支后会自动完成以下流程：

1. 安装依赖
2. 执行类型检查
3. 运行测试
4. 构建静态站点
5. 发布到 GitHub Pages

工作流文件位于：
`./.github/workflows/deploy.yml`

## 仓库设置

首次启用时，请在 GitHub 仓库中确认以下设置：

1. 打开 `Settings -> Pages`
2. 在 `Build and deployment` 中选择 `GitHub Actions`

部署完成后，站点地址通常为：
`https://baech0485-sketch.github.io/csgongsizhanshi/`

## 说明

- 工作流会自动根据仓库名设置构建基路径，无需手动修改发布路径。
- 当前项目是纯静态前端，可直接部署到 GitHub Pages，不依赖服务端密钥。
