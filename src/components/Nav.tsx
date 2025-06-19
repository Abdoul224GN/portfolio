"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";
import {link} from "@/components/navLink";


export default function () {
    const pathname = usePathname();
    return <>
        <nav className="flex flex-row gap-5 container h-full shadow shadow-black/30 bg-muted w-auto rounded-full pl-15 pr-15 flex justify-between items-center max-md:hidden">
            {link.map((link, index) => {
                return (
                    <Link className={`${pathname === link.path && "text-accent underline decoration-dashed transition-all" } w-auto whitespace-nowrap  hover:text-accent
                    `} href={link.path} key={index} >{link.name}</Link>
                )
            })}
        </nav>
    </>
}