
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import ProtectedRoute from './component/common/ProtectedRoute'
import Register from './page/Register'

function App() {


  return (
 <>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register />} />
     
     {/* <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } /> */}
   </Routes>
 </>
  )
}

export default App
