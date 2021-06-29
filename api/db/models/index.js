const Carrito = require('./carritos')
const DeliveryMode = require ('./deliveryMode')
const Category = require ('./categories')
const Order = require('./order')
const PaymentMethod = require('./paymentMethods')
const Products = require('./products')
const Reviews = require('./reviews')
const Rol = require ('./rols')
const User = require("./users");


// Relacion de productos
Products.hasMany(Category,{as:'category'})
Category.hasMany(Products,{as:'product'})

Products.hasMany(Reviews,{as:'review'})
Reviews.belongsTo(Products,{as:'product'})

// Products.belongsToMany(Carrito,{as:'carrito'}) 
Carrito.hasMany(Products,{as:'product'}) //*
Products.hasMany(Carrito,{as:'carrito'}) //*

//Relaciones de usuarios

User.belongsTo(Rol,{as:'rol'})

User.hasOne(PaymentMethod,{as:'paymentMethod'}) //*

User.hasMany(Reviews,{as:'review'})
Reviews.belongsTo(User,{as:'user'})

Carrito.belongsTo(User,{as:'user'}) 
User.hasOne(Carrito,{as:'carrito'}) //?

//Relacion Order
Order.hasOne(Carrito,{as:'carrito'})



module.exports={ Carrito, DeliveryMode, Category, Order, PaymentMethod, Products, Reviews, Rol, User}
