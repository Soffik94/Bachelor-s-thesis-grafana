import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
};

const BASE_URL = __ENV.BASE_URL || 'http://10.0.0.4:3000';

export default function () {
  const res = http.get(`${BASE_URL}/items`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
