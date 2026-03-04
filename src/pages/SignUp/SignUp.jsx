import registerImg from '../../assets/images/register-img.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name min length is 3').max(20, 'Name is too long').required('Name is Required'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string()
      .matches(/^[A-Za-z0-9]{4,}$/, 'Password must be at least 4 characters (letters and numbers only)')
      .required('Password is Required'),
  });

  async function handleRegister(formValues) {
    setLoading(true);
    setServerError("");
    
    const apiData = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      avatar: "https://picsum.photos/800"
    };

    try {
      const response = await axios.post(`https://api.escuelajs.co/api/v1/users/`, apiData);
      if (response.status === 201 || response.status === 200) {
        toast.success('Account Created Successfully!');
        navigate('/login');
      }
    } catch (err) {
      const msg = err.response?.data?.message;
      setServerError(Array.isArray(msg) ? msg[0] : msg || "Failed to register");
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: ''
    },
    validationSchema,
    onSubmit: handleRegister
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-10 pb-20 bg-white">
      
      <div className="w-full md:w-1/2 bg-[#CBE4E8] rounded-lg md:rounded-r-lg overflow-hidden">
         <img src={registerImg} alt="login" className="w-full h-48 md:h-full object-contain" />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-medium tracking-wider text-black">Create an account</h2>
          <p className="mt-4 mb-8 text-sm text-gray-600">Enter your details below</p>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            
            {serverError && (
              <div className="text-[#DB4444] bg-red-50 p-2 text-sm rounded border border-red-100 italic">
                {serverError}
              </div>
            )}

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`w-full border-b py-2 focus:outline-none transition-colors ${formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-300 focus:border-red-500'}`}
              />
              {formik.errors.name && formik.touched.name && (
                <div className="text-[#DB4444] text-xs mt-1">{formik.errors.name}</div>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full border-b py-2 focus:outline-none transition-colors ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300 focus:border-red-500'}`}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-[#DB4444] text-xs mt-1">{formik.errors.email}</div>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`w-full border-b py-2 focus:outline-none transition-colors ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300 focus:border-red-500'}`}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-[#DB4444] text-xs mt-1">{formik.errors.password}</div>
              )}
            </div>

            

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#DB4444] text-white py-4 rounded hover:bg-red-600 transition-all font-medium disabled:bg-gray-400 mt-4"
            >
              {loading ? "Processing..." : "Create Account"}
            </button>
            
            <div className="text-center mt-6">
              <span className="text-gray-600">Already have account? </span>
              <button 
                type="button"
                onClick={() => navigate('/login')}
                className="font-medium text-gray-700 border-b border-gray-700 ml-2 hover:text-black"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}