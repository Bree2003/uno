# Usa Node como base image
FROM node:14-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json ./

# Instala las dependencias con npm
RUN npm ci

# Copia el resto de los archivos
COPY . .

# Ejemplo: construye la aplicación React (si es necesario)
RUN npm run build

# Ejemplo: comando para iniciar la aplicación
CMD ["npm", "start"]
