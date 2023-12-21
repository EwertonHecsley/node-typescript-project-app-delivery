import { Request, Response } from "express";
import { CreateDeliveriesUseCase } from "./CreateDeliveries.useCase";

export class CreateDeliveriesController {
    async handler(req: Request, res: Response) {
        const { client_id, item_name } = req.body;
        const createDeliveryUseCase = new CreateDeliveriesUseCase();

        const delivery = await createDeliveryUseCase.execute({ client_id, item_name });

        return res.status(201).json(delivery);
    }
};