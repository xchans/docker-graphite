FROM nginx

MAINTAINER xchans <a1221110@empal.com>

ENV GRAFANA_VERSION 1.9.1

RUN apt-get update && \
    apt-get install -y wget && \
    wget http://grafanarel.s3.amazonaws.com/grafana-${GRAFANA_VERSION}.tar.gz -O grafana.tar.gz && \
    tar zxf grafana.tar.gz && \
    rm grafana.tar.gz && \
    rm -rf app && \
    mv grafana-${GRAFANA_VERSION} app && \
    apt-get autoremove -y wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ADD ./config/config.js /app/config.js
ADD ./config/nginx.conf /etc/nginx/nginx.conf

ENV GRAPHITE_HOST graphite-web
ENV GRAPHITE_PORT 8000

ADD setup_configs.sh /setup_configs.sh

RUN chmod +x /setup_configs.sh && ./setup_configs.sh