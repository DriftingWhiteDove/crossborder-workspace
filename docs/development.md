# 开发指南

## 环境要求

- Python 3.11+
- Node.js 20+
- pnpm 9+
- PostgreSQL 16+
- Redis 7+

## 本地开发

### 后端

```bash
cd backend
poetry install
cp .env.example .env  # 配置环境变量
poetry run alembic upgrade head
poetry run uvicorn app.main:app --reload
```

### 前端

```bash
cd frontend
pnpm install
pnpm dev
```

## 代码规范

- **Python**: Ruff + Black 格式化，严格类型注解
- **TypeScript**: ESLint + Prettier
- **Git**: Conventional Commits 规范
