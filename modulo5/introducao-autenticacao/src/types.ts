export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string,
   role: UserRole
}

export interface AuthenticationData {
    id: string,
    role: UserRole
}