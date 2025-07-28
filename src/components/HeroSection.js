import React, { useState } from 'react';
import { X } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/api/placeholder/1920/1080")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '80px 20px 0'
      }}
    >
      <div style={{ maxWidth: '800px', animation: 'fadeInUp 1s ease-out' }}>
        <p style={{ 
          fontSize: '18px', 
          marginBottom: '20px',
          opacity: 0.9
        }}>
          {siteData.hero.subtitle}
        </p>
        <h1 style={{ 
          fontSize: window.innerWidth <= 768 ? '2.5rem' : '4rem', 
          fontWeight: 'bold', 
          marginBottom: '40px',
          letterSpacing: '2px'
        }}>
          {siteData.hero.title}
        </h1>
        <button
          style={{
            border: '2px solid white',
            backgroundColor: 'transparent',
            color: 'white',
            padding: '15px 40px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#2D7D32';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          {siteData.hero.ctaText}
        </button>
      </div>
    </section>
  );
};

// Componente de Servicios y Proyectos
const ServiceProjectSection = ({ data, id, isProject = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id={id} style={{ padding: '80px 20px', backgroundColor: isProject ? '#f8f9fa' : 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {!isProject && (
            <>
              <div>
                <img 
                  src={data.image} 
                  alt={data.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              <div>
                <h2 style={{ 
                  fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem', 
                  marginBottom: '30px', 
                  color: '#2D7D32',
                  textAlign: 'center'
                }}>
                  {data.title}
                </h2>
                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.6', 
                  marginBottom: '30px',
                  color: '#555',
                  textAlign: 'justify'
                }}>
                  {data.description}
                </p>
                <div style={{ textAlign: 'center' }}>
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
              </div>
            </>
          )}
          
          {isProject && (
            <>
              <div>
                <h2 style={{ 
                  fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
                  marginBottom: '30px', 
                  color: '#2D7D32',
                  textAlign: 'center'
                }}>
                  {data.title}
                </h2>
                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.6', 
                  marginBottom: '30px',
                  color: '#555',
                  textAlign: 'justify'
                }}>
                  {data.description}
                </p>
                <div style={{ textAlign: 'center' }}>
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
              </div>
              <div>
                <img 
                  src={data.image} 
                  alt={data.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={data.modalContent.title}
      >
        {data.modalContent.sections.map((section, index) => (
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