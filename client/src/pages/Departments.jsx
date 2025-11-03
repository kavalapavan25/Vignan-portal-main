import React from 'react';

const DepartmentCard = ({ name, hod }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">HOD: {hod}</p>
    <button className="bg-vignan-blue text-white py-2 px-4 rounded">Learn More</button>
  </div>
);

const Departments = () => {
  const departments = [
    { name: 'Computer Science and Engineering', hod: 'Dr. John Doe' },
    { name: 'Electronics and Communication Engineering', hod: 'Dr. Jane Smith' },
    { name: 'Electrical and Electronics Engineering', hod: 'Dr. Robert Brown' },
    { name: 'Mechanical Engineering', hod: 'Dr. Emily White' },
    { name: 'Civil Engineering', hod: 'Dr. Michael Green' },
    { name: 'Information Technology', hod: 'Dr. Sarah Black' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Departments</h1>
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <DepartmentCard key={dept.name} {...dept} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
