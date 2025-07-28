import React, { useState } from 'react';
import { X } from 'lucide-react';

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