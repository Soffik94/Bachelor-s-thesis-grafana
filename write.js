import http from 'k6/http';
import { sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://10.0.0.4:3000';
const RUNTIME = __ENV.RUNTIME || 'runtime';
const RUN_ID = __ENV.RUN_ID || `${Date.now()}`;

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const payload = JSON.stringify({
    name: `${RUNTIME}_${RUN_ID}_${__VU}_${__ITER}`,
    email: `${RUNTIME}_${RUN_ID}_${__VU}_${__ITER}@test.com`
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(`${BASE_URL}/items`, payload, params);

  if (res.status !== 201 && res.status !== 200) {
    console.error(`ERROR: status ${res.status}, body ${res.body}`);
  }

  sleep(1);
}
