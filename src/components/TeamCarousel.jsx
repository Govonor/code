import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/TeamCarousel.css'; // Ensure correct path to your CSS file

// Import images
import fredrickImage from '../images/fredrick.jpg';
import samuelImage from '../images/samuel.jpg';
import vincentImage from '../images/vincent.jpg';

const teamMembers = [
  {
    name: 'Fredrick Odhiambo',
    role: 'Co-Founder & CEO',
    education: 'Bachelor’s in Statistics & Computer Science',
    achievements: 'Pioneer in sustainable farming practices, Awarded Best Agri-Tech Innovator 2023',
    image: fredrickImage
  },
  {
    name: 'Samuel Ambudo',
    role: 'CTO',
    education: 'Master’s in Computer Science',
    achievements: 'Developed key features for Ask Mkulima platform, Recognized as Top Tech Leader 2024',
    image: samuelImage
  },
  {
    name: 'Vincent Otieno',
    role: 'Community Manager',
    education: 'Bachelor’s in Community Development',
    achievements: 'Strengthened farmer-consumer relationships, Awarded Community Engagement Leader 2022',
    image: vincentImage
  }
  // Add more team members as needed
];

const TeamCarousel = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMouseEnter = (member) => {
    setSelectedMember(member);
  };

  const handleMouseLeave = () => {
    setSelectedMember(null);
  };

  return (
    <section className="team-carousel">
      <h2>Meet Our Team</h2>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="team-member" 
            onMouseEnter={() => handleMouseEnter(member)} 
            onMouseLeave={handleMouseLeave}
          >
            <img src={member.image} alt={member.name} />
            <div className="team-info">
              <p><strong>{member.name}:</strong> {member.role}</p>
              {selectedMember === member && (
                <div className="team-details">
                  <p><strong>Education:</strong> {member.education}</p>
                  <p><strong>Achievements:</strong> {member.achievements}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default TeamCarousel;
