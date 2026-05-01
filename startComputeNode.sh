#!/bin/bash

echo "▶ Testing COMPUTE NODE (port 3000)"

docker run --rm -i \
--user 0 \
-v $(pwd):/scripts \
grafana/k6 run /scripts/compute.js \
-e BASE_URL=http://10.0.0.4:3000 \
-e RUNTIME=node \
-e N=10000 \
-o experimental-prometheus-rw \
-e K6_PROMETHEUS_RW_SERVER_URL=http://10.0.0.3:9090/api/v1/write
