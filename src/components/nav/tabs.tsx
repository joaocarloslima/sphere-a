
import { HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";

interface TabsProps {
    active: "feed" | "search" | "profile";
}

export function Tabs({active}: TabsProps) {
    return (
        <nav className="flex flex-col gap-4 items-center space-x-2 bg-gray-100 dark:bg-gray-900 p-4 mx-2">
            <div className="size-8 bg-red-600 rounded-full">

            </div>
            <Link href="/feed" className={active == "feed" ? "text-red-600" : "" }>
                <HomeIcon className="size-6"/>
            </Link>
            <Link href="/search" className={active == "search" ? "text-red-600" : "" }>
                <SearchIcon className="size-6"/>
            </Link>
            <Link href="/profile" className={active == "profile" ? "text-red-600" : "" }>
                <UserIcon className="size-6"/>
            </Link>
        </nav>
    )
}