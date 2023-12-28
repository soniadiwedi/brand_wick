const express = require("express");
const cors = require("cors");
const app = express();
const { dbConnection } = require("./configs/db");
const { userRouter } = require("./routes/userRouter");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send(`<h1>Home page</h1>`)
})

app.use("/api/auth", userRouter);

app.listen(port, async () => {
  try {
    await dbConnection;
    console.log(`server is connected DB`);
  } catch (error) {
    console.log("error while connecting to DB");
  }
  console.log(`server is running on ${port}`);
});
