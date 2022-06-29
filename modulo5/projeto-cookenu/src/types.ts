export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
}

export type recipe = {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userId: string
}

export interface AuthenticationData {
    id: string
}