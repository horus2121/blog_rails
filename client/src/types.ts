export interface User {
    logged_in?: boolean,
    id?: number,
    username: string,
    email?: string,
    password?: string,
    password_confirmation?: string
}

export interface Blog {
    id?: number | null,
    title: string,
    description: string,
    content: string,
}