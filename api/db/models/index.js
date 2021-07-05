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
Products.belongsToMany(Category,{through:'product_category'})
Category.hasMany(Products,{as:'product'})

Products.hasMany(Reviews)

//Relaciones de usuarios

User.belongsTo(Rol,{as:'rol'})

// User.belongsTo(PaymentMethod,{as:'paymentMethod'}) 

User.hasMany(Reviews,{as:'review'})
Reviews.belongsTo(User,{as:'user'})

Carrito.belongsTo(User,{as:'user'}) 
Carrito.belongsTo(Products);

//Relacion Order
// Order.belongsTo(DeliveryMode, { as: 'deliveryMode' })

// Order.belongsTo(Carrito);
Order.belongsTo(User);
Order.belongsTo(PaymentMethod);






module.exports = { Carrito, DeliveryMode, Category, Order, PaymentMethod, Products, Reviews, Rol, User}
