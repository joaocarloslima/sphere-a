"use client"

import { login } from "@/app/actions/user-actions"
import { useFormState } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

const initialState = {
    message: '',
}

export default function LoginForm() {
    const [state, formAction] = useFormState(login, initialState)

    return (
        <form action={formAction} className="flex flex-col  gap-4 m-8">

            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required />
            <Label htmlFor="password">Senha</Label>
            <Input type="password" name="password" id="password" required />
            <Button type="submit">Entrar</Button>

            { state.message && 
                <Alert className="bg-red-700">
                    <AlertTriangle className="w-6 h-6" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            }
            
        </form>
    )
}