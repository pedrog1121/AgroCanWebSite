// src/components/AgroCanWebsite.js
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Menu
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ServiceProjectSection from './ServiceProjectSection';

// Componente de Loading
const LoadingScreen = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s ease-out'
    }}>
      <div style={{
        textAlign: 'center',
        animation: 'fadeInUp 1s ease-out'
      }}>
        <div style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#2D7D32',
          marginBottom: '20px'
        }}>
          <span style={{ color: '#2D7D32' }}>Agro</span>
          <span style={{ color: '#D32F2F' }}>Can</span>
        </div>
        <div style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '30px'
        }}>
          {siteData.company.tagline}
        </div>
        <div style={{
          width: '50px',
          height: '3px',
          backgroundColor: '#2D7D32',
          borderRadius: '2px',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#7CB342',
            animation: 'loading 2s ease-in-out infinite'
          }}></div>
        </div>
      </div>
    </div>
  );
};

// Componente Modal (reutilizable)
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

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
        {!isMobile && (
          <nav>
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
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && isMobile && (
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

// Componente Hero Section
const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section 
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${siteData.hero.backgroundImage}")`,
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
          fontSize: isMobile ? '2.5rem' : '4rem', 
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

// Componente Slider de Clientes
const ClientsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const clients = siteData.clients;

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, siteData.config.sliderInterval);
    return () => clearInterval(timer);
  }, [clients.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <section id="clients" style={{ 
      padding: '80px 20px', 
      backgroundColor: '#e8f5e8' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem', 
          marginBottom: '50px', 
          color: '#2D7D32' 
        }}>
          NUESTROS CLIENTES
        </h2>
        
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}>
            {clients.map((client, index) => (
              <div 
                key={index}
                style={{
                  flex: `0 0 ${100 / itemsPerView}%`,
                  padding: '0 20px'
                }}
              >
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  padding: '40px 20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  margin: '0 10px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: client.color,
                    borderRadius: '10px',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {client.name.charAt(0)}
                  </div>
                  <h3 style={{ 
                    color: '#2D7D32',
                    fontSize: '16px',
                    margin: 0
                  }}>
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronLeft size={24} color="#2D7D32" />
          </button>
          
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronRight size={24} color="#2D7D32" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Componente Sobre Nosotros
const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section id="about" style={{ padding: '80px 20px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: isMobile ? '2rem' : '2.5rem', 
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

// Componente Formulario de Contacto
const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado correctamente!');
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <section id="contact" style={{ 
      padding: '80px 20px', 
      background: 'linear-gradient(135deg, #2D7D32 0%, #1B5E20 100%)',
      color: 'white'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '50px', 
          textAlign: 'center',
          color: 'white'
        }}>
          CONTACTO
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>
                Nombre
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => handleInputChange('nombre', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  borderBottom: '2px solid rgba(255,255,255,0.3)',
                  backgroundColor: 'transparent',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>
                Apellido
              </label>
              <input
                type="text"
                value={formData.apellido}
                onChange={(e) => handleInputChange('apellido', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  borderBottom: '2px solid rgba(255,255,255,0.3)',
                  backgroundColor: 'transparent',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  borderBottom: '2px solid rgba(255,255,255,0.3)',
                  backgroundColor: 'transparent',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>
                Asunto
              </label>
              <input
                type="text"
                value={formData.asunto}
                onChange={(e) => handleInputChange('asunto', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  borderBottom: '2px solid rgba(255,255,255,0.3)',
                  backgroundColor: 'transparent',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>
              Mensaje *
            </label>
            <textarea
              value={formData.mensaje}
              onChange={(e) => handleInputChange('mensaje', e.target.value)}
              rows="5"
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderBottom: '2px solid rgba(255,255,255,0.3)',
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <button
              type="submit"
              style={{
                backgroundColor: 'white',
                color: '#2D7D32',
                border: 'none',
                padding: '15px 40px',
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: '5px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// Componente Mapa de Ubicación
const LocationSection = () => {
  return (
    <section id="location" style={{ padding: '80px 20px', backgroundColor: '#2D7D32' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            width: '100%',
            height: '400px',
            backgroundImage: `url("${siteData.location.mapImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              maxWidth: '300px'
            }}>
              <h3 style={{ 
                color: '#2D7D32', 
                margin: '0 0 10px 0',
                fontSize: '18px'
              }}>
                {siteData.location.address}
              </h3>
              <p style={{ 
                color: '#666', 
                margin: '0',
                fontSize: '14px'
              }}>
                {siteData.location.city}
              </p>
              <button style={{
                marginTop: '10px',
                backgroundColor: '#2D7D32',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}>
                Directions
              </button>
            </div>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '30px',
              height: '30px',
              backgroundColor: '#D32F2F',
              borderRadius: '50% 50% 50% 0',
              transformOrigin: 'center bottom',
              border: '3px solid white'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
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
                    padding: '2px 0',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#7CB342'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
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
              <a 
                href={siteData.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#1877F2',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>f</span>
              </a>
              <a 
                href={siteData.socialMedia.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#1DA1F2',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>@</span>
              </a>
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

// Componentes de Botones Flotantes
const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${siteData.company.whatsapp}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${siteData.company.phone}`, '_self');
  };

  return (
    <>
      {/* Botón WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
        }}
      >
        <MessageCircle size={28} color="white" />
      </button>

      {/* Botón Teléfono */}
      <button
        onClick={handlePhoneClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#2D7D32',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(45, 125, 50, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 25px rgba(45, 125, 50, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 20px rgba(45, 125, 50, 0.4)';
        }}
      >
        <Phone size={24} color="white" />
      </button>
    </>
  );
};

// Componente Principal
const AgroCanWebsite = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, siteData.config.loadingDuration);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <LoadingScreen isVisible={isLoading} />
      
      {!isLoading && (
        <>
          <Header />
          <HeroSection />
          <ServiceProjectSection data={siteData.services} id="services" />
          <ServiceProjectSection data={siteData.projects} id="projects" isProject={true} />
          <ClientsSlider />
          <AboutSection />
          <ContactSection />
          <LocationSection />
          <Footer />
          <FloatingButtons />
        </>
      )}
    </div>
  );
};

export default AgroCanWebsite;