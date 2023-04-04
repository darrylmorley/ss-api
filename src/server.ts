import express from "express";
import morgan from "morgan";
import router from "./routes/router";

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200) && res.json("Hello World!");
});

app.use("/api", router);

app.listen(port, () => {
  `Server has started on port: ${port}`;
});
