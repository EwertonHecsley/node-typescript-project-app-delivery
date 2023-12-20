import 'dotenv/config';
import prisma from "../../../../dataBase/PrismaCliente";
import bcrypt from 'bcrypt';
import { HttpException } from "../../../../middleware/HttpException";
import jwt from 'jsonwebtoken';

interface IAuthenticateDeliveryMan {
    username: string
    password: string
}

export class AuthenticadeDeliveryMan {
    async execut({ username, password }: IAuthenticateDeliveryMan): Promise<string> {
        const deliveryman = await prisma.deliveryman.findFirst({ where: { username } });
        if (!deliveryman) throw new HttpException(401, 'Username or password invalid!');

        const passwordMatch = await bcrypt.compare(password, deliveryman.password);
        if (!passwordMatch) throw new HttpException(401, 'Username or password invalid!');

        const token = await jwt.sign({ id: deliveryman.id }, process.env.JWT_TOKEN as jwt.Secret);
        return token;
    };
};