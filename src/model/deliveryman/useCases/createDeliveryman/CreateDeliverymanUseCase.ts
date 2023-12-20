import prisma from "../../../../dataBase/PrismaCliente";
import bcrypt from 'bcrypt';
import { HttpException } from "../../../../middleware/HttpException";

interface IDeliveryMan {
    username: string
    password: string
}

export class CreateDeliveryMan {
    async execute({ username, password }: IDeliveryMan) {
        const deliveryManExists = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if (deliveryManExists) throw new HttpException(400, 'Cliente alredy exists');

        const hashPassword = await bcrypt.hash(password, 8);

        const client = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return client;
    };
};