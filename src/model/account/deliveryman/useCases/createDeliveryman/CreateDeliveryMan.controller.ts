import { Request, Response } from "express";
import { CreateDeliveryMan } from "./CreateDeliverymanUseCase";

export class CreateDeliveryManController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const deliveryMan = await new CreateDeliveryMan().execute({ username, password });
            return res.status(201).json(deliveryMan);
        } catch (error) {
            if (error instanceof Error) return res.status(500).json({ message: error.message });
        };
    };
}