import { Request, Response } from "express";
import { AuthenticateClient } from "./Auth.client";

export class AuthClientController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        const authenticateClientUseCase = new AuthenticateClient();
        const result = await authenticateClientUseCase.execut({ username, password });
        return res.status(200).json(result)
    };
};