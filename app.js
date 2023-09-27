
require("dotenv").config();
require("./db");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const express = require("express");

const app = express();

require("./config")(app);


const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);



const usersRouter = require("./routes/users.routes");
app.use("/api", isAuthenticated, usersRouter); 



const authRouter = require("./routes/auth.routes");     
app.use("/auth", authRouter); 

require("./error-handling")(app);

module.exports = app;
