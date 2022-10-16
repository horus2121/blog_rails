export interface User {
    logged_in?: Boolean,
    id?: Number,
    username: String,
    email?: String,
    password?: String
}

export interface Blog {
    title: String,
    description: Text,
    content: Text,
}