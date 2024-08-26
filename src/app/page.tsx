import LoginForm from "@/components/home/login-form";
import RegisterForm from "@/components/home/register-form";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between ">
      <nav className="absolute right-1 top-1">
        <ModeToggle />
      </nav>

      <aside className="h-screen hidden lg:block ">
        <Image src="/login.png" alt="login" width={554} height={832}/>
      </aside>

      <div className="flex flex-col items-center gap-10 m-auto">
        <div className="size-[75px] bg-rose-600 rounded-full m-auto"></div>
        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>
        
        <Tabs defaultValue="entrar" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="entrar">entrar</TabsTrigger>
            <TabsTrigger value="registrar">registrar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="entrar">
            <LoginForm />
          </TabsContent>

          <TabsContent value="registrar">
            <RegisterForm />
          </TabsContent>
        </Tabs>

      </div>
      
    </main>
  );
}
