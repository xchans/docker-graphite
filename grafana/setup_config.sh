#!/bin/bash

sed -i -e "s/\(GRAPHITE_HOST\).*$/\1 = ${GRAPHITE_HOST}/g" /app/config.js
sed -i -e "s/\(GRAPHITE_PORT\).*$/\1 = ${GRAPHITE_PORT}/g" /app/config.js
