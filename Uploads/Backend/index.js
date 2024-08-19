import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import serviceRoutes from "./routes/srviceroutes.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT ||10000;
const MONGO_URL= process.env.MONGO_URL;

dotenv.config()
app.use(express.json());
try {
  mongoose.connect(process.env.MONGO_URL,
  )
  console.log("MongoDB connected")
} catch (error) {
  console.log("erorr: ",error)
}
//define routes
app.use('/service',serviceRoutes)
app.use('/user',userRoutes)

app.get('/', (req, res) => {
  res.send('Amit here??')
})




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})