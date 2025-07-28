import React, { useState } from 'react';
import { X } from 'lucide-react';

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
          Consultoría y Asesoría
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