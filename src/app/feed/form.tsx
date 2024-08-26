"use client"

import { createPost } from "@/app/actions/post-actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function PostForm(){

    async function handleSubmit(formData: FormData){
        await createPost(formData)
    }

    return (
        <form action={handleSubmit} className="flex items-end gap-2">
            <div className="flex-grow">
                <Textarea name="content" placeholder="What's on your mind?" />

            </div>
            <Button type="submit" >enviar</Button>
        </form>
    )
}