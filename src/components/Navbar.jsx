import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {} from "react-icons/fa"
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    const navItems = [
        {path: "/", title: "Search"},
        {path: "/my-job", title: "My Jobs"},
        {path: "/salary", title: "Salary"},
        {path: "/post-job", title: "Post Job"},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
           <a href="/" className='flex items-center gap-2 text-2xl text-primary'> <img src="./public/job-portal.png" width="29" height="30" viewBox = "0 0 29 30" alt="" />
            <span>Job Portal</span></a>
            {/* nav items for large device */}
            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(({path, title})=>(
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                            to={path}
                    className={({isActive}) => 
                        isActive ? "active": ""
                    }
                  >
                    {title}
                        </NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* signup and login btn */}
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link to="/login" className='py-2 px-5 border rounded'>Log In</Link>
                <Link to="/sign-up" className='py-2 px-5 border rounded bg-accent'>Sign Up</Link>
            </div>
            {/* mobile view menu */}
            <div className=' md:hidden block'>
                <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <FaXmark className='w-5 h-5 text-primary '/> : <FaBarsStaggered className='w-5 h-5 text-primary '/>
                }
                </button>
            </div>
        </nav>
        <div className={` bg-gray-100 px-4 py-5 rounded-sm ${isMenuOpen ? "" : "hidden"} `}>
        <ul>
        {navItems.map(({path, title})=>(
                        <li key={path} className='text-base text-primary first:text-primary py-1'>
                            <NavLink
                            to={path}
                    className={({ isActive}) => 
                        isActive ? "active": "" 
                    }
                  >
                    {title}
                        </NavLink>
                        </li>
                    ))
                }
                <button className="py-2 px-5 border rounded bg-accent "><li className='text-primary py-1'> <Link to="/login">Log In</Link></li></button>  
                </ul> 
        </div>
    </header>
  )
}

export default Navbar