import { Router, json, urlencoded} from 'express'
import { messagesManager} from '../dao/MessagesManager.mongoose.js'


export const apiMessagesRouter = Router()

apiMessagesRouter.use(json())
apiMessagesRouter.use(urlencoded({extended: true}))

apiMessagesRouter.post('/', async (req, res) => {
    try {
      const message = await messagesManager.create(req.body)
      res.status(201).json(message)
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      })
    }
})