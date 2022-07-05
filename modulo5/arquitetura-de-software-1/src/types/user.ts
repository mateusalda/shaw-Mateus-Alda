export enum UserRoles {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
 }
 
 export type authenticationData = {
    id: string,
    role: UserRoles
 }
 
 export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: UserRoles
 }
 
 export type userInput = {
    name: string,
    email: string,
    password: string,
    role: UserRoles
 }