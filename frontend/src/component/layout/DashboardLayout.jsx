import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-lightGray font-inter">
      
      {/* Sidebar */}
      <aside className="w-64 bg-surface shadow-lg">
        <div className="h-16 flex items-center justify-center border-b">
          <h1 className="text-lg font-semibold text-primary">
            MyOrg
          </h1>
        </div>

        <nav className="p-4 space-y-2">
          <NavItem label="Dashboard" />
          <NavItem label="Organizations" />
          <Link to='/users'><NavItem label="Users" /></Link>
          <NavItem label="Settings" />
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <header className="h-16 bg-surface shadow-sm flex items-center justify-between px-6">
          <h2 className="text-sectionTitle text-textPrimary font-medium">
            Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-textSecondary text-sm">
              Admin
            </span>
            <div className="w-9 h-9 rounded-full bg-primary text-primary-color
                            flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
           
        </main>
      </div>
    </div>
  )
}

const NavItem = ({ label }) => (
  <div className="px-4 py-2 rounded-lg cursor-pointer
                  text-textSecondary hover:bg-lightGray
                  hover:text-primary transition">
    {label}
  </div>
)

export default DashboardLayout
