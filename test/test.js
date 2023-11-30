import mongoose from 'mongoose'
import { MONGODB_CNX_STR } from '../src/config.js'
import { productsManager } from '../dao/ProductsManager.mongoose.js'
import { cartsManagerMongodb } from '../dao/CartsManager.mongoose.js'



await mongoose.connect(MONGODB_CNX_STR)


await productsManager.create({
  title:'Estacion de soldado Gadnic',
  description:'Estacion de soldado smd',
  code:'ACB1',
  price:'75000',
  status:true,
  category:'electronica',
  thumbnail:'sin imagen',
  stock:'10'
})

console.log(await productsManager.findAll())

console.log(await productsManager.findById("27ba5e92-77cb-401f-ab47-b1ce576d9058"))



await cartsManagerMongodb.registrar({
  /*direccion: 'aca 1234',
  cantAmbientes: 4,*/
})

console.log(await propiedadesManager.consultar())