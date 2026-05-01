#!/bin/bash

echo "▶ Testing COMPUTE DENO (port 3001)"

docker run --rm -i \
--user 0 \
-v $(pwd):/scripts \
grafana/k6 run /scripts/compute.js \
-e BASE_URL=http://10.0.0.4:3001 \
-e RUNTIME=deno \
-e N=10000 \
-o experimental-prometheus-rw \
-e K6_PROMETHEUS_RW_SERVER_URL=http://10.0.0.3:9090/api/v1/write
