import { FastifyInstance } from "fastify";

export default function user(
  fastify: FastifyInstance,
  opts: any,
  next: () => void
) {
  fastify.post("/", async (req, res) => {
    res.status(200).send("reply from public");
  });

  next();
}

export const autoPrefix = "/public";
