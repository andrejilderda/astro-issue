import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const app = express();
const base = "/";
app.use(base, express.static("dist/client/"));
app.use(ssrHandler);

console.log("test"); // DOES show
const port = process.env.PORT ?? 3021;
app.listen(port, () => {
  console.log(`+App listening on port ${port}`);
});
