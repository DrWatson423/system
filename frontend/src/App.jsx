// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from './pages/login'
import AdminDashboard from './pages/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
        {/* Test Tailwind */}
      <div className="bg-blue-500 text-white p-4 text-center">
        If you see a blue box, Tailwind is working!
      </div>
  
     <BrowserRouter>
     <Routes>
        {/* <Route path="/" element={Navigate to ="/admin dashboard"}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<AdminDashboard/>}></Route>
     </Routes>
     
     
     </BrowserRouter>
     
        
    </>
  )
}

export default App
