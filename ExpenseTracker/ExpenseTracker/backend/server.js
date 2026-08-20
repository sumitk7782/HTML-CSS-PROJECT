// import express from "express";
// import cors from 'cors';
// import 'dotenv/config';
// import { connect } from "mongoose";
// import { connectDB } from "./config/db.js";


// const app = express();
// const port = 4000;

// //Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// //DB
// connectDB();

// //ROUTES
// app.get('/',(req,res) =>{
//     res.send("API WORKING");
// });

// app.listen(port,() => {
//     console.log(`Server Started on http://localhost:${port}`);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});