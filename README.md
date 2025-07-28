# 🌱 AgroCan - Sitio Web Corporativo

Una página web moderna y responsive para la consultora agropecuaria AgroCan, desarrollada con React y siguiendo principios SOLID para un código mantenible y escalable.

## 🚀 Características

- ✅ **Diseño Responsive** - Optimizado para desktop, tablet y móvil
- ✅ **Pantalla de Carga** - Animación personalizada con logo AgroCan
- ✅ **Navegación Suave** - Scroll automático entre secciones
- ✅ **Modales Informativos** - Detalles expandidos para servicios y proyectos
- ✅ **Slider de Clientes** - Carrusel automático con controles manuales
- ✅ **Formulario de Contacto** - Con validación de campos
- ✅ **Botones Flotantes** - WhatsApp y teléfono siempre accesibles
- ✅ **Archivo de Mantenimiento** - Fácil actualización de contenidos
- ✅ **Principios SOLID** - Código limpio y escalable

## 📁 Estructura del Proyecto

```
agrocan-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── AgroCanWebsite.js    # Componente principal
│   ├── data/
│   │   └── siteData.js          # Archivo de mantenimiento
│   ├── styles/
│   │   └── index.css            # Estilos globales
│   ├── App.js                   # Componente raíz
│   └── index.js                 # Punto de entrada
├── package.json
└── README.md
```

## 🛠️ Instalación

### 1. Crear el proyecto React

```bash
npx create-react-app agrocan-website
cd agrocan-website
```

### 2. Instalar dependencias

```bash
npm install lucide-react
```

### 3. Limpiar archivos innecesarios

```bash
rm src/App.css src/App.test.js src/logo.svg src/reportWebVitals.js src/setupTests.js
```

### 4. Crear estructura de carpetas

```bash
mkdir src/components src/data src/styles
```

### 5. Copiar archivos del proyecto

- Copiar `src/components/AgroCanWebsite.js` (del artifact anterior)
- Copiar `src/data/siteData.js` (del artifact de datos)
- Copiar `src/styles/index.css` (estilos CSS)
- Modificar `src/App.js` e `src/index.js`
- Modificar `public/index.html`

## 📝 Archivos a Crear/Modificar

### src/App.js

```javascript
import React from "react";
import AgroCanWebsite from "./components/AgroCanWebsite";

function App() {
	return (
		<div className="App">
			<AgroCanWebsite />
		</div>
	);
}

export default App;
```

### src/index.js

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
```

### public/index.html

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#2D7D32" />
		<meta
			name="description"
			content="AgroCan - Consultoría y Asesoría Agropecuaria en Paraguay"
		/>
		<title>AgroCan - Consultoría Agropecuaria</title>
	</head>
	<body>
		<noscript>
			Necesitas habilitar JavaScript para ejecutar esta aplicación.
		</noscript>
		<div id="root"></div>
	</body>
</html>
```

## ⚙️ Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests
npm test

# Analizar el bundle
npm run build && npx serve -s build
```

## 🎨 Personalización

### 📋 Archivo de Mantenimiento (src/data/siteData.js)

El archivo `siteData.js` contiene toda la información que aparece en la web. Para personalizar el contenido, simplemente modifica este archivo:

```javascript
// Información de la empresa
company: {
  phone: "+595-21-567-890",      // ⚠️ ACTUALIZAR
  whatsapp: "+595981234567",     // ⚠️ ACTUALIZAR
  email: "info@agrocan.com.py",  // ⚠️ ACTUALIZAR
  address: "Tu dirección real"   // ⚠️ ACTUALIZAR
}
```

### 🖼️ Imágenes

Reemplaza las URLs de placeholder con imágenes reales:

1. **Coloca las imágenes en `public/images/`**
2. **Actualiza las rutas en `siteData.js`:**

```javascript
hero: {
  backgroundImage: "/images/hero-background.jpg"
},
services: {
  image: "/images/servicios.jpg"
},
// etc...
```

### 🎨 Colores y Estilos

Los colores principales se pueden cambiar en `src/styles/index.css`:

```css
:root {
	--primary-green: #2d7d32;
	--secondary-green: #7cb342;
	--accent-red: #d32f2f;
}
```

## 📱 Secciones de la Web

1. **Header** - Navegación fija con menú responsive
2. **Hero** - Sección principal con call-to-action
3. **Servicios** - Información sobre servicios con modal
4. **Proyectos** - Proyectos realizados con modal
5. **Clientes** - Slider automático de clientes
6. **Sobre Nosotros** - Información de la empresa con modal
7. **Contacto** - Formulario funcional
8. **Ubicación** - Mapa integrado
9. **Footer** - Enlaces y redes sociales
10. **Botones Flotantes** - WhatsApp y teléfono

## 🔧 Tecnologías Utilizadas

- **React 18** - Framework principal
- **Lucide React** - Iconos
- **CSS Puro** - Estilos sin librerías externas
- **Principios SOLID** - Arquitectura limpia

## 📦 Dependencias

```json
{
	"dependencies": {
		"react": "^18.2.0",
		"react-dom": "^18.2.0",
		"lucide-react": "^0.263.1",
		"react-scripts": "5.0.1"
	}
}
```

## 🚀 Despliegue

### Netlify

```bash
npm run build
# Subir la carpeta 'build' a Netlify
```

### Vercel

```bash
npx vercel
# Seguir las instrucciones
```

### Hosting tradicional

```bash
npm run build
# Subir el contenido de 'build' a tu servidor
```

## 📞 Funcionalidades

### Botones Flotantes

- **WhatsApp**: Abre chat directo con el número configurado
- **Teléfono**: Inicia llamada directa

### Formulario de Contacto

- Validación de campos requeridos
- Campos: Nombre, Apellido, Email, Asunto, Mensaje
- Responsive en móviles

### Navegación

- Scroll suave entre secciones
- Menú hamburguesa en móvil
- Enlaces del footer funcionales

## 🎯 Próximos Pasos

1. **Reemplazar imágenes placeholder** con fotos reales
2. **Actualizar información** en `siteData.js`
3. **Configurar analytics** (Google Analytics)
4. **Optimizar SEO** (meta tags, sitemap)
5. **Integrar formulario** con servicio de email
6. **Agregar certificado SSL** para HTTPS

## 🐛 Troubleshooting

### Error: "Module not found"

```bash
npm install lucide-react
```

### Imágenes no cargan

- Verificar que las imágenes estén en `public/`
- Usar rutas relativas: `/images/foto.jpg`

### Problema de responsive

- Revisar CSS en `src/styles/index.css`
- Verificar media queries

## 📄 Licencia

Este proyecto fue desarrollado para AgroCan. Todos los derechos reservados.

---

**Desarrollado por Chobits 32**

¿Necesitas ayuda? Revisa la documentación o contacta al desarrollador.
