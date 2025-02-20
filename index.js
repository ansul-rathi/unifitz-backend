import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToMongo from "./config/db.js";
import authRouter from "./routes/auth.js";
import associateRouter from "./routes/associate.js";
import userDetailRouter from "./routes/userDetails.js";
import StaticId from "./models/staticId.js";

const app = express();
const port = 8000;

connectToMongo();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.use("/associate", associateRouter);

app.use("/userDetail", userDetailRouter);

app.post("/staticId", async (req, res) => {
  const response = await StaticId.create(req.body);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
