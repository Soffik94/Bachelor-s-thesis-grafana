#!/bin/bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

export BASE_URL="${BASE_URL:-http://10.0.0.4:3001}"
export RUNTIME="${RUNTIME:-deno}"
export BENCHMARK="${BENCHMARK:-compute}"
export K6_SCRIPT="${K6_SCRIPT:-compute.js}"
export COMPUTE_ITERATIONS="${COMPUTE_ITERATIONS:-${ITERATIONS:-${N:-1000}}}"

bash "${SCRIPT_DIR}/runK6Benchmark.sh"
