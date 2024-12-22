# Proyecto 1: Portfolio personal
## Índice de Contenidos
1. [Descripción](#1-descripción)
2. [Estructura](#2-estructura)
   - [Header](#header)
   - [Hero](#hero)
   - [Sobre mí](#sobre-mí)
   - [Proyectos](#proyectos)
   - [Reviews](#reviews)
3. [Ordenar clases automáticamente](#3-ordenar-clases-automáticamente)
   - [Cómo instalar el plugin](#cómo-instalar-el-plugin)
## 1. Descripción
En este proyecto tenemos un portfolio personal que contendrá información sobre ti, tus habilidades, proyectos y datos de contacto.
Este proyecto será la carta de presentación para futuros empleadores o clientes.

## 2. Estructura
Procura que sea una estructura extremadamente sencilla y fácil de navegar. No te compliques con diseños extravagantes o animaciones innecesarias. Recuerda que la simplicidad es la clave, la persona que lea tu portfolio debe poder encontrar la información que busca de manera rápida y sencilla.

### Secciones
1. **Header**: Debe contener tu nombre y una barra de navegación con links a las diferentes secciones de tu página.
2. **Hero**: Una sección que contenga una imagen de fondo y tu nombre. Al lado una pequeña descripción de quien eres y tus links a redes.
3. **Sobre mí**: Hablemos un poco más sobre ti, tus habilidades y experiencia.
4. **Proyectos**: Aquí vas a mostrar tus proyectos más recientes. Puedes mostrarlos en forma de tarjetas.
5. **Reviews**: Sección donde puedes mostrar testimonios de clientes o empleadores. Pide a tu gente conocida que te dejen un review en LinkedIn y ¡muéstralo aquí!

## 3. Ordenar clases automáticamente
Usando tailwind, es muy fácil darle estilo a la página pero también es fácil perderse en la cantidad de clases añades. 
Para poder tener las clases ordenadas, vamos a seguir la estructura indicada en la [documentación](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted), usando un plugin de formato para tailwind que nos las ordenará automáticamente.

Éste plugin usa el siguiente orden:
1. **Clases personalizadas:**  
   Clases que no provienen de Tailwind, por ejemplo: `.custom-class`.

2. **Clases base:**  
   - Estructura básica, como: `grid`, `flex`.

3. **Clases de diseño y espacio:**  
   - **Display:** `block`, `inline-block`, `hidden`, etc.  
   - **Posicionamiento:** `absolute`, `relative`, `top-0`, etc.  
   - **Espaciado:** `m-4`, `p-6`, `space-x-4`, etc.  
   - **Tamaños:** `w-1/2`, `h-full`, `max-w-lg`, etc.  
   - **Tipografía:** `font-bold`, `text-lg`, `leading-6`, etc.

4. **Clases decorativas:**  
   - **Color:** `text-red-500`, `bg-blue-300`, etc.  
   - **Bordes y sombras:** `rounded-lg`, `shadow-md`, etc.

5. **Modificadores de estado:**  
   - Cambios según el estado, como: `hover:`, `focus:`, `active:`, etc.

6. **Modificadores responsivos:**  
   - Agrupados por tamaños de pantalla (de menor a mayor):  
     `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.

7. **Clases sobrescritas o adicionales:**  
   - Clases aplicadas para sobrescribir configuraciones previas.

### Cómo instalar el plugin
Usa el siguiente comando en la terminal:
```bash
npm install -D prettier prettier-plugin-tailwindcss
```
Ahora crea un archivo en la raíz de tu proyecto llamado `.prettierrc` y añade lo siguiente:
```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
A partir de ahora, cuando quieras que tus clases se ordenen, solo tienes que formatear el archivo. Botón derecho en el archivo > Format Document (o el comando que te sugiera tu sistema).