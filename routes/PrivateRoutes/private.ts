import { FastifyInstance } from "fastify";

export default async function user(fastify: FastifyInstance, opts: any) {
  fastify.post("/", async (req, res) => {
    res.status(200).send("reply from private");
  });
}

export const autoPrefix = "/private";
