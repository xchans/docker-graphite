#!/bin/bash

sed -i -e "s/GRAPHITE_HOST/${GRAPHITE_HOST}/g" /app/config.js
sed -i -e "s/GRAPHITE_PORT/${GRAPHITE_PORT}/g" /app/config.js