import { Request, Response } from "express";
import { CreateClienteUseCase } from "./CreateCliente.useCase";

export class CreateClienteController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const cliente = await new CreateClienteUseCase().execute({ username, password });
            return res.status(201).json(cliente);
        } catch (error) {
            if (error instanceof Error) return res.status(500).json({ message: error.message });
        };
    };
};