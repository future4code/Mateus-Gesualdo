import express, { Request, Response } from 'express'
import MainDB from '../data/MainDatabase'

const app = express()
app.use(express.json())

app.get('/', async (req:Request, res:Response)=>{
    res.send(
        (await new MainDB().connection.raw(
        `select * from future_tube_videos`
    ))[0][0]
    )
})

export default app