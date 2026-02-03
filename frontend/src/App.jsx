import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import DashboardLayout from './component/layout/DashboardLayout'
import User from './page/User'
import Adduser from './page/Adduser'

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<User />} />
       <Route path="/add-user" element={<Adduser/>} />
      {/* Dashboard Layout Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
       
      </Route>

      {/* Optional: 404 */}
      <Route path="*" element={<div>Page Not Found</div>} />

    </Routes>
  )
}

export default App
