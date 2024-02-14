import React from "react";

const Developers = () => {
  // Sample data for developers
  const developers = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      imageUrl: "path/to/john-doe.jpg",
      socials: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Backend Developer",
      imageUrl: "path/to/jane-smith.jpg",
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith"
      }
    },
    // Add more developers as needed
  ];

  return (
    <div className="container mx-auto py-20" id="developers" style={{ paddingTop: '80px' }}>
      <h1 className="text-xl font-semibold mb-6">Meet Our Developers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {developers.map((developer) => (
          <div key={developer.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Developer Image */}
            <img src={developer.imageUrl} alt={developer.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            
            {/* Developer Info */}
            <div className="text-center">
              <h2 className="text-lg font-semibold">{developer.name}</h2>
              <p className="text-gray-600">{developer.role}</p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-4 flex justify-center">
              <a href={developer.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 mr-2">
                <i className="fab fa-github"></i>
              </a>
              <a href={developer.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 mr-2">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={developer.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
