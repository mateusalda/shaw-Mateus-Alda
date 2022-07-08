import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            info,
            process.env.JWT_KEY as string,
            {}
        )
        return token;
    }

    getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as AuthenticationData

    }
}