import { Request, Response} from 'express'
import db from '../database/connection'

export default class ConnectionsController{
    async index(request: Request, response: Response ){        
        const totalConnections = await db('connection').count('* as total')
        const { total }  = totalConnections[0]
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        return response.json({ total })
    }
    async create(req: Request, res: Response ){
        const { user_id} = req.body

        await db('connection').insert({
            user_id,
        })

        return res.status(201).send()
    }
}