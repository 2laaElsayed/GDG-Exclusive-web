import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'; 
import registerImg from '../../assets/images/register-img.png';
import { UserContext } from '../../Context/UserContext'; 

const Login = () => {
  //  Access the setUserToken function from Context to update global state
  const { setUserToken } = useContext(UserContext);
  
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ general: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (errors.general) setErrors({ general: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({ general: '' }); 

    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', credentials);

      if (response.data.access_token) {
        localStorage.setItem('accessToken', response.data.access_token);
        
        setUserToken(response.data.access_token);
        
        toast.success('Welcome Back!');
        navigate('/'); 
      }
    } catch (error) {
      if (error.response) {
        setErrors({ general: 'Invalid email or password.' });
      } else {
        setErrors({ general: 'Network error. Please try again later.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-10 bg-white font-inter">
      {/* Show on all screens, but adjust width */}
      <div className="w-full md:w-1/2 bg-[#CBE4E8] rounded-lg md:rounded-r-lg overflow-hidden">
  <img src={registerImg} alt="login" className="w-full h-48 md:h-full object-contain" />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-medium tracking-wider text-black">Log in to Exclusive</h2>
            <p className="mt-4 text-sm text-gray-600">Enter your details below</p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            {errors.general && (
              <div className="bg-red-50 border border-red-100 p-3 rounded text-[#DB4444] text-sm italic">
                {errors.general}
              </div>
            )}

            <div className="space-y-6">
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent ${
                  errors.general ? 'border-[#DB4444]' : 'border-gray-300 focus:border-red-500'
                }`}
                onChange={handleChange}
              />

              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent ${
                  errors.general ? 'border-[#DB4444]' : 'border-gray-300 focus:border-red-500'
                }`}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#DB4444] text-white px-10 py-4 rounded hover:bg-red-600 transition-all font-medium disabled:bg-gray-400"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
              
              <button 
                onClick={(e) => { e.preventDefault(); toast.info("Maintenance Mode"); }}
                type="button"
                className="text-[#DB4444] text-sm hover:underline"
              >
                Forget Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;