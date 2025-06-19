"use client"

import {usePathname} from "next/navigation";
import {Link} from "react-scroll";
import {link} from "@/components/navLink";


export default function () {
    const pathname = usePathname();
    return <>
        <nav className="flex flex-row gap-5 container h-full shadow shadow-black/30 bg-muted w-auto rounded-full pl-15 pr-15 flex justify-between items-center max-md:hidden">
            {link.map((link, index) => {
                return (
                    <Link duration={500} offset={-30} smooth={true} spy={true} activeClass={`text-accent`}
                        className={`active:text-accent w-auto whitespace-nowrap  hover:text-accent
                    `} href={link.path} key={index} to={link.path} >{link.name}</Link>
                )
            })}
        </nav>
    </>
}