"use client"

import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export default function LoginForm() {

    return (
        <form action="" className="flex flex-col  gap-4 m-8">

            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required />
            <Label htmlFor="password">Senha</Label>
            <Input type="password" name="password" id="password" required />
            <Button type="submit">Entrar</Button>
            
        </form>
    )
}