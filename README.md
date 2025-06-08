=================================================================
# 🐾 AdoptMe - App de Gestión de Adopciones

**Entrega Final Coderhouse Backend**  
**Autor:** Jonatan Uribio

---

## 📋 Descripción del Proyecto

AdoptMe es una aplicación web fullstack desarrollada en Node.js/Express (backend) y React (frontend) para la gestión de adopción de mascotas.  
Permite registro y login de usuarios, asignación de roles (user/admin), carga y adopción de mascotas, y un panel exclusivo de administración para el alta de animales.  
El proyecto cumple todos los requerimientos funcionales y estructurales de la pre-entrega final.

---

## 📁 Estructura del Repositorio

adoptme/
  ├── adoptme-backend/    # Backend: Node.js, Express, MongoDB
  ├── adoptme-front/      # Frontend: React
  └── README.md           # Este archivo

Ambas carpetas son proyectos independientes.  
Se deben instalar y correr por separado (ver instrucciones abajo).

---

## 🚀 ¿Cómo levantar el proyecto?

1️⃣ Clonar el repositorio

git clone https://github.com/Marisol14/Backend-III_Proyecto_Marisol-Alcaraz.git
cd adoptme

---

2️⃣ Levantar el Backend

cd adoptme-backend
npm install

Crear archivo .env en la raíz con:

MONGO_URI=mongodb://localhost:27017/adoptme
PORT=4000
JWT_SECRET=supersecreto123

Asegurarse de tener MongoDB corriendo localmente.

Iniciar el backend:

node src/app.js

Debes ver:

Servidor corriendo en puerto 4000
MongoDB conectado

---

3️⃣ Levantar el Frontend

En una terminal aparte:

cd adoptme-front
npm install
npm start

Se abrirá automáticamente en http://localhost:3000

El front está configurado para comunicarse con el backend en el puerto 4000.

---

## 🧪 Plan de pruebas funcionales

A continuación se detallan los flujos principales a verificar. El profesor podrá seguirlos para comprobar la funcionalidad:

1. **Registro de usuario**  
   - Completar formulario de registro  
   - Usuario creado (role=user), mensaje de éxito

2. **Login**  
   - Ingresar usuario y contraseña válidos  
   - Login exitoso, acceso a la app

3. **Panel admin**  
   - Crear usuario, editar role a admin en Compass, login  
   - Panel de administración visible

4. **Crear mascota (admin)**  
   - Desde panel admin, crear mascota  
   - Mascota en la lista de disponibles

5. **Listar mascotas**  
   - Login como user, ver lista  
   - Mascotas disponibles listadas correctamente

6. **Adoptar mascota**  
   - Usuario adopta mascota  
   - Mascota movida a “adoptadas”, sale de disponibles

7. **Ver mascotas adoptadas**  
   - Usuario ve sección “Mis mascotas adoptadas”  
   - Mascotas adoptadas se muestran

8. **Seguridad (solo admin crea)**  
   - User normal intenta crear mascota  
   - Panel oculto, backend rechaza petición

9. **Logout**  
   - Click en “Cerrar sesión”  
   - Vuelve a login, sin acceso a rutas privadas

10. **Login inválido**  
    - Ingresar credenciales erróneas  
    - Mensaje de error, acceso denegado

Puedes usar MongoDB Compass para corroborar los datos en las colecciones `users` y `pets`.

---

## ⚡ Notas y consideraciones

- El backend solo permite crear mascotas a usuarios con role "admin".
- El panel de administración en el frontend solo se muestra para administradores.
- El proyecto cumple todos los requerimientos funcionales, estructurales y de seguridad.
- MongoDB debe estar corriendo localmente (o adapta la URI en .env si fuera necesario).
- Usa los comandos indicados para iniciar cada parte.

---

## 📷 Evidencias sugeridas para la entrega

- Capturas del registro, login, panel admin, creación de mascota, adopción y logout.
- Capturas de los documentos en MongoDB Compass (`users` y `pets`), si se desea.

---

## 📧 Consultas

Por cualquier consulta sobre la instalación, uso o validación, estoy disponible para ampliar la documentación o asistir en la corrección.

---

¡Gracias por tu tiempo aguardo corrección profe!
=================================================================
