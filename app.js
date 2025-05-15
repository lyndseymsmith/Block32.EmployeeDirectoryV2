import express from "express";
import employeesRouter from "./api/employee-data.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received");
  console.log(req.method, req.originalUrl);
  next();
});

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An error occurred!!" + err);
});

export default app;
