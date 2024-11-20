import { check } from "k6";

export function commonRequest(response) {
    console.log(response.body);
    check(response, {
        "status should not be 500": (r) => r.status !== 500,
    });
    check(response, {
        "status should not be 429": (r) => r.status !== 429,
    });
    check(response, {
        "status should not be 502": (r) => r.status !== 502,
    });
    check(response, {
        "status should not be 504": (r) => r.status !== 504,
    });
    check(response, {
        "status should not be 408": (r) => r.status !== 408,
    });
}