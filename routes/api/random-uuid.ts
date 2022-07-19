// routes/api/random-uuid.ts

import { HandlerContext } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
  POST(req: Request, _ctx: HandlerContext) {
    console.log(_ctx.params);
    const uuid = crypto.randomUUID();
    const resp = "POST: " + uuid;
    return new Response(JSON.stringify(resp), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
