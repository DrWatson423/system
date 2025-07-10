import mongoose from 'mongoose';

// This file defines the User schema for MongoDB using Mongoose.
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: {type: String,required: true },
  email: {type: String,required: true,unique: true},
  role: {type: String,enum: ['admin', 'user'],required: true},
  profileImage: {type: String},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},

})

const user = mongoose.model('user', userSchema);

export default user;

// model for user created

// register user in index.js