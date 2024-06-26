import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-16 p-4">
      <div className="w-full max-w-lg bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact With Us</h2>
        <p className="text-center text-gray-400 mb-8">
          Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 border rounded-lg bg-gray-800 border-gray-700 text-white" placeholder="Enter your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border rounded-lg bg-gray-800 border-gray-700 text-white" placeholder="Enter your Email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea id="message" className="w-full p-3 border rounded-lg bg-gray-800 border-gray-700 text-white h-32" placeholder="Type your message"></textarea>
          </div>
          <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
