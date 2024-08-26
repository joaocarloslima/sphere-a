import { Navbar } from "@/components/nav/navbar";
import { Tabs } from "@/components/nav/tabs";
import { PostForm } from "./form";
import { getPosts } from "@/app/actions/post-actions";
import { Feed } from "./feed";

export default async function Home() {

  const posts = await getPosts()

  return (
    <main className="flex min-h-screen justify-center relative">
      <Navbar />

      <Tabs active="feed" />
      
      <section className="flex flex-col gap-4 min-h-screen min-w-[600px] m-x-8 p-8 bg-gray-100 dark:bg-gray-900">
        <h2>Feed</h2>   
        <PostForm />

        <Feed initialPosts={posts} />


      </section>


     
    </main>
  );
}
