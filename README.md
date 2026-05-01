# k6 Benchmark Tests

## Obsah
- ping.js → health check
- read.js → GET /users
- write.js → POST /users
- compute.js → CPU test

## Spuštění

### Node
./startPingNode.sh
./startWriteNode.sh
./startReadNode.sh
./startComputeNode.sh

### Deno
./startPingDeno.sh
./startWriteDeno.sh
./startReadDeno.sh
./startComputeDeno.sh

### Bun
./startPingBun.sh
./startWriteBun.sh
./startReadBun.sh
./startComputeBun.sh

## Architektura
- App server: 10.0.0.4
- Prometheus: 10.0.0.3

## Poznámky
- DB musí být naplněná pro read test
- DB je třeba  resetovat mezi testy
