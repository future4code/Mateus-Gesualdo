import { Request, Response } from "express";
import { GetUserByEmailUC } from "../../business/usecase/getUserByEmail";

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const getUserByEmailUC = new GetUserByEmailUC();
    const result = await getUserByEmailUC.execute({
      email: req.query.email
    });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
