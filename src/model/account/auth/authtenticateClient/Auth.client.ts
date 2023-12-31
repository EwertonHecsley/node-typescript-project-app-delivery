import 'dotenv/config';
import prisma from "../../../../dataBase/PrismaCliente";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HttpException } from '../../../../middleware/HttpException';

interface IAuthtenticateCliente {
    username: string
    password: string
}

export class AuthenticateClient {
    async execut({ username, password }: IAuthtenticateCliente): Promise<string> {
        const client = await prisma.clients.findFirst({ where: { username } });
        if (!client) throw new HttpException(401, 'Username or password invalid!');

        const passwordMatch = await bcrypt.compare(password, client.password);
        if (!passwordMatch) throw new HttpException(401, 'Username or password invalid!');

        const token = await jwt.sign({ id: client.id }, process.env.JWT_TOKEN as jwt.Secret);
        return token;
    }
};