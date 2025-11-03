import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/contact', formData);
      toast.success(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Failed to send message.');
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-vignan-blue text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Address</h2>
          <p>
            Deshmukhi (V), Pochampally (M), Yadadri-Bhuvanagiri District, Telangana – 508284
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.412423821731!2d78.7206883148763!3d17.28721898808164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3a1eaaaaaab%3A0x8c7c3c1e2d27b9c9!2sVignan%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1633534502521!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
