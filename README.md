# Docker Config

## 标签

建议私有镜像在本地重新打标签为 `image:local` 格式，比如 `lims2:local`, `redis:local`。

```bash
# 安装 docker-compose
curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 加载私有镜像
docker load < *.tar
# 重新标签
docker tag IMAGE_ID XXX:local

# 启动容器
docker-compose -f compose/docker-compose.yml up -d
```

由于从 IP 改为 hostname 可能会导致原先的配置项需要调整，这里暂不建立网络。
