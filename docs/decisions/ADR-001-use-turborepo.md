# ADR-001: Use Turborepo + pnpm Workspace

## Status

Accepted (2026-07-14)

## Context

项目需要 Monorepo 管理多个 App（博客、主应用、API、Worker）和共享 Package（UI、AI、工具库等）。

备选方案：
- **Turborepo + pnpm** — Vercel 出品，与 Next.js 生态同源，零配置即可并行任务调度
- **Nx** — 功能最强，支持生成器、依赖图可视化，但学习成本高、配置重
- **pnpm workspace 纯原生** — 最轻量，但缺少缓存和任务编排

## Decision

选择 Turborepo + pnpm。

## Rationale

- **Turborepo vs Nx**: 当前项目规模小，Nx 的生成器和插件体系属于过度设计（YAGNI）。Turborepo 的 `turbo.json` 配置极简，缓存和并行执行足够用
- **pnpm vs npm/yarn**: pnpm 的 workspace 协议原生支持 `packages/*` 模式，依赖安装速度快，磁盘效率高
- **项目规模**: 4 个 App + 6 个 Package，Turborepo 恰好覆盖，未来扩展也不需迁移

## Consequences

- 构建流水线依赖 `turbo.json` 统一编排
- 跨 App 共享代码需走 `@crossborder/*` 包引用
- 迁移到 Nx 的成本较低（Nx 兼容 pnpm workspace）
