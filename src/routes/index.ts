import {Router} from 'express'
import { scribble } from './scribbleRouter'

export const routes = Router()

routes.use('/api/scribble', scribble)