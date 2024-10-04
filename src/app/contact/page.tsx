'use client';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaInfoCircle, FaCommentAlt } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as keyof FormData]: value,
    }));
    validateField(name as keyof FormData, value);
  };
  

  const validateField = (name: keyof FormData, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        error = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        error = !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email format' : '';
        break;
      case 'subject':
        error = value.trim() === '' ? 'Subject is required' : '';
        break;
      case 'message':
        error =
          value.trim() === ''
            ? 'Message is required'
            : value.length > 500
            ? 'Message must be less than 500 characters'
            : '';
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};

    // Validate all fields on submit
    Object.keys(formData).forEach((key) => {
      const fieldKey = key as keyof FormData;
      validateField(fieldKey, formData[fieldKey]);
      if (formData[fieldKey].trim() === '') {
        newErrors[fieldKey] = `${
          fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)
        } is required`;
      } else if (errors[fieldKey]) {
        newErrors[fieldKey] = errors[fieldKey];
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // If no errors, proceed with form submission logic
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  const renderInput = (
    name: keyof FormData,
    label: string,
    icon: JSX.Element,
    type = 'text'
  ) => (
    <div className="mb-4" key={name}>
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder={label}
        />
      </div>
      {errors[name] && (
        <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="text-gray-700">
            Your message has been successfully sent. We&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100vh] bg-gray-100 text-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We d love to hear from you Please fill out the form below.
          </p>
        </div>
        <form className="mt-2" onSubmit={handleSubmit}>
          {renderInput('name', 'Name', <FaUser className="text-gray-400" />)}
          {renderInput(
            'email',
            'Email',
            <FaEnvelope className="text-gray-400" />,
            'email'
          )}
          {renderInput(
            'subject',
            'Subject',
            <FaInfoCircle className="text-gray-400" />
          )}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaCommentAlt className="text-gray-400" />
              </span>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={500}
                className={`w-full pl-10 pr-3 py-2 text-gray-800 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your message"
              ></textarea>
            </div>
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
            <p className="text-sm mt-2">
              {formData.message.length}/500 characters
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
