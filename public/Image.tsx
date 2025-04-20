import {ComponentPropsWithoutRef} from "react";

export function GithubIcon(props: ComponentPropsWithoutRef<"svg"> & { size?: number }) {
    return (
        <img src="images/github.png" className="h-full" alt="github" />
    )
}

export function LinkDin(props: ComponentPropsWithoutRef<"svg"> & { size?: number }) {
    return (
        <img src="images/linkedin.png" className="h-full" alt="linkedin" />
    )
}

export function TwitterIcon(props: ComponentPropsWithoutRef<"svg"> & { size?: number }) {
    return (
        <img src="images/twitter.png" className="h-full" alt="twitter" />
    )
}