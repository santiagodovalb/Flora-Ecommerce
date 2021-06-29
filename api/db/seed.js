const { Products, Category } = require('./models')

const categorias = [{ type: 'semillas' }, { type: 'plantas' }, { type: 'herramientas' }, { type: 'arboles' }, { type: 'bonsai' }, { type: 'insumos para cultivos' },{ type: 'flores' },{type:'macetas'},{type:'decoracion'}]

const productos = [{ nombre: 'Semilla de naranjas (x50)', precio: 50, imagen: 'https://www.huertaforestal.com/wp-content/uploads/2020/05/Screenshot_20200515-123801_Chrome.jpg', stock: 50, CategoryId: 1 }, { nombre: 'Aloe vera', precio: 200, imagen: 'https://soycomocomo.es/media/2016/12/aloe-vera.jpg', stock: 20, CategoryId: 2 }, { nombre: 'Tenedor de jardin', precio: 400, imagen: 'https://assets.tramontina.com.br/upload/tramon/imagens/MUL/77915001PNM001G.png', stock: 10, CategoryId: 3 }, { nombre: 'Limonero 4 estaciones(1.60m)', precio: 3600, imagen: 'https://http2.mlstatic.com/D_NQ_NP_724212-MLA26879189568_022018-O.webp', stock: 5, CategoryId: 4 }, { nombre: 'Olmo chino', precio: 3100, imagen: 'https://http2.mlstatic.com/D_NQ_NP_617689-MLA31269259487_062019-O.webp', stock: 150, CategoryId: 5 }, { nombre: 'Humus de lombriz (25l)', precio: 800, imagen: 'https://http2.mlstatic.com/D_NQ_NP_929146-MLA25816911164_072017-O.webp', stock: 50, CategoryId: 6 }, { nombre: 'Tulipan negro', precio: 539, imagen: 'https://http2.mlstatic.com/D_NQ_NP_626869-MLA45174334610_032021-O.webp', stock: 200, CategoryId: 7 }, { nombre: 'Maceta plastico balconera', precio: 820, imagen: 'https://http2.mlstatic.com/D_NQ_NP_797973-MLA44709023165_012021-O.webp', stock: 70, CategoryId: 8 }, { nombre: 'Semillas de manzana roja x50', precio: 100, imagen: 'https://www.aboutespanol.com/thmb/5xpuag7Kb1gL5fJKNsRozRNfAG0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/la-manzana-es-buena-para-el-corazon-597b5c4d3df78cbb7a248d75.jpg', stock: 100, CategoryId: 1 }, { nombre: 'Enredadera (10cm)', precio: 350, imagen: 'https://http2.mlstatic.com/D_NQ_NP_744980-MLA43739098235_102020-O.webp', stock: 20, CategoryId: 2 }, { nombre: 'Kit combo', precio: 3600, imagen: 'https://http2.mlstatic.com/D_NQ_NP_654597-MLA32167714832_092019-O.webp', stock: 50, CategoryId: 3 }, { nombre: 'Pino (80cm)', precio: 405, imagen: 'https://http2.mlstatic.com/D_NQ_NP_644027-MLA45335463010_032021-O.webp', stock: 70, CategoryId: 4 }, { nombre: 'Arbol de la vida', precio: 2980, imagen: 'https://http2.mlstatic.com/D_NQ_NP_995725-MLA46271606906_062021-O.webp', stock: 100, CategoryId: 5 }, { nombre: 'Azufre agricola (10Kg)', precio: 3500, imagen: 'https://http2.mlstatic.com/D_NQ_NP_968279-MLA45514173236_042021-O.webp', stock: 60, CategoryId: 6 }, { nombre: 'Margarita naranja', precio: 500, imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_788860-MLA28919213410_122018-F.webp', stock: 100, CategoryId: 7 }, { nombre: 'Maceta Piramidal Fibro Cemento (120x47x31)', precio: 3270, imagen: 'https://http2.mlstatic.com/D_NQ_NP_759008-MLA31639595836_072019-V.webp', stock: 50, CategoryId: 8 },{ nombre: 'Cerco de caña', precio: 2200, imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_937112-MLA41478107076_042020-F.webp', stock: 15, CategoryId: 9 }, { nombre: 'Estaca solar led', precio: 1800, imagen: 'https://http2.mlstatic.com/D_NQ_NP_786317-MLA45094087374_032021-O.webp', stock: 10, CategoryId: 9 },{ nombre: 'Molde para tortuga', precio: 900, imagen: 'https://http2.mlstatic.com/D_NQ_NP_992798-MLA40335028032_012020-O.webp', stock: 10, CategoryId: 9 },{ nombre: 'Gnomo Enano De Jardín Para Exterior O Interior', precio: 1280, imagen: 'https://http2.mlstatic.com/D_NQ_NP_615461-MLA46534481166_062021-O.webp', stock: 15, CategoryId: 9 }
]



categorias.forEach(categoria => Category.create(categoria))

productos.forEach(producto=> Products.create(producto))
