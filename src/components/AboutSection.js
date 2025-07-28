import React, { useState } from 'react';
import { X } from 'lucide-react';

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" style={{ padding: '80px 20px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem', 
          marginBottom: '30px', 
          color: '#2D7D32' 
        }}>
          {siteData.about.title}
        </h2>
        
        <div style={{ marginBottom: '50px' }}>
          <img 
            src={siteData.about.image}
            alt="Equipo AgroCan"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '30px' }}>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.6', 
            color: '#555',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            {siteData.about.description}
          </p>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.6', 
            color: '#555',
            textAlign: 'justify'
          }}>
            {siteData.about.team}
          </p>
        </div>
        
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: '#2D7D32',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1B5E20'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2D7D32'}
        >
          Más información
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={siteData.about.modalContent.title}
      >
        {siteData.about.modalContent.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#2D7D32', marginBottom: '10px', fontSize: '18px' }}>
              {section.title}
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              {section.description}
            </p>
          </div>
        ))}
      </Modal>
    </section>
  );
};