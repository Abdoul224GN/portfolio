"use client"
import {GithubIcon, LinkDin, MenuImg, TwitterIcon} from "../../public/Image"
import Nav from "@/components/Nav";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const linkStyle: string = "hover:opacity-75 transition-opacity";
    console.log(toggle)
    const boxVariants = {
        visible: {y: 0, opacity: 1},
        hidden: {y: -100, opacity: 0},
    }
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();

        // @ts-ignore
        if (latest > previous && latest > 150) {
            setHidden(true); // scroll vers le bas → on cache le header
        } else {
            setHidden(false); // scroll vers le haut → on affiche
        }
    });
    return <>
        <motion.header
            className="fixed border-y mt-0.5 border-white/20 z-50 top-0 left-0 bg-background h-10 flex flex-col justify-between items-center w-full p-1  mb-5 max-md:mb-10"
            variants={{
                visible: {y: 0},
                hidden: {y: '-100%'},
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{duration: 0.35, ease: 'easeInOut'}}>
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
            <motion.div animate={toggle ? boxVariants.visible : boxVariants.hidden} transition={{type: "spring"}}
                        className={`pt-2 w-full flex items-center justify-center`}>
                <MobileNav/>
            </motion.div>
        </motion.header>
    </>
}