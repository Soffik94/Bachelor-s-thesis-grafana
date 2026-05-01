import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,           
  duration: "10s",    
};

const BASE_URL = __ENV.BASE_URL || "http://10.0.0.4:3000";

export default function () {
  const res = http.get(`${BASE_URL}/ping`);

  check(res, {
    "status is 200": (r) => r.status === 200,
    "response time < 200ms": (r) => r.timings.duration < 200,
  });

  sleep(1);
}
