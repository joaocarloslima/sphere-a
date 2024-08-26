"use client"

import { getPosts } from "@/app/actions/post-actions" 
import { Post } from "@/components/post/post"
import { Button } from "@/components/ui/button"
import { Suspense, useEffect, useState } from "react"

export function Feed({initialPosts}: {initialPosts: Post[]}){

    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        setPosts(initialPosts)
    },  [])

    async function loadMore(){
        const newPosts = await getPosts(page)
        setPage(page + 1)
        setPosts([...posts, ...newPosts])
    }

    return (
        <Suspense fallback={<p>carregando</p>}>
            {posts?.map((post: Post) => <Post key={post.id} post={post} /> )}
            <Button onClick={loadMore}>carregar mais</Button>
        </Suspense>
    )
}