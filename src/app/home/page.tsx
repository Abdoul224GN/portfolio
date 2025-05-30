"use client"
import {Button} from "@/components/ui/button";
import {FacebookIcon, GithubIcon, InstagramIcon, LinkDin, TwitterIcon} from "../../../public/Image";
import Link from "@/components/ui/Link";
import Avatar from "./Avatar";
import Stats from "@/app/home/Stats";
import Header from "@/components/Header";
import Side from "@/components/Side";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Home() {
    return <>

        <Header/>
        <section className={` flex flex-col justify-items-center h-full md:px-5 lg:px-30`}>

            <div className={`flex flex-col md:flex-row items-center`}>

                <FadeInOnScroll className="order-2 md:w-3/5 flex flex-col md:order-none py-5" direction={`right`}>
                    <p className={`text-center md:text-left`}> FullStack Software Developper</p>
                    <h1 className="md:text-7xl md:text-left  text-4xl  text-center font-semibold text-foreground">Hello
                        I'm<br/> <span
                            className="text-accent">Abdoul Diallo</span>
                    </h1>
                    <p className={`text-center md:text-left`}>
                        Passionate full-stack developer. I build performance and intuitive
                        application using framework like Spring Boot and NextJS. My
                        focus is on code quality and optimal user experience. Each
                        project reflects my commitment to delivering innovative solution.
                    </p>
                    <div className={`flex flex-col md:flex-row items-center justify-items-center pt-5 pb-5 gap-4`}>
                        <div className={`h-full flex items-center`}>
                            <Button>Download CV</Button>
                        </div>
                        <div className={`flex justify-between items-center gap-4 h-full`}>
                            <Link><GithubIcon/></Link>
                            <Link><LinkDin/></Link>
                            <Link><TwitterIcon/></Link>
                            <Link><FacebookIcon/></Link>
                            <Link><InstagramIcon/></Link>
                        </div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll direction={`left`} delay={0.3} className={`order-1 flex items-end justify-end md:w-2/5`}>
                    <Avatar/>
                </FadeInOnScroll>
            </div>

            <FadeInOnScroll delay={0.6} className={`flex items-center justify-center w-full`}>
                <Stats/>
            </FadeInOnScroll>
            <div>
                <Side orientation={"left"}>abdoul.karim@gmail.com</Side>
                <Side orientation={"right"} className={``}> github.com/abdoul/site</Side>
            </div>
        </section>

    </>
}