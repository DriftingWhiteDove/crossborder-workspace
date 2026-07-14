# API 文档

> 完整 API 文档将在开发阶段自动生成（FastAPI Swagger UI），
> 本地运行后端后访问 `http://localhost:8000/docs`。

## 接口概览

### 认证

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/v1/auth/register` | 用户注册 |
| POST | `/api/v1/auth/login` | 用户登录 |
| POST | `/api/v1/auth/refresh` | 刷新 Token |

### 商品

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/products` | 商品列表（支持筛选排序） |
| GET | `/api/v1/products/{id}` | 商品详情 |
| POST | `/api/v1/products/sync` | 手动触发数据同步 |

### AI

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/v1/ai/title` | 生成商品标题 |
| POST | `/api/v1/ai/description` | 生成商品描述 |
| POST | `/api/v1/ai/analysis` | 市场分析报告 |
