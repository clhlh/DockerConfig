# G Docker Document

## DIR

    .
    |-- config      config
    |-- README.md   docker run & docker compose

## install docker compose

```shell
# 安装 docker-compose
$ curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

$ chmod +x /usr/local/bin/docker-compose

# 加载私有镜像
$ docker load -i *.tar

# 重新标签
$ docker tag IMAGE_ID XXX:local

# 启动容器
$ docker-compose -f compose/docker-compose.yml up -d
```

## docker run
#### Data_Summary  
```shell
docker run \
    --name summary \
    -d \
    -p 172.17.42.1:3022:9000/tcp \
    -v /data/src:/data/src:rw \
    -v /data/gini-modules:/data/gini-modules:rw \
    -e GINI_ENV=geneegroup \
    -e PATH=/data/gini-modules/gini/bin:/usr/local/share/composer/vendor/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    --restart=always \
    --add-host=www.lims2.com:172.17.42.1 \
    genee/gini:7.1.17-alpine
```

#### Cau-gateway
```shell
docker run \
    --name cau-gateway \
    -d \
    -p 172.17.42.1:3009:9000/tcp \
    -v /data/src:/data/src:rw \
    -v /data/gini-modules:/data/gini-modules:rw \
    -e GINI_ENV=cau \
    --restart=always \
    genee/gini:latest
```

#### PHP7.2 Lims_env
```shell
wget http://files.jingning96.cn/lims2.v1.2.1-d2019110601.tar.gz

docker run \
    --name=lims2_new \
    -d \
    -v /opt/lims2/volumes:/volumes \
    -v /etc/sphinxsearch/conf.d:/etc/sphinxsearch/conf.d \
    -v /etc/lims2:/etc/lims2 \
    -v /etc/msmtprc:/etc/msmtprc \
    -v /var/run/genee-nodejs-ipc:/var/run/genee-nodejs-ipc \
    -v /var/lib/lims2:/var/lib/lims2 \
    -v /var/lib/lims2_vidcam:/var/lib/lims2_vidcam \
    -v /home/disk:/home/disk \
    -p 3007:9000/tcp \
    -p 172.17.42.1:9510:9510 \
    --restart=always \
    --privileged \
    docker.genee.in/genee/lims2:v1.2.1-d2019110601
```

#### RabbitMQ
```shell
wget http://files.genee.cn/docker/rabbitmq.v3.7.17.tar.gz

docker run \
    --name rabbitmq \
    -d \
    -p 5672:5672/tcp \
    -p 15672:15672/tcp \
    -v /home/genee/rabbitmq:/var/lib/rabbitmq:rw \
    --restart=always \
    --privileged \
    -e RABBITMQ_DEFAULT_USER=user \
    -e RABBITMQ_DEFAULT_PASS=dmw2F2fc \
    rabbitmq:3.7.17-management-alpine

```

#### Approval
```shell
docker run \
    --name approval \
    -d \
    -p 3011:9000/tcp \
    -v /data/gini-modules/:/data/gini-modules/:rw \
    -v /home/disk:/home/disk:rw \
    -e GINI_ENV=swu \
    --restart=always \
    genee/gini:php7
```

#### 多站点Nginx
```shell
docker run \
	--name nginx_xatu \
	-d \
	-v /home/genee/nginx_xatu/nginx.conf:/etc/nginx/nginx.conf \
        -v /home/genee/nginx_xatu/fastcgi_params:/etc/nginx/fastcgi_params \
	-v /home/genee/nginx_xatu/sites-enabled:/etc/nginx/sites-enabled \
	-v /home/genee/nginx_xatu/sites-available:/etc/nginx/sites-available \
	-v /home/genee/nginx_xatu/conf.d:/etc/nginx/conf.d \
	-v /var/log/nginx_xatu:/var/log/nginx \
	-v /var/lib/lims2_xatu:/var/lib/lims2:rw \
	-v /data/gini-modules:/data/gini-modules:rw \
	-v /var/www:/var/www \
	-v /var/run:/var/run \
	-p 8080:80/tcp \
	--restart=always \
	--privileged \
	nginx:1.15.8-alpine
```

#### 西安工业 Lims_env
```shell
docker run \
    --name=lims2_xatu_chxy \
    -d \
    -v /opt/lims2/volumes:/volumes \
    -v /opt/lims2/supervisor/conf.d:/etc/supervisor/conf.d \
    -v /etc/lims2:/etc/lims2 \
    -v /etc/msmtprc:/etc/msmtprc \
    -v /var/run/genee-nodejs-ipc:/var/run/genee-nodejs-ipc \
    -v /var/lib/lims2:/var/lib/lims2 \
    -v /var/lib/lims2_vidcam:/var/lib/lims2_vidcam \
    -v /home/disk:/home/disk \
    -p 172.17.42.1:3007:9000/tcp \
    -p 172.17.42.1:9511:9510 \
    --restart=always \
    --privileged \
    docker.genee.in/genee/lims2:v1.2.1-d2019110601
```

