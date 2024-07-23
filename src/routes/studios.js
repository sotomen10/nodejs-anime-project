import { Router } from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const routerStudios = Router();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const studiosFilePath = path.join(_dirname, "../../data/studios.json");

// Leer los studios desde el archivo
const readstudios = async () => {
    try {
        const studiosData = await fs.readFile(studiosFilePath, "utf8");
        return JSON.parse(studiosData);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Escribir studios en el archivo
const writestudios = async (studios) => {
    try {
        await fs.writeFile(studiosFilePath, JSON.stringify(studios, null, 2));
    } catch (error) {
        throw new Error(error.message);
    }
};

// Crear un nuevo studio

routerStudios.post("/", async (req, res) => {
    const studios = await readstudios();
    const newstudio = {
        id: studios.length + 1,
        name: req.body.name
    };
    studios.push(newstudio);
    await writestudios(studios);
    res.status(201).json({ message: "studio agregado exitosamente", studio: newstudio });
});

// Obtener todos los studios

routerStudios.get("/", async (req, res) => {
    const studios = await readstudios();
    res.json(studios);
});

// Obtener un studio por ID

routerStudios.get("/:id", async (req, res) => {
    const studios = await readstudios();
    const studio = studios.find((studio) => studio.id === parseInt(req.params.id));
    if (!studio) {
        return res.status(404).json({ message: "studio no encontrado" });
    };
    res.json(studio);
});

// Actualizar un studio por ID

routerStudios.put("/:id", async (req, res) => {
    const studios = await readstudios();
    const studioIndex = studios.findIndex((studio) => studio.id === parseInt(req.params.id));
    if (studioIndex === -1) {
        return res.status(404).json({ message: "studio no encontrado" });
    }
    const updatestudio = {
        ...studios[studioIndex],
        name: req.body.name
    };
    studios[studioIndex] = updatestudio;
    await writestudios(studios);
    res.json({ message: 'studio updated successfully', studio: updatestudio });

});

// Eliminar un studio por ID
routerStudios.delete("/:id", async (req, res) => {
    const studios = await readstudios();
    const newstudios = studios.filter((studio) => studio.id !== parseInt(req.params.id));
    if (newstudios.length === studios.length) {
        return res.status(404).json({ message: "studio no encontrado." });
    }
    await writestudios(newstudios);
    res.json({ message: "studio eliminado exitosamente." });
});

export default routerStudios;