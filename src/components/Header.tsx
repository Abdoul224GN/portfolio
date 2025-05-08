"use client"
import {GithubIcon, LinkDin, MenuImg, TwitterIcon} from "../../public/Image"
import Nav from "@/components/Nav";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const linkStyle: string = "hover:opacity-75 transition-opacity";
    console.log(toggle)
    return <>
        <header className="h-8 flex flex-col justify-between items-center w-full mb-15">
            <div className={`flex items-center justify-between w-full h-full`}>
                <p className=" flex-1/3 text-2xl">Abdoul<span className="text-accent">.</span></p>
                <Button className={`md:hidden size-9 p-0 pb-[1px]`} onClick={() => setToggle((prev) => !prev)}>
                    <MenuImg/>
                </Button>
                <Nav/>
                <div className="h-full w-[125px] flex items-center justify-end px-0.5 flex-1/3 max-md:hidden ">
                    <div
                        className="rounded-full border-border border-2 bg-muted h-full w-[125px] flex justify-between items-center px-0.5 ">
                        <a href="#" className="h-full"><GithubIcon className={`${linkStyle}`}/></a>
                        <a href="#" className="h-full"><LinkDin className={linkStyle}/></a>
                        <a href="#" className="h-full"><TwitterIcon className={linkStyle}/></a>
                    </div>
                </div>
            </div>
            <div className={`pt-2 w-full flex items-center justify-center`}>
                {toggle && <MobileNav/>}
            </div>
        </header>
    </>
}