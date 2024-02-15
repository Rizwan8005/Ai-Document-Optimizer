import React from 'react'

const GenerateKeyPopup = () => {
  return (
    <div className="p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="mt-1 p-2 w-full border border-primary rounded focus:outline-none"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 p-2 w-full border border-primary rounded focus:outline-none"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray">
          Website (optional)
        </label>
        <input
          id="website"
          type="website"
          className="mt-1 p-2 w-full border border-primary rounded focus:outline-none"
          placeholder="Enter your website"
        />
      </div>
      <div className="bg-primary text-center text-grey py-2 cursor-pointer">
        Submit
      </div>
    </div>
  );
}

export default GenerateKeyPopup