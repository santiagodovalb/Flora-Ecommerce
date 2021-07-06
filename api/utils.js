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

    let productos=''
    
    productos = carrito.map(carro => {
                return productos + `<h3></h3>`   
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
            <h2>Total: ${order.total}</h2>
            <h2>Carrito: </h2>
            </div>
            <hr/>
        </div>`, // html body
  });
    
    
    
}



module.exports = sendOrderEmail

// async function sendEmail() {

//   // Creo un email falso para testear
//   let fakeEmail = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: fakeEmail.user, // generated ethereal user
//       pass: fakeEmail.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Test 2" <foo@example.com>', // sender address
//     to: "paderjuegos@hotmail.com", // list of receivers
//     subject: "Test2", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//     console.log(info.messageId)
  
// }

// sendEmail().catch(console.error);

// module.exports = sendEmail

//adzevktyfdskmbml