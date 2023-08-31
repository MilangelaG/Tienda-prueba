# Prerequisitos

- Instalar la base de datos, hay un archivo `init.sql` dentro del backend para iniciarlo
- El archivo `consultas.js` permite la configuracion a la base de datos
- Instalar las dependencias en el front y back
```
  <!-- En ambos directorios -->
  npm install 
```

# Como correr el proyecto?

Esta separado en front y back

Para iniciar el back se usa el comando `node app.js`
Para iniciar el front se usa el comando `npm run dev`

# Correr los test

Actualmente solo hay test para el back y prueban el happypath
se corren con el comando `npm test`
OJO: Que al correrlos se ejecutar el `init.sql` reseteando la base de datos

# Produccion

Esta deployado en Render:
- Link front: https://front-end-vnxe.onrender.com
- Link back: https://back-end-nml2.onrender.com

La configuracion de la base de datos esta en el archivo `.env`
