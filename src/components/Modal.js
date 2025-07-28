import React, { useState } from 'react';
import { X } from 'lucide-react';

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