import {JSX} from "react";
import Image from "next/image";

export function GithubIcon({className}:{className?:string}):JSX.Element {
    return <>
        <img src="images/github.png" className={`h-full ${className}` } alt="github" />
    </>
}

export function LinkDin({className}:{className?:string}) {
    return (
        <img src="images/linkedin.png" className={`h-full ${className}`} alt="linkedin" />
    )
}

export function TwitterIcon({className}:{className?:string}) {
    return (
        <img src="images/twitter.png" className={`h-full ${className}`} alt="twitter" />
    )
}

export function FacebookIcon({className}:{className?:string}) {
    return (
        <img src="images/Facebook.png" className={`h-full ${className}` } alt="facebook" />
    )
}

export function InstagramIcon({className}:{className?:string}) {
    return (
        <img src="images/instagram.png" className={`h-full ${className}`} alt="instagram" />
    )
}
export function AvatarImg({className}:{className?:string}) {
    return (
        <img src="images/Avatar.png" className={`h-full ${className}`} alt="avatar" />
    )
}
export function MenuImg({className}:{className?:string}) {
    return (
        <img src="images/menu.png" className={`h-full ${className}`} alt="menu" />
    )
}
export function Photo({src, className, }:{className?:string, src:string}) {
    return (
        <Image src={src} width={300} height={300} priority={true} className={` h-auto w-auto ${className}`} alt="menu" />
    )
}