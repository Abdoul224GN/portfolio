import {JSX} from "react";

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
        <img src="images/Instagram.png" className={`h-full ${className}`} alt="instagram" />
    )
}
export function AvatarImg({className}:{className?:string}) {
    return (
        <img src="images/Avatar.png" className={`h-full ${className}`} alt="avatar" />
    )
}