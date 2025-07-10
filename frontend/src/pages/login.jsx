import React from 'react';
import axios from 'axios';


const login = () => {
 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Ok, you clicked the login button');
    try{
      const response = await axios.post("http://localhost:5050/api/auth/login", {
        email,password});
        console.log('Login successful:', response.data);
        alert('Login successful!');

    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }

  }


  return(
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100   '>
      <h2  className="font-pacific text-3xl text-center text-blue-800 mb-4">
        Affiliate Management System
        </h2>

      <form onSubmit= {handleSubmit} >
        <div>
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded-md"  name="username" required />
        </div>

        <div className="mb-4"> 
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" 
           id="email" 
           name="email"
           className="w-full p-2 border border-gray-300 rounded-md" 
           placeholder='Enter Email' 
           onChange={(e) => setEmail(e.target.value)}
           />
        </div>


        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700" >Password</label>
          <input type="password" 
            id="password" 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
           />
        </div>



        <div className="mb-4 flex">
          <label className="inline-flex items-center"></label>
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
            <a href='#' className='text-blue-500 ml-4'>Forgot Password?</a>
         
        </div>

        <button type="submit" className="w-full bg-teal-600 text-white py-2">
        Login</button>
      </form>


    
    </div>
   
  )
}
export default login;