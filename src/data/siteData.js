// src/data/siteData.js
// 📝 ARCHIVO DE MANTENIMIENTO - ACTUALIZA AQUÍ TODOS LOS CONTENIDOS

export const siteData = {
  // 🏢 INFORMACIÓN DE LA EMPRESA
  company: {
    name: "AgroCan",
    tagline: "Consultoría y Asesoría",
    phone: "+595-21-567-890",           // ⚠️ ACTUALIZAR con número real
    whatsapp: "+595981234567",          // ⚠️ ACTUALIZAR con WhatsApp real
    email: "info@agrocan.com.py",       // ⚠️ ACTUALIZAR con email real
    address: "Av. Mcal. López 1234, Asunción, Paraguay"  // ⚠️ ACTUALIZAR con dirección real
  },

  // 🦸‍♂️ SECCIÓN HERO
  hero: {
    subtitle: "Desarrollando estrategias innovadoras",
    title: "CULTIVANDO EL FUTURO",
    ctaText: "Reserva una consulta",
    backgroundImage: "/api/placeholder/1920/1080"  // ⚠️ REEMPLAZAR con imagen real
  },

  // 🔧 SERVICIOS
  services: {
    title: "SERVICIOS",
    description: "Ofrecemos consultoría integral para el sector agropecuario, combinando conocimiento tradicional con tecnología de vanguardia. Desde análisis de suelos hasta implementación de sistemas de agricultura de precisión, acompañamos a productores y empresas agrícolas en su crecimiento sostenible.",
    image: "/api/placeholder/600/300",  // ⚠️ REEMPLAZAR con imagen real de servicios
    modalContent: {
      title: "Nuestros Servicios Especializados",
      sections: [
        {
          title: "Análisis de Suelos y Nutrición",
          description: "Evaluación completa de la composición del suelo, pH, nutrientes disponibles y recomendaciones específicas para optimizar la fertilidad."
        },
        {
          title: "Agricultura de Precisión",
          description: "Implementación de tecnologías GPS, sensores y drones para mapeo de cultivos y aplicación variable de insumos."
        },
        {
          title: "Consultoría en Sostenibilidad",
          description: "Desarrollo de prácticas agrícolas sostenibles que maximicen la productividad mientras protegen el medio ambiente."
        },
        {
          title: "Sistemas de Riego Inteligente",
          description: "Diseño e implementación de sistemas de riego automatizados con sensores de humedad y control remoto."
        },
        {
          title: "Certificaciones Orgánicas",
          description: "Asesoramiento para obtener certificaciones orgánicas nacionales e internacionales para sus productos."
        }
      ]
    }
  },

  // 🚀 PROYECTOS
  projects: {
    title: "PROYECTOS",
    description: "Desarrollamos proyectos agroindustriales sostenibles que maximizan la productividad mientras protegen el medio ambiente. Trabajamos en optimización de cultivos, sistemas de riego inteligentes, certificaciones orgánicas y programas de trazabilidad alimentaria para el mercado nacional e internacional.",
    image: "/api/placeholder/600/300",  // ⚠️ REEMPLAZAR con imagen real de proyectos
    modalContent: {
      title: "Proyectos de Transformación Agrícola",
      sections: [
        {
          title: "Modernización de Estancias Ganaderas",
          description: "Implementamos sistemas de trazabilidad bovina, mejoramiento genético y manejo rotacional de pasturas. Incluye instalación de bebederos automáticos y sistemas de pesaje digital."
        },
        {
          title: "Desarrollo de Cultivos Hidropónicos", 
          description: "Diseño y construcción de invernaderos con sistemas hidropónicos para producción de hortalizas y hierbas aromáticas. Control automatizado de clima, nutrientes y pH."
        },
        {
          title: "Plantas de Procesamiento Agroindustrial",
          description: "Desarrollo de plantas para procesamiento de granos, frutas y hortalizas. Incluye diseño de layout, selección de maquinaria e implementación de sistemas de calidad HACCP."
        },
        {
          title: "Agricultura de Precisión en Soja",
          description: "Implementación de tecnología GPS y mapeo satelital para optimizar la siembra, aplicación de fertilizantes y cosecha de soja en grandes extensiones."
        }
      ]
    }
  },

  // 👥 CLIENTES
  clients: [
    { 
      name: "Agropecuaria Del Sur", 
      color: "#8B5CF6",
      logo: "/api/placeholder/120/80"  // ⚠️ REEMPLAZAR con logo real
    },
    { 
      name: "Granja Familiar Mbareté", 
      color: "#EF4444",
      logo: "/api/placeholder/120/80"  // ⚠️ REEMPLAZAR con logo real
    },
    { 
      name: "Frigorífico San Miguel", 
      color: "#F59E0B",
      logo: "/api/placeholder/120/80"  // ⚠️ REEMPLAZAR con logo real
    },
    { 
      name: "Cooperativa Agroganadera", 
      color: "#10B981",
      logo: "/api/placeholder/120/80"  // ⚠️ REEMPLAZAR con logo real
    },
    { 
      name: "Industrias Alimentarias SA", 
      color: "#3B82F6",
      logo: "/api/placeholder/120/80"  // ⚠️ REEMPLAZAR con logo real
    },
    // ➕ AGREGAR MÁS CLIENTES AQUÍ
  ],

  // 👨‍💼 SOBRE NOSOTROS
  about: {
    title: "SOBRE NOSOTROS",
    description: "Somos una consultoría especializada en el sector agropecuario con más de 15 años de experiencia en Paraguay y la región. Combinamos el conocimiento técnico agrícola con las últimas tecnologías para brindar soluciones integrales que impulsen la productividad y sostenibilidad del campo paraguayo.",
    team: "Nuestro equipo está conformado por ingenieros agrónomos, especialistas en suelos, técnicos en riego, consultores en certificaciones internacionales y expertos en agricultura de precisión. Creemos que la innovación y el conocimiento técnico son fundamentales para el desarrollo del sector agropecuario.",
    image: "/api/placeholder/600/400",  // ⚠️ REEMPLAZAR con imagen real del equipo
    modalContent: {
      title: "Conoce Más Sobre AgroCan",
      sections: [
        {
          title: "Nuestra Historia",
          description: "Fundada en 2009 por un equipo de ingenieros agrónomos paraguayos egresados de las mejores universidades del país y la región. Comenzamos como un pequeño grupo de consultores y hoy somos referentes en innovación agrícola."
        },
        {
          title: "Nuestro Equipo", 
          description: "Contamos con más de 25 profesionales especializados: ingenieros agrónomos, veterinarios, técnicos en suelos, especialistas en riego, expertos en certificaciones y consultores en agronegocios."
        },
        {
          title: "Metodología de Trabajo",
          description: "Aplicamos una metodología integral que combina diagnóstico inicial, planificación estratégica, implementación gradual y seguimiento continuo. Cada proyecto se adapta a las necesidades específicas del cliente."
        },
        {
          title: "Certificaciones y Reconocimientos",
          description: "Contamos con certificaciones internacionales en agricultura sostenible, manejo integrado de plagas y sistemas de calidad alimentaria. Reconocidos por la Cámara de Comercio Paraguay-Brasil."
        }
      ]
    }
  },

  // 🌐 REDES SOCIALES
  socialMedia: {
    facebook: "https://facebook.com/agrocan",      // ⚠️ ACTUALIZAR con URL real
    twitter: "https://twitter.com/agrocan",        // ⚠️ ACTUALIZAR con URL real
    linkedin: "https://linkedin.com/company/agrocan", // ⚠️ ACTUALIZAR con URL real
    instagram: "https://instagram.com/agrocan"     // ⚠️ ACTUALIZAR con URL real
  },

  // 📍 UBICACIÓN Y MAPA
  location: {
    address: "Av. Mariscal López 1234",
    city: "Asunción, Paraguay",
    coordinates: {
      lat: -25.2637,  // ⚠️ ACTUALIZAR con coordenadas reales
      lng: -57.5759   // ⚠️ ACTUALIZAR con coordenadas reales
    },
    mapImage: "/api/placeholder/1200/400"  // ⚠️ REEMPLAZAR con captura de mapa real
  },

  // ⚙️ CONFIGURACIÓN GENERAL
  config: {
    loadingDuration: 2500,  // Duración de la pantalla de carga en ms
    sliderInterval: 3000,   // Intervalo del slider de clientes en ms
    animationDelay: {
      hero: {
        subtitle: 200,
        title: 400,
        button: 600
      }
    }
  }
};

export default siteData;