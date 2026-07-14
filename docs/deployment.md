# 部署指南

## Docker 部署

```bash
# 构建并启动所有服务
docker compose up -d

# 查看日志
docker compose logs -f
```

## 手动部署

### 后端

```bash
# 使用 systemd 管理服务
sudo cp deploy/crossborder-api.service /etc/systemd/system/
sudo systemctl enable --now crossborder-api
```

### 前端

```bash
cd frontend
pnpm build
# 产物在 dist/ 目录，通过 Nginx 托管
```

## 环境变量

参考 `.env.example`，主要配置项：

| 变量 | 说明 |
|------|------|
| `DATABASE_URL` | PostgreSQL 连接串 |
| `REDIS_URL` | Redis 连接串 |
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥 |
| `AMAZON_API_KEY` | Amazon SP-API 密钥 |
