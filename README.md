# nodejs-anime-project

- # Inicialización de nodes en package.json

    **Inicializa el package.json**
    ```sh
    npm init -y
    ```
  ### Dependencia de producción
    **Framework de aplicación web para Node.js**
    ```sh
    npm install express
    ```
  ### Dependencias de desarrollo
    **Es una dependencia de desarrollo para que se ejecute el programa automaticamente en consola**
    ```sh
    npm install nodemon -D
    ```
    **Para manejar variables de entorno**
    ```sh
    npm install dotenv
    ```
- ## Agregar en el package.json lo siguiente:

    **Agregar para trabajar con módulos**
    ```sh
    "type": "module"
    ``` 
    **Agregar en scripts para ejecutar con run dev en tiempo real**
    ```sh
    "dev": "nodemon"
    ``` 

    **El package.json se verá algo así:**
    ```json
    {
      "name": "nodejs-anime-project",
      "version": "1.0.0",
      "description": "1. **Inicialización de nodes en package.json**",
      "main": "index.js",
      "type": "module",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "nodemon": "^3.1.4"
      },
      "dependencies": {
        "dotenv": "^16.4.5",
        "express": "^4.19.2"
      }
      
    }

    ```	