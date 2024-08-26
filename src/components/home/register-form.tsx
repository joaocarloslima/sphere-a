"use client"

import { createUser } from "@/app/actions/user-actions"
import { useFormState } from "react-dom"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const initialState = {
    success: false,
    name: '',
    bio: '',
    email: '',
    password: '',
}

export default function RegisterForm() {

    const [ state, handleSubmit ] = useFormState(createUser, initialState)

    return (
        <form action={handleSubmit} className="flex flex-col  gap-4 m-8">
            <Label htmlFor="name">Nome</Label>
            <Input type="text" name="name" id="name" required />
            <Label htmlFor="bio">Bio</Label>
            <Input type="text" name="bio" id="bio" required />
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required />
            <Label htmlFor="password">Senha</Label>
            <Input type="password" name="password" id="password" required />
            <Button type="submit">Criar Conta</Button>
            { state.success && 
                <Alert className="bg-green-700">
                    <CheckIcon className="w-6 h-6" />
                    <AlertTitle>Conta Criada</AlertTitle>
                    <AlertDescription>Você já pode realizar o login</AlertDescription>
                </Alert>
            }
        </form>
    )
}