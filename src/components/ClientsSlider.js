import React, { useState } from 'react';
import { X } from 'lucide-react';

const ClientsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clients = siteData.clients;
  const itemsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
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
