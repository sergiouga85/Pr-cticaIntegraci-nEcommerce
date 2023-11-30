import mongoose from 'mongoose'
import { MONGODB_CNX_STR } from '../src/config.js'
import { productsManager } from '../dao/ProductsManager.mongoose.js'
import { cartsManager } from '../dao/CartsManager.mongoose.js'
import { messagesManager } from '../dao/MessagesManager.mongoose.js'



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



await cartsManager.create({
   products: [
    {
       id: "add06325-173d-4a7d-8ec6-594b17db8482",
      quantity: 14
    }
  ]
})

console.log(await cartsManager.findAll())

await cartsManager.create({ 
  
    user: "sergiouga85@gmail.com",
    message: "Hola, buenas tardes mi nombre es sergio queria consultar sobre un producto"
  
})

console.log(await messagesManager.findAll())