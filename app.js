require("dotenv").config();
require("./db");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const express = require("express");
const cors = require("cors"); // Add this line

const app = express();


app.use(cors({
    origin: ["http://127.0.0.1:5173"],
    credentials: true,
}));

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const usersRouter = require("./routes/users.routes");
app.use("/api", isAuthenticated, usersRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
