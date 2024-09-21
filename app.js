const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cors = require('cors')
const db = require('./DB/db');
const { Product, Purchase } = require('./Schema/Schema');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/Purchase/all', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(202).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des produits', error: err.message });
    }
});

app.post('/Purchase', async (req, res) => {
    try {
        const purchase = new Purchase(req.body);
        await purchase.save();
        res.status(201).send('Achat ajouté avec succès');
    } catch (err) {
        res.status(500).json({ message: "Erreur d'ajout de l'achat", error: err.message });
    }
});


app.get('/Dashboard', async(req , res) => {
    try{
        const Dashboard = await Purchase.find();
        if(!Dashboard){
            return res.status(404).json({ message: 'Aucun achat trouvé' });
        }else{
            return res.status(202).json(Dashboard);
        }
}catch(err){
    res.status(500).json("Message :", err.message);
}

})

app.listen(3000, () => {
    console.log("Server is running on port ", 3000);
})