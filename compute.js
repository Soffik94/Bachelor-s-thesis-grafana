import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

const BASE_URL = __ENV.BASE_URL || 'http://10.0.0.4:3000';

const ITERATIONS = __ENV.ITERATIONS || __ENV.N || 10000;

export default function () {
  const res = http.get(`${BASE_URL}/compute?iterations=${ITERATIONS}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 1000ms': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}
