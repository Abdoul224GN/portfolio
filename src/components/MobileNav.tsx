import {link} from "./navLink"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function MobileNav() {
    const pathname = usePathname();
    return <>
        <nav>
            {link.map((link, index) => (
                <Link className={`${pathname === link.path && "text-accent underline decoration-dashed transition-all" } hover:text-accent
                    `} href={link.path} key={index} >{link.name}</Link>
            ))}
        </nav>
    </>
}