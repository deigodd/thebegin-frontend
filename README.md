# TheBegin

Este proyecto utiliza **TypeScript**, **React** y **TailwindCSS**.

---

## 📁 Estructura del proyecto

```bash
.
├── src
│   ├── assets        # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components    # Componentes reutilizables de la UI
│   ├── pages         # Vistas de las páginas principales
│   ├── hooks         # Custom Hooks para lógica reutilizable
│   ├── context       # Contextos de React para manejo de estado global
│   └── utils         # Utilidades y funciones auxiliares
├── public            # Archivos públicos
├── package.json      # Dependencias y scripts del proyecto
└── tsconfig.json     # Configuración de TypeScript
Y más...
```

---

## 🛠 Tecnologías utilizadas

- **TypeScript**: Tipado estático para un código más seguro y mantenible.
- **React**: Biblioteca para crear interfaces de usuario con componentes reutilizables.
- **TailwindCSS**: Framework CSS basado en utilidades para un diseño moderno y rápido.

---

## 🚀 Instalación para el desarrollo

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/deigodd/thebegin-frontend.git
   cd thebegin-frontend
   ```

2. Verifica las ramas existentes:

   Este proyecto trabaja con Git Flow, no inicializar de nuevo.

   ```bash
   git branch -a
   ```

3. Instalar dependencias:

   ```bash
   npm install
   ```

4. Ejecutar el entorno de desarrollo:

   ```bash
   npm run dev
   ```

---

## 📏 Convenciones y mejores prácticas

1. **Nombres en inglés**: Todas las variables, funciones y componentes deben estar en inglés.
2. **camelCase** para variables y funciones:
   ```javascript
   const userName = "John Doe";
   function fetchUserData() { ... }
   ```
3. **PascalCase** para componentes de React:
   ```javascript
   const UserCard = () => { ... };
   export default UserCard;
   ```
4. **Archivos organizados por componentes**:  
   Cada componente puede tener su propia carpeta:

   ```bash
   src/components/UserCard/
   ├── UserCard.tsx
   └── index.ts
   ```

5. **Uso de TypeScript**: Definir tipos e interfaces para mantener el código seguro.
   ```typescript
   interface User {
     id: number;
     name: string;
     email: string;
   }
   ```
6. **TailwindCSS**: Priorizar clases utilitarias sobre CSS personalizado.

---

## 📜 Scripts disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Genera una versión optimizada para producción.

---

## 🔧 Variables de entorno

Configura las variables de entorno en un archivo `.env`.  
Ejemplo:

```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key
```

---

## 🌲 Flujo de trabajo con Git

1. Crear una rama para cada nueva funcionalidad:

   Sin las extensiones de Git Flow

   ```bash
   ggit checkout develop
   git checkout -b feature_namefeature
   ```

   Con la extensión de Git Flow

   ```bash
   git flow feature start feature_namefeature
   ```

   Una vez finalizado el desarrollo de la feature se debe finalizar:

   ```bash
   git checkout develop
   git merge feature_branch
   ```

   Ó

   ```bash
   git flow feature finish feature_branch
   ```

   Esto creará un PR.

   LEER DOCUMENTACIÓN.

---
