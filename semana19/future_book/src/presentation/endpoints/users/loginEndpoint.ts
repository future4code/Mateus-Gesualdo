import { Request, Response } from 'express';
import UserDB from '../../../data/UserDatabase';
import LoginUC from '../../../business/usecases/users/LoginUC';

export default async function loginEndpoint(req: Request, res: Response) {
    const useCase = new LoginUC(new UserDB())
    try {
        const result = await useCase.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send(result)

    } catch (err) {
        res.send(err.message)
    }
}