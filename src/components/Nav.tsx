"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";
import {link} from "@/components/navLink";


export default function () {
    const pathname = usePathname();
    return <>
        <nav className="container h-full border-border border-2 bg-muted w-1/2 rounded-full pl-15 pr-15 flex justify-between items-center">
            {link.map((link, index) => {
                return (
                    <Link className={`${pathname === link.path && "text-accent underline decoration-dashed transition-all" } hover:text-accent
                    `} href={link.path} key={index} >{link.name}</Link>
                )
            })}
        </nav>
    </>
}