import React, { useState } from 'react';
import { useForm } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmitFormspree] = useForm("xvgpodnq");
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [fieldsCompleted, setFieldsCompleted] = useState(true);
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        setNameRequired(!value);
        break;
      case 'email':
        setEmail(value);
        setEmailValid(validateEmail(value));
        setEmailRequired(!value);
        break;
      case 'inquiry':
        setInquiry(value);
        break;
      case 'message':
        setMessage(value);
        setMessageRequired(!value);
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!fullName || !email || !message) {
      setFieldsCompleted(false);
      return;
    } else if (!emailValid) {
      return;
    }
    setSubmitted(true);
    document.querySelector('#success-modal').classList.add('is-active');
    handleSubmitFormspree(event);
    console.log(state);
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <>
      {submitted && (
        <div id="success-modal" className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
            <button
              onClick={() => {
                setSubmitted(false);
                window.location.href = '/';
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Your message has been delivered!</h2>
            <p className="text-gray-700 mb-4">Thank you for reaching out - we will get in touch soon!</p>
            <p className="text-gray-500">✨ Have a splendid day! ✨</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            name="fullName"
            value={fullName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="e.g. First Last"
            onChange={handleChange}
          />
          {nameRequired && <p className="text-red-500 text-xs mt-2">Name is required.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            name="email"
            value={email}
            className={`shadow appearance-none border ${!emailValid ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="email"
            placeholder="e.g. email@example.com"
            onChange={handleChange}
          />
          {emailRequired && <p className="text-red-500 text-xs mt-2">Email is required.</p>}
          {!emailValid && email && <p className="text-red-500 text-xs mt-2">Please enter a valid email address.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">I am interested in:</label>
          <select
            name="inquiry"
            value={inquiry}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Select an option</option>
            <option value="Private Pilot License">Private Pilot License</option>
            <option value="Instrument Rating">Instrument Rating</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Message for Community Aerosports"
            value={message}
            onChange={handleChange}
          ></textarea>
          {messageRequired && <p className="text-red-500 text-xs mt-2">Message is required.</p>}
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
          <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
