import React from 'react';

const CEO = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">CEO's Message</h1>
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center">
        <img src="https://via.placeholder.com/150" alt="CEO" className="rounded-full h-48 w-48 mb-8 md:mb-0 md:mr-8" />
        <div>
          <h2 className="text-3xl font-bold">Dr. Lavu Rathaiah</h2>
          <p className="text-xl text-gray-600">Chairman & CEO</p>
          <p className="mt-4 text-lg">
            "Welcome to Vignan! Our commitment to quality education and holistic development has been the driving force behind our success. We aim to nurture young minds to become future leaders and innovators."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CEO;
