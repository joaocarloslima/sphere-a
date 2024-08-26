import { getUserProfile, uploadAvatar } from "@/app/actions/user-actions";
import { Navbar } from "@/components/nav/navbar";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Form from "./form";
import { Tabs } from "@/components/nav/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default async function Home() {

  const data = await getUserProfile()

  async function handleUpload(formData: FormData) {
    "use server"
      const success = await uploadAvatar(formData)
      if (!success) {
        console.log('Erro ao enviar') //pode ser un toast depois
      }
      redirect('/profile')
      
  }

  return (
    <main className="flex min-h-screen justify-center relative">
      <Navbar />
      
      <Tabs active="profile" />
      <section className="flex flex-col gap-4 min-h-screen min-w-[600px] m-x-8 p-8 bg-gray-100 dark:bg-gray-900">
        <div className="flex w-full justify-between">
          <h2 className="text-xl font-bold">Perfil</h2>   
          <img className="size-10 rounded-full" src={data.avatar} alt="profile" />
        </div>

        <Form data={data} />

        <h3 className="text-xl font-bold mt-4">Alterar Avatar</h3>
        <form action={handleUpload} className="space-y-6">
          <Label htmlFor="file">Avatar</Label>
          <Input type="file" name="file" id="file" required />
          <Button type="submit">Enviar</Button>
        </form>

      </section>
     
    </main>
  );
}
