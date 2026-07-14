# CrossBorder Workspace

Building AI Workspace for Modern Cross-border Sellers.

🚧 Under Active Development

## Structure

```
crossborder-workspace/
├── apps/
│   ├── blog        # Astro 博客
│   ├── workspace   # 主 Web 应用 (Next.js)
│   ├── api         # FastAPI 后端
│   └── worker      # Python 后台任务（预留）
├── packages/
│   ├── ui          # 共享 UI 组件
│   ├── ai          # AI 服务客户端
│   ├── shared      # 共享业务逻辑
│   ├── types       # TypeScript 类型定义
│   ├── utils       # 通用工具函数
│   └── config      # 共享配置（tsconfig 等）
└── docs/
```

## Prerequisites

- Node.js >= 20
- pnpm >= 10
- Python >= 3.11

## Getting Started

```bash
pnpm install
pnpm dev
```

## License

MIT
