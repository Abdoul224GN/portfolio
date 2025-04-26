import Header from "@/components/Header";
import {Button} from "@/components/ui/button";
import {FacebookIcon, GithubIcon, InstagramIcon, LinkDin, TwitterIcon} from "../../../public/Image";
import Link from "@/components/ui/Link";
import Avatar from "./Avatar";
import Stats from "@/app/home/Stats";

export default function Home() {
    return <>
        <Header/>
        <section className={`pr-30 pl-30 flex flex-col justify-items-center pt-15 pb-15 items-center h-full`}>
            <section className=" flex justify-between0">
                <div className="w-3/5 h-1/2">
                    <p>FullStack Software Developper</p>
                    <h1 className="text-7xl font-semibold text-foreground">Hello I'm<br/> <span className="text-accent">Abdoul Diallo</span>
                    </h1>
                    <p>
                        Passionate full-stack developer. I build performance and intuitive
                        application using framework like Spring Boot and NextJS. My
                        focus is on code quality and optimal user experience. Each
                        project reflects my commitment to delivering innovative solution.
                    </p>
                    <div className={`pt-5 flex justify-start gap-10 `}>
                        <Button>Download CV</Button>
                        <Link><GithubIcon/></Link>
                        <Link><LinkDin/></Link>
                        <Link><TwitterIcon/></Link>
                        <Link><FacebookIcon/></Link>
                        <Link><InstagramIcon/></Link>
                    </div>
                </div>
                <div className={`flex items-end justify-end`}><Avatar/></div>
            </section>
            <section className={`flex w-full pt-10`}>
                <Stats/>
            </section>
        </section>
    </>
}