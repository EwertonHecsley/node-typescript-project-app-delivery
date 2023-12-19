import prisma from "../../../../dataBase/PrismaCliente";
import bcrypt from 'bcrypt';

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

        if (clientExist) throw new Error('Cliente alredy exists');

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