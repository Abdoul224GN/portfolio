"use client"
import {Photo} from "../../../public/Image";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import {skills} from "@/components/data/service";

export default function Skill() {
    return <>
        <section>
            <title>Resume</title>
            {skills.map((skill, index) => (

                <div
                    className={`grid max-md:grid-cols-1 grid-cols-2 gap-x-13 h-auto mt-15 max-md:shadow-md max-md:bg-muted max-md:shadow-black/15 max-md:rounded-[10px] p-5 `}
                    key={index}>

                    <div className={`group max-md:hidden relative h-full ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                        <div
                            className={`backdrop-blur-md shadow-md border-white/20 border flex items-center justify-center bg-white/10 rounded-2xl h-full`}>
                            <Photo src={skill.imageURL} className={`rounded-2xl`}></Photo>
                        </div>
                    </div>

                    <FadeInOnScroll direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1 + 0.1}
                                    className={`h-full ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                        <div className={`h-full`}>
                            <h1 className={`text-accent text-3xl font-semibold`}>{skill.title}</h1>
                            <p className={`text-[15px] leading-relaxed mt-2`}>{skill.description}</p>
                        </div>
                    </FadeInOnScroll>
                </div>
            ))}
        </section>
    </>
}