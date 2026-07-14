# ADR-002: Use Next.js for Main Web App

## Status

Accepted (2026-07-14)

## Context

workspace（主应用）的框架选型。项目为"未开始"状态，无存量 Vue3 代码需兼容。

考虑选项：
- **Next.js** — React 全栈框架，SSR/SSG/API Routes 开箱即用
- **Vue 3 + Nuxt** — 与用户历史项目一致，但 Nuxt 生态成熟度不及 Next
- **纯 SPA (Vue 3 / React)** — 缺少 SEO 和首屏性能优势

## Decision

选择 Next.js 15（App Router）。

## Rationale

- **SEO 需求**: 选品工具需要落地页和内容营销，SSR/SSG 是刚需
- **全栈能力**: Next.js API Routes 在早期可替代部分后端工作，加快 MVP
- **Turborepo 同源**: 与 Turborepo 同为 Vercel 出品，`turbo.json` 的 Next.js 缓存策略开箱即用
- **社区与招聘**: Next.js 开发者基数大，后续团队扩展成本低
- **App Router**: React Server Components 适合数据密集型的看板页面

## Consequences

- 团队需掌握 React / Next.js（与用户历史 Vue3 经验不同）
- 早期可用 API Routes 快速验证，正式上线后由 FastAPI 接管
