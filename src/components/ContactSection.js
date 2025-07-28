import React, { useState } from 'react';
import { X } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

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
          fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
          marginBottom: '50px', 
          textAlign: 'center',
          color: 'white'
        }}>
          CONTACTO
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
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
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
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
