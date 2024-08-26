interface User {
    id: number,
    name: string,
    bio: string,
    email: string,
    password: string,
    avatar: string,
}

interface Post{
    id: number,
    content: string,
    user: User,
    createdAt: string,
}