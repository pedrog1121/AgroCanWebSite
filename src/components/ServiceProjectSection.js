// src/components/ServiceProjectSection.js
import React, { useState } from 'react';
import { X } from 'lucide-react';

// Componente Modal reutilizable
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '80vh',
        overflow: 'auto',
        position: 'relative',
        animation: 'modalFadeIn 0.3s ease-out'
      }}>
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ margin: 0, color: '#2D7D32', fontSize: '24px' }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            <X size={24} color="#666" />
          </button>
        </div>
        <div style={{ padding: '20px' }}>
          {children}
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#2D7D32',
              color: 'white',
              border: 'none',
              padding: '10px 30px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente principal de Servicios y Proyectos
const ServiceProjectSection = ({ data, id, isProject = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Hook para detectar cambios de tamaño de pantalla
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id={id} 
      style={{ 
        padding: '80px 20px', 
        backgroundColor: isProject ? '#f8f9fa' : 'white' 
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Layout para SERVICIOS (imagen izquierda, contenido derecha) */}
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
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h2 style={{ 
                  fontSize: isMobile ? '2rem' : '2.5rem', 
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
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1B5E20';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 15px rgba(45, 125, 50, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#2D7D32';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Más información
                  </button>
                </div>
              </div>
            </>
          )}
          
          {/* Layout para PROYECTOS (contenido izquierda, imagen derecha) */}
          {isProject && (
            <>
              <div>
                <h2 style={{ 
                  fontSize: isMobile ? '2rem' : '2.5rem',
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
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1B5E20';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 15px rgba(45, 125, 50, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#2D7D32';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
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
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal con información detallada */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={data.modalContent.title}
      >
        {data.modalContent.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '25px' }}>
            <h3 style={{ 
              color: '#2D7D32', 
              marginBottom: '10px', 
              fontSize: '18px',
              borderBottom: '2px solid #7CB342',
              paddingBottom: '5px'
            }}>
              {section.title}
            </h3>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.6',
              fontSize: '15px'
            }}>
              {section.description}
            </p>
          </div>
        ))}
      </Modal>
    </section>
  );
};

export default ServiceProjectSection;