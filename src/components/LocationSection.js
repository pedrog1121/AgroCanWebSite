import React, { useState } from 'react';
import { X } from 'lucide-react';

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
            backgroundImage: 'url("/api/placeholder/1200/400")',
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
                Av. Mariscal López
              </h3>
              <p style={{ 
                color: '#666', 
                margin: '0',
                fontSize: '14px'
              }}>
                Asunción, Paraguay
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