=========================================================
          AdoptMe - App de Gestión de Adopciones
=========================================================

> Entrega Final - Coderhouse Backend
> Autor: Jonatan Uribio

---------------------------------------------------------
DESCRIPCIÓN DEL PROYECTO
---------------------------------------------------------

AdoptMe es una aplicación web compuesta por un backend en Node.js/Express y un frontend en React. Permite gestionar usuarios, roles, mascotas, adopciones y panel de administración. El objetivo fue cumplir con todos los requerimientos funcionales de la pre-entrega final, simulando una app real de adopción de mascotas.

---------------------------------------------------------
ESTRUCTURA DEL REPOSITORIO
---------------------------------------------------------

Este proyecto está organizado en dos carpetas principales:

  adoptme-backend/      --> Backend: API REST con Node.js + Express + MongoDB
  adoptme-front/        --> Frontend: Interfaz de usuario en React

¡IMPORTANTE!  
Cada parte debe levantarse por separado (distintas terminales).

---------------------------------------------------------
¿CÓMO LEVANTAR EL PROYECTO?
---------------------------------------------------------

1) Clonar ambos proyectos:
---------------------------------
git clone https://github.com/tuusuario/adoptme-backend.git
git clone https://github.com/tuusuario/adoptme-front.git

---------------------------------
2) LEVANTAR EL BACKEND
---------------------------------
- Ir a la carpeta adoptme-backend
- Instalar dependencias:
      npm install
- Crear archivo .env en la raíz con:

      MONGO_URI=mongodb://localhost:27017/adoptme
      PORT=4000
      JWT_SECRET=supersecreto123

- Asegurarse de tener MongoDB corriendo localmente.
- Iniciar el servidor:
      node src/app.js

(Deberías ver: "Servidor corriendo en puerto 4000" y "MongoDB conectado")

---------------------------------
3) LEVANTAR EL FRONTEND
---------------------------------
- Ir a la carpeta adoptme-front
- Instalar dependencias:
      npm install
- Iniciar React:
      npm start

(Se abrirá automáticamente en http://localhost:3000)

*El front ya viene configurado para consumir el backend en puerto 4000.*

---------------------------------------------------------
PLAN DE PRUEBAS FUNCIONALES
---------------------------------------------------------

A continuación se detalla un plan de pruebas para corroborar la funcionalidad del programa:

=========================================================
| # | Funcionalidad                  | Pasos                | Resultado esperado
=========================================================
| 1 | Registro de usuario            | Completar y enviar   | Usuario tipo "user" creado, mensaje de éxito
| 2 | Login usuario                  | Login con datos      | "Login exitoso" y acceso a la app
| 3 | Login y panel admin            | Crear usuario,       | Acceso al panel de admin (editar role en Compass)
|                                 editar role a "admin"|
| 4 | Crear mascota (admin)          | Usar panel admin     | Mascota aparece en "disponibles"
| 5 | Listar mascotas disponibles    | Usuario común ve     | Mascotas correctas listadas
| 6 | Adoptar mascota                | User adopta mascota  | Mascota pasa a "adoptadas", sale de "disponibles"
| 7 | Ver mascotas adoptadas         | Ver sección          | Mascotas adoptadas se muestran
| 8 | Seguridad: solo admin crea     | Intentar crear como  | Front no muestra panel, backend rechaza petición
|                                   user normal           |
| 9 | Logout                         | Cerrar sesión        | Vuelve a login, no acceso sin login
|10 | Login inválido                 | Datos incorrectos    | Error y acceso denegado
=========================================================

***¿Cómo validar?***
- Usa el frontend para cada paso, y verifica en MongoDB Compass (`users` y `pets`).
- Captura pantallas para cada caso si se requiere.
- Puedes entregar este plan al profesor para ayudar a la corrección.

---------------------------------------------------------
NOTAS Y CONSIDERACIONES
---------------------------------------------------------
- El backend SOLO permite crear mascotas a usuarios con role "admin".
- El frontend es dinámico: el panel de admin solo aparece si el usuario tiene role "admin".
- MongoDB debe estar activo localmente o deberás ajustar la URI en el .env.
- Cumple con todos los requerimientos funcionales y de seguridad (roles, adopción, panel admin, etc).
- El flujo fue validado con un plan de pruebas detallado.

=========================================================
