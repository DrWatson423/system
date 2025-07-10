import express from 'express';
import cors from 'cors';  
import records from "./routes/records.js"; // Adjust the path as necessary
import authRouter from "./routes/auth.js"; // Adjust the path as necessary
import connectToDatabase from "./db/db.js"; // Adjust the path as necessary
import { connect } from 'mongoose';



connectToDatabase(); // Connect to the database
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());  
// app.use("/record".records);
app.use("/api/auth", authRouter); // Use the auth router for authentication routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
} );  