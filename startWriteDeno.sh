#!/bin/bash

echo "Testing DENO on port 3001"

docker run --rm -i \
--user 0 \
-e K6_PROMETHEUS_RW_SERVER_URL=http://10.0.0.3:9090/api/v1/write \
-e RUN_ID=${RUN_ID:-} \
-v $(pwd):/scripts \
grafana/k6 run \
-e BASE_URL=http://10.0.0.4:3001 \
-e RUNTIME=deno \
-o experimental-prometheus-rw \
--tag runtime=deno \
--tag benchmark=write \
/scripts/write.js
