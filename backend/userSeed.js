import user from './models/user.js'; 
import bcrypt from 'bcrypt'; 
import connectToDatabase from './db/db.js';
import { connect } from 'mongoose';
import 'dotenv/config';



const userRegister = async() => {
  connectToDatabase() // Connect to the database
  try{
const hashPassword =await bcrypt.hash('admin123', 10); // Hash the password 
const newUser = new user({
  username: 'Admin',
  email:'admin@gmail.com',
  password:hashPassword,
  role: 'admin',
})

   await newUser.save(); // Save the user to the database 

  } 
  catch(error){
    console.log(error);
  }
}

userRegister();