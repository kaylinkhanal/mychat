const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

const connect = require("./db/mongoose");
connect();

const registerRouter = require("./Controller/registerRouter");
const loginRouter = require("./Controller/loginRouter");
const usersRouter = require("./Controller/usersRouter");
const impUploads = require("./Controller/uploads");

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  pingTimeout: 30000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("chat", (msg) => {
    io.send("message", msg);
  });
});

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/uploads", impUploads);

server.listen(process.env.PORT, () => {
  console.log(`Chat Server listening on port ${process.env.PORT}`);
});
