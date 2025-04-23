"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";


export default function () {
    const link = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Resume",
            path: "/resume",
        },
        {
            name: "Work",
            path: "/work"
        },
        {
            name: "Contact",
            path: "/contact",
        }
    ]
    const pathname = usePathname();
    return <>
        <nav className="container h-full border-border border-2 bg-muted w-1/2 rounded-full pl-15 pr-15 flex justify-between items-center">
            {link.map((link, index) => {
                return (
                    <Link className={`${pathname === link.path && "text-accent border-b-1 border-e-accent transition-all" } hover:text-accent 
                    `} href={link.path} key={index} >{link.name}</Link>
                )
            })}
        </nav>
    </>
}