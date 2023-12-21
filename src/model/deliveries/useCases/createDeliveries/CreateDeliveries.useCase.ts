import prisma from "../../../../dataBase/PrismaCliente"

interface ICreateDeliveries {
    item_name: string
    client_id: number
    deliveryman_id?: number


}

export class CreateDeliveriesUseCase {
    async execute({ item_name, client_id }: ICreateDeliveries) {
        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                client_id
            }
        });
        return delivery;
    }
}