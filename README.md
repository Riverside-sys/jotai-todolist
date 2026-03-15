# Jotai Todo List

这是一个基于 React 和 [Jotai](https://jotai.org/) 状态管理库构建的简单待办事项（Todo List）应用。项目使用了 Vite 作为构建工具，并集成了 Ant Design (antd) UI 组件库。

## 项目特点

- **轻量级状态管理**：使用 Jotai 进行原子化的状态管理，简单高效。
- **响应式设计**：基于 Ant Design 组件库，提供美观且响应迅速的用户界面。
- **TypeScript 支持**：全量使用 TypeScript，提供更好的开发体验和代码健壮性。
- **动画效果**：集成 `@react-spring/web` 实现流畅的交互动画。
- **开发工具**：集成了 `jotai-devtools`，方便在开发过程中调试状态。

## 技术栈

- **框架**: React 19
- **状态管理**: Jotai
- **构建工具**: Vite
- **UI 组件库**: Ant Design (antd)
- **动画**: react-spring
- **语言**: TypeScript

## 快速开始

### 1. 安装依赖

推荐使用 `pnpm` 安装依赖：

```bash
pnpm install
```

或者使用 `npm` / `yarn`:

```bash
npm install
# 或
yarn install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

启动后，访问浏览器控制台输出的地址（通常是 `http://localhost:5173`）即可查看应用。

### 3. 构建生产版本

```bash
pnpm build
```

构建产物将生成在 `dist` 目录中。

## 项目结构

- `src/common/store`: 存放 Jotai 的 atoms（状态定义）。
- `src/components`: 存放业务组件（如 TodoItem, Todolist, Filter 等）。
- `src/App.tsx`: 应用主入口组件。
- `src/main.tsx`: 项目渲染入口。