#### 新版reserv_server
```shell
wget http://files.genee.cn/docker/reserv-server_v0.8.1-d2019050501.tar.gz

docker run \
    --name=reserv-server \
    -d \
    -v /home/genee/reserv-server/config:/usr/src/app/config \
    -v /home/genee/reserv-server/logs:/usr/src/app/logs \
    -p 172.17.42.1:9898:9898 \
    -p 172.17.42.1:9899:9899 \
    -p 172.17.42.1:9509:9509 \
    --restart=always \
    docker.genee.in/genee/reserv-server:v0.8.1-d2019050501
```

#### Gini-Module
```shell
docker run \
    --name gini-module \
    -d \
    -p 172.17.42.1:3008:9000/tcp \
    -v /data/src:/data/src:rw \
    -v /data/gini-modules:/data/gini-modules:rw \
    -e GINI_ENV=tju \
    --restart=always \
    genee/gini:7.1.17-alpine
```

#### Glogon
```shell
$ wget http://docker.17ker.top/glogon-server.v1.0.1-d2019012101.tar.gz
```

```shell
docker build -t docker.genee.in/genee/newcape-server:v0.1.1-d2020031301 -f Dockerfile .

docker run \
    --name newcape-server \
    -d \
    -p 172.17.42.1:3960:3960/tcp \
    -v /home/genee/newcape-server/config:/user/src/app/src/config:rw \
    --restart=always \
    docker.genee.in/genee/newcape-server:v0.1.1-d2020031301
```

## docker compose

docker-compose.yml
```
version: "3"
services:
  lims2:
    container_name: lims2
    image: lims2:local
    volumes:
      - /opt/lims2/volumes:/volumes
      - /etc/sphinxsearch/conf.d:/etc/sphinxsearch/conf.d
      - /etc/lims2:/etc/lims2
      - /etc/msmtprc:/etc/msmtprc
      - /var/run/genee-nodejs-ipc:/var/run/genee-nodejs-ipc
      - /var/lib/lims2:/var/lib/lims2
      - /var/lib/lims2_vidcam:/var/lib/lims2_vidcam
      - /home/disk:/home/disk
    ports:
      - 3007:9000/tcp
      - 9510:9510/tcp
    restart: always
    privileged: true
  nginx:
    container_name: nginx
    image: nginx:1.11-alpine
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/fastcgi_params:/etc/nginx/fastcgi_params
      - ./nginx/sites-enabled:/etc/nginx/sites-enabled
      - ./nginx/sites-available:/etc/nginx/sites-available
      - ./nginx/conf.d:/etc/nginx/conf.d
      - /var/log/nginx:/var/log/nginx
      - /var/lib/lims2:/var/lib/lims2:rw
      - /data/gini-modules:/data/gini-modules:rw
      - /var/www:/var/www
      - /var/run:/var/run
    ports:
      - 80:80/tcp
    restart: always
    privileged: true
  redis:
    container_name: redis
    image: redis:local
    volumes:
      - ./redis/config/:/etc/redis
      - ./redis/lib/:/var/lib/redis
      - /dev/log/:/dev/log
    ports:
      - 172.17.42.1:6379:6379/tcp
    restart: always
  mariadb:
    container_name: mariadb
    image: mariadb:local
    volumes:
      - /var/lib/mysql:/var/lib/mysql
      - /var/log/mysql:/var/log/mysql
      - ./mariadb/my.cnf:/etc/mysql/my.cnf
      - ./mariadb/conf.d/binlog.cnf:/etc/mysql/conf.d/binlog.cnf
      - ./mariadb/conf.d/mysqld_safe_syslog.cnf:/etc/mysql/conf.d/mysqld_safe_syslog.cnf
      - /dev/log:/dev/log
    ports:
      - 3306:3306/tcp
    restart: always
  reserv-server:
    container_name: reserv-server
    image: docker.genee.in/genee/reserv-server:v0.8.1-d2019050501
    volumes:
      - ./reserv-server/config:/usr/src/app/config
      - ./reserv-server/logs:/usr/src/app/logs
    ports:
      - 172.17.42.1:9898:9898/tcp
      - 172.17.42.1:9899:9899/tcp
      - 172.17.42.1:9509:9509/tcp
    restart: always
  beanstalkd:
    container_name: beanstalkd
    image: docker.genee.in/genee/beanstalkd:v1.10.0-d2017112401
    ports:
      - 172.17.42.1:11300:11300/tcp
    restart: always
```
