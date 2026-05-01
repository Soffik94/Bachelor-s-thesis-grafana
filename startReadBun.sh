#!/bin/bash

echo "▶ Testing READ BUN (port 3002)"

docker run --rm -i \
--user 0 \
-v $(pwd):/scripts \
grafana/k6 run /scripts/read.js \
-e BASE_URL=http://10.0.0.4:3002 \
-e RUNTIME=bun \
-o experimental-prometheus-rw \
-e K6_PROMETHEUS_RW_SERVER_URL=http://10.0.0.3:9090/api/v1/write
