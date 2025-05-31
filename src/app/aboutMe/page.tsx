import {AboutPhoto} from "../../../public/Image";
import {Badge, JavaCode, NextjsCode} from "@/components/Badge";

export default function AboutMe() {
    const description:String = "I'm a fullstack Java developer with a strong passion for building high-performance, scalable, and well-structured web applications. I work across the entire stack — from robust Java backends built with clean architecture and SOLID principles, to modern, responsive frontends using frameworks like Next.js. Independent and detail-oriented, I care deeply about code quality, architecture clarity, and user experience. My goal is to create web solutions that are not only functional and efficient, but also intuitive and user-friendly. work independently on end-to-end web projects — from concept to deployment — and I'm always looking for new challenges to take on."
    return <>
        <section>
            <div
                className={`grid max-md:grid-cols-1 grid-cols-2 gap-x-10 mt-5 max-md:shadow-md max-md:bg-muted max-md:shadow-black/15 max-md:rounded-[10px] p-5 h-[400px] `}>
                <div
                    className={`backdrop-blur-md shadow-md border-white/20 border flex items-center justify-center bg-white/10 rounded-2xl h-[450px]`}>
                    <AboutPhoto  className={`h-full rounded-2xl`}></AboutPhoto>
                </div>
                <div className={`h-full `}>
                    <Badge>About Me</Badge>
                    <h1 className={`text-accent text-3xl font-semibold`}></h1>
                    <p className={`text-[15px] leading-[1.7] mt-2`}>I'm a fullstack <JavaCode/> developer with a strong passion for building high-performance, scalable, and well-structured web applications. I work across the entire stack — from robust Java backends built with clean architecture and SOLID principles, to modern, responsive frontends using frameworks like <NextjsCode/>. Independent and detail-oriented, I care deeply about code quality, architecture clarity, and user experience. My goal is to create web solutions that are not only functional and efficient, but also intuitive and user-friendly. work independently on end-to-end web projects — from concept to deployment — and I'm always looking for new challenges to take on.</p>
                </div>
            </div>
        </section>
    </>
}