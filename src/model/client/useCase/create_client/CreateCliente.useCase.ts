import prisma from "../../../../dataBase/PrismaCliente";
import bcrypt from 'bcrypt';
import { HttpException } from "../../../../middleware/HttpException";

interface CreateCliente {
    username: string
    password: string
}

export class CreateClienteUseCase {
    async execute({ username, password }: CreateCliente) {
        const clientExist = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if (clientExist) throw new HttpException(400, 'Cliente alredy exists');

        const hashPassword = await bcrypt.hash(password, 8);

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return client;
    };
}