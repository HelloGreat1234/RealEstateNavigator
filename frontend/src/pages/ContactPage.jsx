import React from 'react';

export default function ContactPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-2/4 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form action='/xxx' method='POST' className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input placeholder='eg. Adolf Hitler' type="text" id="name" name="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input placeholder='eg. Adolf69@gmail.com' type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea placeholder='Type your message here' id="message" name="message" rows="4" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

