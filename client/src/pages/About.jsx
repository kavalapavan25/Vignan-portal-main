import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
      <div className="container mx-auto p-8">
        <p className="text-lg">
          Vignan Institute of Technology and Science is a premier institute for technical education. Our vision is to produce globally competent engineers with a sense of discipline, social relevance, and ethical values.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold">NAAC A+</h2>
            <p>Accredited</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">NBA</h2>
            <p>Approved</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">100%</h2>
            <p>Experienced Faculty</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">70+</h2>
            <p>Companies Visited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
