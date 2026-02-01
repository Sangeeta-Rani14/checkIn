import React, { useState } from 'react'
import Input from '../component/ui/Input'
import Button from '../component/ui/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    industry: '',
    plan: '',
    address: '',
    email:'',
    password:''
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
    try {
      const response = await axios.post(
        'http://localhost:5000/api/organization/',
        data
      )

      console.log(response.data)
      // navigate('/dashboard') 
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightGray font-inter">
      <div className="w-full max-w-md bg-surface rounded-xl shadow-xl px-8 py-10">

        <h1 className="text-sectionTitle font-poppins text-textPrimary text-center mb-6">
          Register Organization
        </h1>

        <div className="space-y-4">
          <Input
            type="text"
            name="name"
            value={data.name}
            onChange={onChange}
            placeholder="Organization Name"
            className="w-full px-4 py-3 rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          <Input
            type="text"
            name="industry"
            value={data.industry}
            onChange={onChange}
            placeholder="Industry"
            className="w-full px-4 py-3 rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          <Input
            type="text"
            name="plan"
            value={data.plan}
            onChange={onChange}
            placeholder="Plan (Free / Pro / Enterprise)"
            className="w-full px-4 py-3 rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          <Input
            type="text"
            name="address"
            value={data.address}
            onChange={onChange}
            placeholder="Address"
            className="w-full px-4 mb-4 py-3 rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
            <Input
            type="text"
            name="email"
            value={data.email}
            onChange={onChange}
            placeholder="Address"
            className="w-full px-4 mb-4 py-3 rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
            <Input
            type="text"
            name="password"
            value={data.password}
            onChange={onChange}
            placeholder="Address"
            className="w-full px-4 mb-4 py-3 rounded-lg border border-muted
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <Button
          btn_name="Create "
          onClick={submit}
          className="w-full mt-6 py-3 rounded-lg bg-primary text-white
                     hover:bg-primaryHover transition"
        />
      </div>
    </div>
  )
}

export default Register
