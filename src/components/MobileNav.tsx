import {link} from "./navLink"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function MobileNav() {
    const pathname = usePathname();
    return <>
        <nav className={`h-full border-2 border-accent rounded-full px-6 flex gap-3 md:hidden`}>
            {link.map((link, index) => (
                <Link className={`${pathname === link.path && "text-accent transition-all text-[0.9rem]" } text-[0.9rem] hover:text-accent
                    `} href={link.path} key={index} >{link.name}</Link>
            ))}
        </nav>
    </>
}