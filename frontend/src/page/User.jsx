import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../component/ui/Button'
import Adduser from './Adduser'

const User = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [hide,setHide]=useState(false);

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users/all')
      setUsers(res.data.data || res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p className="text-center">Loading...</p>
  }
 
  const addUser =()=>{
    setHide(true)
  }

  const allUser=()=>{
    setHide(false);
  }
  return (
    <div className="bg-surface rounded-xl shadow p-6">
      <h2 className="text-sectionTitle font-semibold mb-4">
        Users
      </h2>
        <Button btn_name={"Create User"}  onClick={addUser}/>
         <Button btn_name={"Show All"}  onClick={allUser}/>

        {
          hide?
            <Adduser/>

          :
                  (
  <div className="overflow-x-auto">
        <table className="min-w-full border border-muted rounded-lg">
          <thead className="bg-lightGray">
            <tr>
              <TableHead label="Name" />
              <TableHead label="Email" />
              <TableHead label="Role" />
              <TableHead label="Created At" />
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-t hover:bg-lightGray transition"
              >
                <TableCell value={user.name || '—'} />
                <TableCell value={user.email} />
                <TableCell value={user.role || 'USER'} />
                <TableCell value={new Date(user.createdAt).toLocaleDateString()} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          )
        }
      


    </div>
  )
}

const TableHead = ({ label }) => (
  <th className="px-4 py-3 text-left text-label font-medium text-textSecondary">
    {label}
  </th>
)

const TableCell = ({ value }) => (
  <td className="px-4 py-3 text-body text-textPrimary">
    {value}
  </td>
)

export default User
