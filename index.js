const express = require("express");
const cors = require("cors");
const { port, env } = require("./config/index");
const users = require("./routes/users");
const auth = require("./routes/auth");
const cookies = require("cookie-parser");
const operations = require("./routes/operations");

const app = express();
app.use(express.json());
app.use(cookies());
app.use(cors({ origin: "*" }));

users(app);
auth(app);
operations(app);


app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log("Modo:", env);
  console.log("listening on: http://localhost:" + port);
});
