import React, { useState } from 'react'
import Input from '../component/ui/Input'
import Button from '../component/ui/Button'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

const navigate = useNavigate()
  const onChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const submit = async () => {
    console.log(data);
      // navigate('/dashboard')
      try{
          const response = await axios.post('http://localhost:5000/api/auth/login',data)
          console.log(response.data)


      }catch(err){
           console.log(err)
      }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightGray font-inter">
      <div className="w-full max-w-md bg-surface rounded-xl shadow-xl px-8 py-10">
        
        <h1 className="text-sectionTitle font-poppins text-textPrimary text-center mb-6">
          Name of the Organization
        </h1>

        <p className="text-pageTitle font-semibold text-textPrimary text-center mb-8">
          Login
        </p>

        <div className="space-y-4">
          <Input
            type="text"
            name="email"
            value={data.email}
            onChange={onChange}
            placeholder="Email address"
            className="w-full px-4 py-3 text-body rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30
                       focus:border-primary"
          />

          <Input
            type="password"
            name="password"
            value={data.password}
            onChange={onChange}
            placeholder="Password"
            className="w-full px-4 py-3 mb-4 text-body rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30
                       focus:border-primary"
          />
        </div>

        <Button
          btn_name="Login"
          onClick={submit}
          className="w-full mt-6 py-3 rounded-lg text-body font-medium
                     bg-primary text-white hover:bg-primaryHover
                     transition-colors duration-200"
        />
      </div>
    </div>
  )
}

export default Login
