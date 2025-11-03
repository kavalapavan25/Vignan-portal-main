import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="bg-vignan-blue text-white text-center p-16">
        <h1 className="text-5xl font-bold">Vignan Institute of Technology and Science</h1>
        <p className="text-xl mt-4">Gateway to Excellence</p>
      </div>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold">90%</h2>
            <p>Placements (Avg Salary: 4.5 LPA)</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">151-200</h2>
            <p>NIRF Rank 2024</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">₹4 Crores</h2>
            <p>R&D Funded Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">21+</h2>
            <p>Years of Expertise</p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">About Vignan</h2>
          <p className="text-lg">
            Vignan Institute of Technology and Science was founded in 1999 by Dr. L. Rathaiah. With over 2500 students and a sprawling 360-acre campus, VGNT has been a beacon of excellence in technical education for over two decades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
