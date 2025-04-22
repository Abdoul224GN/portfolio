"use client"
import {GithubIcon, LinkDin, TwitterIcon} from "../../public/Image"
import Nav from "@/components/Nav";

export default function Header() {
    return <>
        <header className="h-8  flex justify-between items-center w-full">
            <p className=" flex-1/3 text-2xl">Abdoul<span className="text-accent">.</span></p>
            <Nav/>
            <div
                className="h-full w-[125px] flex items-center justify-end pl-0.5 pr-0.5 pt-0 flex-1/3  ">
                <div
                    className="rounded-full border-border border-2 bg-muted h-full w-[125px] flex justify-between items-center pl-0.5 pr-0.5 pt-0 ">
                    <GithubIcon size={9}/>
                    <LinkDin size={9}/>
                    <TwitterIcon size={30}/>
                </div>
            </div>
        </header>
    </>
}