import './Nav.css';
import { useState, useContext } from 'react'; 
import { Heart, ShoppingBag, Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const { userToken, setUserToken } = useContext(UserContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //  Clear token from storage and update Context to reflect changes 
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    setUserToken(null); 
    toast.success("Logged out successfully");
    navigate('/'); 
    closeSidebar();
  };

  return (
    <>
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <div className="flex-1 text-center text-xs sm:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <Link to="/" className="ml-2 font-semibold underline">ShopNow</Link>
        </div>
        <div className="flex items-center gap-1 text-sm cursor-pointer">
          <select name="language" id="language-select" className="bg-black text-white outline-none">
            <option value="english" className='text-black'>English</option>
            <option value="arabic" className='text-black'>Arabic</option>
          </select>
        </div>
      </div>

      <nav className="bg-white border-b px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl sm:text-4xl font-bold text-header">Exclusive</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="relative group">
            <span className="hover:text-red-500 transition-colors font-inter">Home</span>
          </Link>
          <Link to="/contact" className="relative group">
            <span className="hover:text-red-500 transition-colors">Contact</span>
          </Link>
          <Link to="/about" className="relative group">
            <span className="hover:text-red-500 transition-colors">About</span>
          </Link>
          
          {/* Only show Sign Up if the user is NOT logged in */}
          {!userToken && (
            <Link to="/signup" className="relative group">
              <span className="hover:text-red-500 transition-colors">Sign Up</span>
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded px-3 py-2">
            <input 
              type="search" 
              placeholder="What are you looking for?" 
              className="bg-transparent outline-none text-sm w-48"
            />
          </div>

          {/* Only show Wishlist and Cart if userToken exists */}
          {userToken && (
            <>
              <Link to="/wishlist"> 
                <Heart size={24} className="cursor-pointer hover:text-red-500 transition-colors" />
              </Link>
              <Link to="/cart">
                <ShoppingBag size={24} className="cursor-pointer hover:text-red-500 transition-colors" />
              </Link>
            </>
          )}

          {/* Switch between Login and Logout buttons */}
          {userToken ? (
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all active:scale-95"
            >
              <LogOut size={18} /> Logout
            </button>
          ) : (
            <Link to="/login" className="bg-red-500 text-white px-6 py-2 rounded transition-transform duration-200 active:scale-95 hover:bg-red-600">
              Log In
            </Link>
          )}
        </div>

        <div className="flex md:hidden items-center gap-3">
          {userToken ? (
            <button onClick={handleLogout} className="text-red-500 p-2"><LogOut size={24} /></button>
          ) : (
            <Link to="/login" className="bg-red-500 text-white p-2 px-4 rounded text-sm">Log In</Link>
          )}
          <button onClick={toggleSidebar} className="ml-2">
            <Menu size={24} className="hover:text-red-500 transition-colors" />
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4">
          <button onClick={closeSidebar} className="absolute top-4 right-4 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>
          
          <div className="mt-12 space-y-6 flex flex-col">
            <Link to="/" onClick={closeSidebar}>Home</Link>
            <Link to="/contact" onClick={closeSidebar}>Contact</Link>
            <Link to="/about" onClick={closeSidebar}>About</Link>
            {!userToken && <Link to="/signup" onClick={closeSidebar}>Sign Up</Link>}
            
            {userToken && (
              <>
                <Link to="/wishlist" onClick={closeSidebar} className="flex items-center gap-2 border-t pt-4">
                  <Heart size={20} /> Wishlist
                </Link>
                <Link to="/cart" onClick={closeSidebar} className="flex items-center gap-2">
                  <ShoppingBag size={20} /> Cart
                </Link>
                <button onClick={handleLogout} className="text-red-500 font-bold text-left pt-2">Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;