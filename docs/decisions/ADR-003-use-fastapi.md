# ADR-003: Use Python FastAPI for Backend API

## Status

Accepted (2026-07-14)

## Context

后端框架选型。需要支持 REST API、数据分析管道、AI 模型调用。

备选方案：
- **FastAPI** — Python 异步框架，Pydantic 校验，自动 OpenAPI 文档
- **Next.js API Routes** — 同仓库管理，但不适合 CPU 密集型任务
- **Go (Gin/Fiber)** — 性能最优，但团队 Python 经验更丰富

## Decision

选择 FastAPI。

## Rationale

- **AI 生态**: 跨境选品涉及 DeepSeek/Claude API 调用、数据抓取和清洗，Python 的 AI/ML 生态无可替代
- **Pydantic 模型**: 跨境电商 SKU、价格、库存等数据结构复杂，Pydantic 的类型校验和序列化能减少大量防御代码
- **异步原生**: `async/await` 支持并发抓取多个电商平台数据
- **自动文档**: Swagger UI 与 Redoc 让前端和第三方集成方无需额外维护 API 文档
- **部署友好**: 与 Docker 配合好，`uvicorn` 单进程即可承载 MVP 流量

## Consequences

- 前端与后端的接口契约通过 OpenAPI Schema 同步（可生成 TypeScript 客户端）
- 需维护 Python 和 Node.js 两套运行环境
- Worker 使用纯 Python（Celery / asyncio），与 API 共享数据模型
