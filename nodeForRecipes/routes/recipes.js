import express from 'express';
import fs from 'fs';
import path from 'path';
import authMiddleware from '../middleware/authMiddleware.js';
import { fileURLToPath } from 'url';
import { log } from 'console';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

// שליפת כל המתכונים
router.get('/', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.json(db.recipes);
});

// הוספת מתכון (רק למשתמש מחובר)
router.post('/', authMiddleware, (req, res) => {
    const {
        title,
        description,
        difficulty,
        products,
        ingredients,
        instructions
    } = req.body;
    const db = JSON.parse(fs.readFileSync(dbPath));

    const newRecipe = {
        id: Date.now(),
        title,
        products,
        description,
        difficulty: difficulty,
        authorId: req.header('user-id'),
        ingredients,
        instructions,
    };


    db.recipes.push(newRecipe);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    if (newRecipe) {
        console.log(newRecipe.difficulty);
        res.status(201).json({ message: "Recipe added", recipe: newRecipe });
    } else {
        res.status(403).json({ message: "Failed to add recipe" });
    }


});

router.put('/', authMiddleware, (req, res) => {
    const {
        id,
        title,
        description,
        difficulty,
        products,
        ingredients,
        instructions } = req.body;

    const db = JSON.parse(fs.readFileSync(dbPath));
    // const recipe = db.recipe.find(r => r.id === req.header('user-id'));
    const recipe = db.recipes.find(r =>{ 
        console.log(typeof(r.id));
        console.log(r);
        console.log(r.id);
        
       return r.id === +id});
    console.log(recipe);

    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }
console.log(recipe);

    recipe.title = title;
    recipe.description = description;
    recipe.difficulty = difficulty;
    recipe.products = products;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json(recipe);
});

export default router;
