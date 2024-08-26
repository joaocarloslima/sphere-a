"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function createPost(formData: FormData){
    const post = {
        content: formData.get('content'),
    }

    const response = await fetch('http://localhost:8082/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token')?.value}`
        },
        body: JSON.stringify(post),
    })

    if(response.status === 403){
        redirect('/')
    }

    return await response.json()
 
}

export async function getPosts(page: number = 1){
    const response = await fetch(`http://localhost:8082/posts?page=${page}`, {
        headers: {
            "Authorization": `Bearer ${cookies().get('token')?.value}`
        }
    })

    if(response.status === 403){
        redirect('/')
    }

    const json = await response.json()
    return json.content
}