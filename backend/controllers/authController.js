import User from '../models/User.js'; // Adjust the path as necessary
import bcrypt from 'bcrypt'



const login = async(req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // Here you would typically check the email and password against your database
  //   // For demonstration purposes, we'll assume a successful login if both fields are provided
     if (!user) {
      return res.status(401).json({ success:false, error:"User not found" }); 
      
     } 

     const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
      return res.status(401).json({ success:false, error:"Invalid credentials" });
     }

    //  Use JWT to generate a token for the user to maintain session
     const token = jwt.sign({ userId: user._id, role: user.role}, process.env.JWT_SECRET, {
       expiresIn: '1h' // Token expiration time
     });

     res.status(200).json({
       success: true,
       message: "Login successful",
       user: {
         id: user._id,
         name: user.name,
         email: user.email,
         role: user.role
       },
       token // Send the token back to the client
     });


  //   if (username && password) {
  //     // Simulate a successful login response
  //     res.status(200).json({ message: "Login successful", user: { username } });
  //   } else {
  //     res.status(400).json({ message: "Username and password are required" });
  //   }
  } catch (error) {
  //   console.error("Login error:", error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
}

export {login}