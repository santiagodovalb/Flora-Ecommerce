const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: 'richard.alves1994@gmail.com',
        pass: 'adzevktyfdskmbml', 
    },
  });

async function sendOrderEmail(order, user, carrito) {
    let productos = ''
    
    carrito.forEach(carro => {
        return productos += `
                            <h3>${carro.Product.nombre} </h3>
                            <img style={width=10%} src=${carro.Product.imagen}></img>
                            <h4>Unidades: ${carro.cantidad}</h4>
                            <h4>Precio unidad: ${carro.precioBase}</h4>
                            <hr/>`
    })
      
  // send mail with defined transport object
  let info = await transporter.sendMail({
      from: '"Flora" <richard.alves1994@gmail.com>', // sender address
    to: "richard.alves1994@gmail.com", 
    subject: "Orden Confirmada", // Subject line
    text: "Resumen de la orden", // plain textbody
    html: `<div className='checkoutDiv'>
            <h1>Checkout</h1>
            <h2>Direccion: ${user.direction}</h2>
            <h2>Email: ${user.email}</h2>
            <h2>Telefono: ${user.phone}</h2>
            <hr/>
            <div>
            <h2>Order</h2>
            <h2>Estado: ${order.estado}</h2>
            <h2>Carrito: </h2>
            <div>${productos}</div>
            </div>
            <h2>Total: ${order.total}</h2>
            <hr/>
        </div>`, // html body
  });
    
    
    
}



module.exports = sendOrderEmail