const express = require("express")
const { ProductModel } = require("../models/ProductModel")
const productrouter = express.Router()
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const protect = require("../middleware/auth")
productrouter.get('/Category/:name', async (req, res) => {
    const name = req.params.name
    const allproducts = await ProductModel.find({ Category: name })

    if (allproducts.length) {
        res.send({ Product: allproducts })
    }
    else {
        res.send('No products available')

    }
});
productrouter.post('/add', protect, async (req, res) => {
    const name = req.body.name
    const price = req.body.price
    const image = req.body.image
    const description = req.body.description
    const productdata = { name, price: +price, image, description };
    const productInstance = new ProductModel(productdata)
    const savedProduct = await productInstance.save()

    res.send({ message: "product added", Product: savedProduct })
});

productrouter.put('/edit/:id', protect, async (req, res) => {
    const productID = req.params.id;
    const product = await ProductModel.findOne({ _id: productID })
    if (product) {
        product.name = req.body.name
        product.price = req.body.price
        product.image = req.body.image
        product.description = req.body.description
        const savedProduct = await product.save()
        res.send({ message: "product edited", Product: savedProduct })
    } else {
        res.send({ message: "product not found" })

    }
});
productrouter.delete('/:id', protect, async (req, res) => {
    const productID = req.params.id;
    try {
        const Product = await ProductModel.deleteOne({ _id: productID })
        res.send({ message: "found", Product: Product })

    } catch (error) {
        res.send({ message: error })
    }
});



productrouter.get('/:id', async (req, res) => {

    const productID = req.params.id;
    const product = await ProductModel.findOne({ _id: productID })

    res.send({ message: "product Found", product: product })
});

module.exports = productrouter