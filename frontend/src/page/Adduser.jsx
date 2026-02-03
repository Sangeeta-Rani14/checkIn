import React, { useState } from 'react';
import axios from 'axios';

const Adduser = () => {
  // Initialize state with all schema fields
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    orgId: "", 
    role: "employee",
    industry: "", 
    plan: ""      
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      // Axios POST request to your backend
      const response = await axios.post('/api/users/create', data);
      alert("User Created Successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating user:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightGray font-inter p-4">
      <div className="w-full max-w-md bg-surface rounded-xl shadow-xl px-8 py-10">
        <h1 className="text-sectionTitle font-poppins text-textPrimary text-center mb-6">
          Create User
        </h1>

        <div className="space-y-4">
          <input type="text" name="name" value={data.name} onChange={onChange} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-muted focus:ring-2 focus:ring-primary/30" />
          
          <input type="email" name="email" value={data.email} onChange={onChange} placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-muted" />
          
          <input type="password" name="password" value={data.password} onChange={onChange} placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-muted" />

          {/* Role Dropdown - Matches Schema Enum */}
          <select name="role" value={data.role} onChange={onChange} className="w-full px-4 py-3 rounded-lg border border-muted">
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
            <option value="security">Security</option>
            <option value="super_admin">Super Admin</option>
          </select>

          {/* Status Dropdown - Matches Schema Enum */}
          {/* <select name="status" value={data.status} onChange={onChange} className="w-full px-4 py-3 rounded-lg border border-muted">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select> */}
          
          {/* OrgId - In a real app, this might be a hidden field or a dropdown */}
          <input type="text" name="orgId" value={data.orgId} onChange={onChange} placeholder="Organization ID" className="w-full px-4 py-3 rounded-lg border border-muted" />
        </div>

        <button onClick={submit} className="w-full mt-6 py-3 rounded-lg bg-primary text-white hover:bg-primaryHover transition">
          Create User
        </button>
      </div>
    </div>
  );
};

export default Adduser;