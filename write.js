import http from 'k6/http';
import { sleep } from 'k6';

const BASE_URL = __ENV.TARGET_URL || 'http://10.0.0.4:3000';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const payload = JSON.stringify({
    name: `user_${__VU}_${__ITER}`,
    email: `user_${__VU}_${__ITER}@test.com`
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(`${BASE_URL}/users`, payload, params);

  if (res.status !== 201 && res.status !== 200) {
    console.error(`ERROR: status ${res.status}`);
  }

  sleep(1);
}
