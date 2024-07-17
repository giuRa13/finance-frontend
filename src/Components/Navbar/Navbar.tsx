import React from 'react';
import waveSvg from '../../Assets/wave.svg';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/useAuth';

interface Props {}

const Navbar = (props: Props) => {

  const {isLoggedIn, user, logout} = useAuth();

  return (
    <nav className="relative mx-auto p-6 bg-blue2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
        <div className='flex items-center'>
          <Link to="/">
            <div className='flex justify-center'>
              <img src={waveSvg} alt="" />
              <span className='font-bold text-xl text-green font-audiowide'> Wave Finance</span>
            </div>
          </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-gray-100 hover:text-green">
              Dashboard
            </Link>
          </div>
        </div>
        { isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="text-green hover:text-green font-bold">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded-md text-blue2 bg-green hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="text-gray-100 hover:text-green font-bold">
              Login
            </Link>
            <Link to="/register"className="px-8 py-3 font-bold rounded-md text-blue2 bg-green hover:opacity-70">
              Signup
            </Link>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar