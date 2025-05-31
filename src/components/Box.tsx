import {jetbrains} from "@/app/font";
import {motion} from "framer-motion";
import {ExternalLink} from "lucide-react"
import {useState} from "react";
import {Button} from "@/components/ui/button";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import {projects} from "@/components/data/projects";
import {Badge} from "@/components/Badge";

export default function Box({children, className}: { children?: React.ReactNode, className?: string }) {
    const [showMore, setShowMore] = useState(true);
    const GRID_LIMIT = 6;
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectToShow = showMore ? firstSix : projects;
    console.log(showMore);
    return <>

        <section >
            <Badge>Projects</Badge>
            <div className={`mt-7 flex flex-col gap-5 items-center`}>
                <motion.div
                    className={`grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 scroll-smooth`}>
                    {projectToShow && projectToShow.map((project, index) => {
                        return <FadeInOnScroll key={project.id} delay={index * 0.2}>
                            <motion.div key={index}
                                        className={`shadow-md shadow-black/15 group bg-muted rounded-[10px] pointer p-5 ${className} cursor-pointer h-auto`}
                                        custom={index}
                                        whileHover={{y: -8}}
                            >
                                <div
                                    className={` flex flex-row h-[45px] items-center justify-between hover:text-accent`}>
                        <span
                            className={`group-hover:text-outline-colored text-[2.5rem] font-bold text-outline text-transparent ${jetbrains.className}`}>
                            {project.id}
                        </span>
                                    <a href={project.link}><ExternalLink
                                        className={`rotate-90 hover:rotate-0 transition-all`}/></a>
                                </div>
                                <p className={`group-hover:text-accent text-[20px] font-semibold mb-2w transition-all`}>{project.title}</p>
                                <p className={`text-[15px]`}>{project.description}</p>
                                <div className={`flex flex-row gap-3`}>
                                    {project.technologies.map((technologie, index) => {
                                        return <p key={index}
                                                  className={`font-normal mt-4 text-[12px] ${jetbrains.className}`}>{technologie}</p>
                                    })}
                                </div>
                            </motion.div>
                        </FadeInOnScroll>
                    })}
                </motion.div>
                <Button onClick={() => setShowMore(!showMore)}>{showMore ? "Afficher Plus" : "Afficher Moins"}</Button>
            </div>
        </section>
    </>
}