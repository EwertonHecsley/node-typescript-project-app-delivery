import { Request, Response } from "express";
import { AuthenticadeDeliveryMan } from "./Auth.deliveryMan";

export class AuthenticadeDeliveryManController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        const authenticateClientUseCase = new AuthenticadeDeliveryMan();
        const result = await authenticateClientUseCase.execut({ username, password });
        return res.status(200).json(result)
    };
}