import React, { useState, useEffect } from 'react';
import './All.css'

const UserForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000);
    return () => clearTimeout(timer);

  }, []);

  return (
    <>
       <div className={`frm fixed bottom-0    p-4 transition-transform ease-in-out transform ${showForm ? 'translate-y-0' : 'translate-y-full'}`}>
       
      <div className="bg-green-600 -ml-5  text-white p-4 rounded-md shadow-md pr-6">
      <button onClick={()=>setShowForm(false)} className='text-5xl btn '>x</button>
        <h2 className="text-2xl font-semibold mb-4">FLAT 15% OFF</h2>
        <h2 className="text-2xl font-semibold mb-4">Enter your details and win a coupon<br/> worth 15% OFF</h2>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">Phone Number</label>
            <input
              type="tel"
              className=" text-black mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your phone number"
              // Add necessary state and event handlers
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">Email Address</label>
            <input
              type="email"
              className=" text-black mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email address"
              // Add necessary state and event handlers
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring focus:border-blue-300"
          >
            Show me coupon
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default UserForm