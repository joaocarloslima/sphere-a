"use client"

import { updateUser, uploadAvatar } from "@/app/actions/user-actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckIcon } from "lucide-react"
import { useState } from "react"
import { useFormState } from "react-dom"

interface FormData {    
    data: {
        name: string
        bio: string
        email: string
    }
}

export default function Form({ data } : FormData) {
    const [profile, setProfile] = useState(data)

    const initialState = {
        success: false,
        ...profile
    }

    const [state, handleSubmit] = useFormState(updateUser, initialState)

    function handleChange(event: any) {
        const { id, value } = event.target
        setProfile({
            ...profile,
            [id]: value
        })
    }

   

    return (
        <form action={handleSubmit} className="space-y-4 ">
            <Label htmlFor="name">Nome</Label>
            <Input type="name" name="name" id="name" required />
            <Label htmlFor="bio">Bio</Label>
            <Input type="bio" name="bio" id="bio" required />
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required />
            <Button>Salvar</Button>
          
            <Button>Salvar</Button>
            { state.success && 
                    <Alert className="bg-green-700">
                        <CheckIcon className="w-6 h-6" />
                        <AlertTitle>Sucesso</AlertTitle>
                        <AlertDescription>Dados alterados com sucesso</AlertDescription>
                    </Alert>
                }
        </form>
    )
}