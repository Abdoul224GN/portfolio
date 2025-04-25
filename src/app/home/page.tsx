import Header from "@/components/Header";
import {Button} from "@/components/ui/button";
import {FacebookIcon, GithubIcon, InstagramIcon, LinkDin, TwitterIcon} from "../../../public/Image";
import Link from "@/components/ui/Link";

export default function Home() {
    return <>
        <Header/>
        <section className="h-full flex items-center p-25">
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
        </section>
    </>
}