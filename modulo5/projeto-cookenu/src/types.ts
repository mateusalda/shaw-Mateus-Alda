export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    following: string[],
    followers: string[],
    role: UserRole
}

export type Recipe = {
    id: string,
    title: string,
    description: string,
    created_at: string,
    user_id: string
}

export interface AuthenticationData {
    id: string,
    role: UserRole
}