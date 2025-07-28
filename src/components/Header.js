import React, { useState } from 'react';
import { X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={{
      backgroundColor: '#2D7D32',
      padding: '15px 0',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }} onClick={() => scrollToSection('hero')}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            <span style={{ color: '#ffffff' }}>Agro</span>
            <span style={{ color: '#ffcccc' }}>Can</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ 
          display: window.innerWidth > 768 ? 'flex' : 'none' 
        }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            {[
              { text: 'Acerca de', id: 'about' },
              { text: 'Proyectos', id: 'projects' },
              { text: 'Servicios', id: 'services' },
              { text: 'Recursos', id: 'clients' },
              { text: 'Contacto', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: '5px 0'
                }}
                onMouseEnter={(e) => e.target.style.color = '#7CB342'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {item.text}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#2D7D32',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ padding: '20px' }}>
              {[
                { text: 'Acerca de', id: 'about' },
                { text: 'Proyectos', id: 'projects' },
                { text: 'Servicios', id: 'services' },
                { text: 'Recursos', id: 'clients' },
                { text: 'Contacto', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '16px',
                    cursor: 'pointer',
                    padding: '10px 0',
                    marginBottom: '5px'
                  }}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};