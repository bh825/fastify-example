import fastify from "fastify";
import path from "path";
import fastifyAutoload from "@fastify/autoload";

const app = fastify();

app.register(fastifyAutoload, {
  dir: path.join(__dirname, "routes", "PrivateRoutes"),
  autoHooks: true,
});

app.register(fastifyAutoload, {
  dir: path.join(__dirname, "routes", "PublicRoutes"),
  autoHooks: true,
});

const start = async () => {
  try {
    await app.listen({ port: 8000 });
    console.log(`Server is running on port 8000`);
  } catch (error) {
    console.error(error);
  }
};

start();
