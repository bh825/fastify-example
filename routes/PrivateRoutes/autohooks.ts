import { FastifyInstance } from "fastify";

export default async function (app: FastifyInstance) {
  app.addHook("preHandler", async (req, reply) => {
    console.log("private", req.body);
  });
}
