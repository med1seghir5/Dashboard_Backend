const mongoose = require('mongoose');

// Schéma pour les produits
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    }
});

// Schéma pour les achats
const PurchaseSchema = new mongoose.Schema({
    item: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Création des modèles
const Product = mongoose.model('Product', ProductSchema);
const Purchase = mongoose.model('Purchase', PurchaseSchema);

// Exportation des modèles ensemble
module.exports = { Product, Purchase };