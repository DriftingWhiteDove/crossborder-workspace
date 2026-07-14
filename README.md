# CrossBorder Workspace

跨境电子商务一站式工作台 —— 选品分析、竞品监控、运营管理与数据洞察集成平台。

## 功能特性

- **选品分析** — 多平台（Amazon、AliExpress、Shopee、Lazada）选品数据聚合与趋势分析
- **竞品监控** — 自动化竞品价格、销量、Review 变化追踪
- **运营管理** — Listing 优化建议、广告投放辅助、库存预警
- **数据看板** — 核心 KPI 可视化，支持自定义报表
- **AI 赋能** — 基于大模型的智能文案生成、市场洞察与决策建议

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vue 3 + TypeScript + Vite |
| 后端 | Python FastAPI |
| 数据库 | PostgreSQL + Redis |
| AI | DeepSeek API / Claude API |
| 部署 | Docker + GitHub Actions |

## 项目结构

```
crossborder-workspace/
├── frontend/          # Vue 3 前端
├── backend/           # FastAPI 后端
├── docs/              # 文档
├── scripts/           # 工具脚本
└── deploy/            # 部署配置
```

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/DriftingWhiteDove/crossborder-workspace.git

# 后端启动
cd backend
poetry install
poetry run uvicorn app.main:app --reload

# 前端启动
cd frontend
pnpm install
pnpm dev
```

## License

MIT
