import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

// ratelimiter
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "10 s") // only allows x request in y seconds
});

export default ratelimit;