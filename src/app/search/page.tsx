"use client"

import { searchUsers } from "@/app/actions/user-actions";
import { Navbar } from "@/components/nav/navbar";
import { Tabs } from "@/components/nav/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardUser } from "@/components/user/card-user";
import { useRef, useState } from "react";

export default function Home() {

  const [ users, setUsers ] = useState([])
  const searchRef = useRef<HTMLInputElement>(null)

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault()
    if (!searchRef.current) return
    const search = searchRef.current.value
    const data = await searchUsers(search)
    setUsers(data)
  }

  return (
    <main className="flex min-h-screen justify-center relative">
      <Navbar />

      <Tabs active="search" />
      
      <section className="flex flex-col gap-6 min-h-screen min-w-[600px] m-x-8 p-8 bg-gray-100 dark:bg-gray-900">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input id="search" placeholder="buscar usuários..." ref={searchRef}  />   
          <Button>Buscar</Button>
        </form>

        {users.length === 0 && <p>Nenhum usuário encontrado</p>}

        {users.map((user: any) => (
          <CardUser key={user.id} user={user} />
        ))}

      </section>
     
    </main>
  );
}
