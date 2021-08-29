import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";

const app = express();
const port = process.env.PORT || 3000;

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.send("app working");
});

app.use("/api", routes);

//listener
app.listen(port, () => {
  console.log(`App listenintg in http://localhost:${port}/`);
});

export { app };
