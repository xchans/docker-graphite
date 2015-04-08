# docker-graphite

[Docker](https://www.docker.com/) 위에 *[Graphite](https://github.com/graphite-project)* 와 *[Grafana](https://github.com/grafana/grafana)* 를 설치.


## 환경

자세한 내용은 

## 실행

### Docker 설치

```bash
$ curl -sSL https://get.docker.com/ubuntu/ | sudo sh
```

### Docker 이미지 다운로드

```bash
$ git clone git://github.com/xchans/docker-graphite.git
```

### Docker 이미지 빌드

```bash
$ cd docker-graphite

$ sudo docker build -t xchans/carbon-base ./carbon-base

$ sudo docker build -t xchans/whisper ./whisper
$ sudo docker build -t xchans/carbon-cache ./carbon-cache
$ sudo docker build -t xchans/graphite-web ./graphite-web
$ sudo docker build -t xchans/grafana ./grafana
```

### Docker 컨테이너 실행

```bash
$ sudo docker run --name whisper xchans/whisper
$ sudo docker run -d --name carbon-cache \
  -p 2003:2003 -p 2004:2004 -p 7002:7002 \
  --volumes-from whisper \
  -e NODE_NAME=cache \
  xchans/carbon-cache
$ sudo docker run -d --name graphite-web \
  -p 85:85 \
  -e CARBONLINK_HOSTS="carbon-cache:7002" \
  --volumes-from whisper \
  --link carbon-cache:carbon-cache \
  xchans/graphite-web
$ sudo docker run -d --name grafana \
  -e GRAPHITE_HOST="graphite.xchans.info" \
  -e GRAPHITE_PORT=85 \
  -p 80:80 \
  xchans/grafana
```

## 테스트

AWS의 Ubuntu 14.04의 EC2에서 테스트.
Docker는 1.5.0

## 참고

- http://blog.nacyot.com/articles/2014-07-17-graphite-with-dokcer/
- https://github.com/nacyot/docker-graphite