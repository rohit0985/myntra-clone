require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db");
const { UserRouter } = require("./Routes/user.router");
const { ProductRouter } = require("./Routes/product.router");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: `Welcome to ${process.env.NAME}` });
});

app.use("/users", UserRouter);
app.use("/products", ProductRouter);




app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Listening...");
  } catch (error) {
    console.error(error);
  }
});
