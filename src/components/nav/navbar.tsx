"use client"

import { Button } from "../ui/button"
import { ModeToggle } from "../ui/mode-toggle"
import { logout } from "@/app/actions/user-actions"
import { LogOut } from "lucide-react"

export function Navbar(){
    return (
        <nav className="absolute top-1 right-1 space-x-2">
            <ModeToggle />
            <Button variant="outline" size="icon" onClick={() => logout()}>
            <LogOut className="h-4 w-4" />
            </Button>
        </nav>
    )
}