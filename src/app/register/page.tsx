import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
  <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
    <div className="text-center mb-12">
      <a onClick={(e) => e.preventDefault()}>
        <img
          src="https://pricetrackerdata.com/priceTrackerLogo.png"
          alt="logo"
          className="w-40 inline-block"
        />
      </a>
    </div>
    <form>
      <div className="space-y-6">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
          <input
            name="email"
            type="text"
            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Password</label>
          <input
            name="password"
            type="password"
            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
            placeholder="Enter password"
          />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">
            Confirm Password
          </label>
          <input
            name="cpassword"
            type="password"
            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
            placeholder="Enter confirm password"
          />
        </div>
       
      </div>
      <div className="!mt-12">
        <button
          type="button"
          className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          Create an account
        </button>
      </div>
      <p className="text-gray-800 text-sm mt-6 text-center">
        Already have an account?{" "}
        <a
          href='/login'
          className="text-blue-600 font-semibold hover:underline ml-1"
        >
          Login here
        </a>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default RegisterPage
