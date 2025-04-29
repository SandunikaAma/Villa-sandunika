import React, { useState } from 'react';
import Gallery from './Gallery';



const servicesData = [
  {
    title: "Luxury Bedrooms<clickme>",
    image: "/images/card-i1.jpeg",
    description: "Spacious, air-conditioned rooms with en-suite bathrooms, plush bedding, and private balconies."
  },
  {
    title: "Private Chef Services<clickme>",
    image: "/images/card-i2.jpeg",
    description: "Delicious local and international meals prepared upon request using fresh ingredients."
  },
  {
    title: "Wellness & Yoga Sessions<clickme>",
    image: "/images/card-i3.jpeg",
    description: "Daily morning yoga or guided meditation sessions in a tranquil garden setting."
  },
  {
    title: "Daily Housekeeping<clickme>",
    image: "/images/card-i4.jpeg",
    description: "Professional cleaning and linen service to ensure a spotless stay."
  },
  {
    title: "Airport Pickup & Drop-off<clickme>",
    image: "/images/card-i5.jpeg",
    description: "Comfortable and convenient transportation arranged for your arrival and departure."
  },
  {
    title: "Private Swimming Pool<clickme>",
    image: "/images/card-i6.jpeg",
    description: "Relax in your own private pool surrounded by greenery and mountain views."
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services-container">
      
      <h2>Our Villa Services</h2>
      <div className="card-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card" onClick={() => handleCardClick(service)}>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-detail">
          <img src={selectedService.image} alt={selectedService.title} />
          <p>{selectedService.description}</p>
        </div>
      )}
      <Gallery/>
    </div>
  );
};

export default Services;
