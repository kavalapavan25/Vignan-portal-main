import React from 'react';

const Principal = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Principal's Message</h1>
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center">
        <img src="https://via.placeholder.com/150" alt="Principal" className="rounded-full h-48 w-48 mb-8 md:mb-0 md:mr-8" />
        <div>
          <h2 className="text-3xl font-bold">Dr. G. Durga Sukumar</h2>
          <p className="text-xl text-gray-600">Principal</p>
          <p className="mt-4 text-lg">
            "At Vignan, we provide a vibrant and intellectually stimulating environment for our students. Our focus is on academic excellence, research, and innovation to create well-rounded professionals."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principal;
