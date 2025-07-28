import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ 
      backgroundColor: '#2D7D32', 
      color: 'white', 
      padding: '60px 20px 20px' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Logo y contacto */}
          <div>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              <span style={{ color: '#ffffff' }}>Agro</span>
              <span style={{ color: '#ffcccc' }}>Can</span>
            </div>
            <p style={{ margin: '5px 0', fontSize: '14px' }}>
              {siteData.company.address}
            </p>
            <p style={{ margin: '5px 0', fontSize: '14px' }}>
              Mail: {siteData.company.email}
            </p>
            <p style={{ margin: '5px 0', fontSize: '14px' }}>
              Tel: {siteData.company.phone}
            </p>
          </div>
          
          {/* Menú */}
          <div>
            <h3 style={{ marginBottom: '20px', color: '#7CB342' }}>MENÚ</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { text: 'Acerca de', id: 'about' },
                { text: 'Servicios', id: 'services' },
                { text: 'Recursos', id: 'clients' },
                { text: 'Proyectos', id: 'projects' },
                { text: 'Contacto', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '2px 0'
                  }}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
          
          {/* Redes sociales */}
          <div>
            <h3 style={{ marginBottom: '20px', color: '#7CB342' }}>REDES</h3>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1877F2',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>f</span>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1DA1F2',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>@</span>
              </div>
            </div>
            <p style={{ fontSize: '12px', margin: 0 }}>
              © 2025 Creado por AGROCAN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};