// Definición de middleware errorHandler para manejar errores
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Imprime el stack trace del error en la consola
    res.status(500).json({ // Envía una respuesta JSON con estado 500 (Internal Server Error)
        "error": err.message, // Incluye el mensaje de error en la respuesta JSON
        "message": "Ocurrió un error en el servidor" // Mensaje adicional para el usuario
    });
};

export default errorHandler; // Exporta el middleware errorHandler para que pueda ser utilizado en otros archivos
