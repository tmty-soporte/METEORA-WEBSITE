# Meteora Website - Plataformas Tecnológicas

Este proyecto contiene el sitio web de **Meteora**, una empresa de tecnología con más de 20 años de experiencia especializada en transformar datos en decisiones inteligentes. El sitio presenta su portafolio de servicios y sus cuatro plataformas principales: **ERGON**, **HYDRA**, **MENTHOR** y **SIGE**.

La aplicación está desarrollada con **Next.js 16 (App Router)**, **React 19** y **CSS personalizado (Vanilla CSS)** para ofrecer una experiencia interactiva de alto rendimiento y una estética premium moderna (con animaciones de scroll, efectos de brillo y mapas dinámicos interactivos).

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos

Asegúrate de tener instalado:
*   [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada)
*   `npm` (incluido con Node.js)

### 📦 Instalación

1. Clona o ubícate en la carpeta del repositorio:
   ```bash
   cd "C:\Users\tecno\Documents\desarrollo web\METEORA-WEBSITE"
   ```
2. Instala las dependencias del proyecto (en caso de que no estén instaladas):
   ```bash
   npm install
   ```

### 💻 Ejecución en Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

> [!IMPORTANT]
> **Solución para error de scripts en Windows (PowerShell)**:
> Si PowerShell arroja un error indicando que la ejecución de scripts está deshabilitada en el sistema (`SecurityError: UnauthorizedAccess` o similar), puedes iniciar el proyecto llamándolo directamente a través del Command Prompt:
> ```bash
> cmd.exe /c npm run dev
> ```
> O también usando bypass de política temporalmente:
> ```powershell
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> npm run dev
> ```

El servidor estará listo y escuchando en:
*   Local: [http://localhost:3000](http://localhost:3000)

### 🏗️ Compilación para Producción

Para compilar la aplicación optimizada para producción:
```bash
npm run build
```

Para iniciar el servidor en modo de producción una vez compilado:
```bash
npm run start
```

---

## 📂 Estructura del Proyecto

La estructura del código fuente sigue el estándar moderno de Next.js App Router:

```text
METEORA-WEBSITE/
├── public/                 # Archivos estáticos
│   └── assets/             # Logos, imágenes y videos promocionales
├── src/
│   ├── app/                # Enrutamiento de Next.js (App Router)
│   │   ├── ergon/          # Vistas del producto ERGON y sus verticales
│   │   │   ├── agua-medio-ambiente/
│   │   │   ├── empresas-privadas/
│   │   │   ├── infraestructura/
│   │   │   └── seguridad-publica/
│   │   ├── hydra/          # Vista del producto HYDRA
│   │   ├── menthor/        # Vista del producto MENTHOR
│   │   ├── sige/           # Vista del producto SIGE
│   │   ├── styles/         # Hojas de estilo CSS del sitio web
│   │   │   ├── index.css               # Diseño global y tokens de estilo
│   │   │   ├── hero-animations.css     # Animaciones del Hero e interactividad
│   │   │   └── scroll-animations.css   # Animaciones al hacer scroll
│   │   ├── layout.jsx      # Plantilla global (fuentes, scripts amCharts, etc.)
│   │   └── page.jsx        # Landing page principal
│   └── components/         # Componentes React reutilizables
│       ├── AmChartsMap.jsx      # Mapa interactivo global de presencia (Meteora)
│       ├── AnimatedCounter.jsx  # Animador de cifras estadísticas
│       ├── BackToTop.jsx        # Botón para volver al inicio
│       ├── Footer.jsx           # Pie de página
│       ├── Navbar.jsx           # Barra de navegación flotante premium
│       └── ScrollObserver.jsx   # Gestor de animaciones de aparición al hacer scroll
├── package.json            # Scripts de ejecución y dependencias del proyecto
└── README.md               # Este archivo de documentación
```

---

## 📘 Manual de Uso Rápido (Funcionalidades Principales)

El sitio web está diseñado con un enfoque interactivo e inmersivo. A continuación se detallan las secciones clave y cómo utilizarlas o interactuar con ellas:

### 1. Navegación e Interactividad
*   **Barra de Navegación (`Navbar`)**: Se sitúa de forma flotante en la parte superior y se adapta con efectos visuales transparentes según bajas por la pantalla. Proporciona enlaces rápidos a las secciones principales (`#home`, `#about`, `#servicios`, `#productos`, `#ubicacion`, `#contact`).
*   **Scroll Animations**: Todos los elementos visuales usan la clase `reveal` combinada con modificadores (`fade-up`, `fade-left`, `scale-up`, etc.). El script en `ScrollObserver.jsx` detecta cuándo entran al área visible y les aplica animaciones suaves con aceleraciones premium.

### 2. Portafolio de Productos (Sección Productos)
El núcleo de Meteora son sus cuatro plataformas comerciales. Cada una tiene su página interactiva dedicada donde se explican sus características específicas y verticales:
*   **ERGON** ([`/ergon`](http://localhost:3000/ergon)): Gestión de servicios en campo con trazabilidad y georreferenciación. Incluye subpáginas específicas accesibles desde los botones interactivos del Hero:
    *   *Infraestructura* ([`/ergon/infraestructura`](http://localhost:3000/ergon/infraestructura))
    *   *Agua y Medio Ambiente* ([`/ergon/agua-medio-ambiente`](http://localhost:3000/ergon/agua-medio-ambiente))
    *   *Seguridad Pública* ([`/ergon/seguridad-publica`](http://localhost:3000/ergon/seguridad-publica))
    *   *Empresas Privadas* ([`/ergon/empresas-privadas`](http://localhost:3000/ergon/empresas-privadas))
*   **HYDRA** ([`/hydra`](http://localhost:3000/hydra)): Control y administración de organismos operadores de agua.
*   **MENTHOR** ([`/menthor`](http://localhost:3000/menthor)): Plataforma para la capacitación estructurada y desarrollo de talento.
*   **SIGE** ([`/sige`](http://localhost:3000/sige)): Monitoreo y control de consumos energéticos, volumetría y automatización industrial.

### 3. Mapa Interactivo de Ubicación
En la sección **Ubicación** se carga dinámicamente un mapa mundial inteligente desarrollado con **amCharts v5** (`AmChartsMap.jsx`).
*   El mapa destaca las sedes estratégicas: **Torreón, Monterrey, Ciudad de México y Houston**.
*   Muestra líneas animadas de conexión de datos y marcadores premium que representan el flujo operacional internacional de la empresa.

### 4. Formulario de Solicitud de Demostraciones
En la sección final de **Contacto**:
*   Los usuarios pueden llenar su información comercial (Nombre, Organización, Cargo, Teléfono, Correo).
*   Se selecciona la plataforma de interés (**Hydra, Ergon, Menthor, SIGE**).
*   Cuenta con botones diferenciados de acción: `Solicitar demo` y `Recibir información` para captación activa de leads.
