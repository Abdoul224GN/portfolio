import {jetbrains} from "@/app/font";
import {AnimatePresence, motion} from "framer-motion";
import {ExternalLink} from "lucide-react"
import {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Box({children, className}: { children?: React.ReactNode, className?: string }) {
    const projects = [
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["Java", "JavaScript", "CSS"],
        },
        {
            id: 2,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["TypeScript", "TailwindCSS"],
        },
        {
            id: 3,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["Spring Boot", "ReactJS"]
        },
        {
            id: 4,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architect',
            link: "#",
            technologies: ["Java", "Python"]
        },
        {
            id: 5,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["Java", "Python"]
        },
        {
            id: 6,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["Java", "Python"]
        },
        {
            id: 7,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["Java", "Python"]
        },
        {
            id: 8,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["Java", "Python"]
        },
        {
            id: 9,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#",
            technologies: ["Java", "Python"]
        }
    ]
    const [showMore, setShowMore] = useState(true);
    const GRID_LIMIT = 6;
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectToShow = showMore ? firstSix : projects;
    console.log(showMore);
    const boxVariants = {
        hover: {translateY: -7, transition: {duration: 0.2, ease: 'easeInOut'}},
        hidden: {opacity: 0, y: 20},
        visible: (i: number) => ({
            opacity: 1, y: 0, transition: {
                duration: 0.4, ease: 'easeInOut', delay: i * 0.15
            }
        }),
        exit: (i: number) => ({
            opacity: 0, y: -20, transition: {
                duration: 0.4, ease: 'easeInOut', delay: i * 0.15
            }
        })
    }
    return <>
        <section className={`flex flex-col gap-5 items-center`}>
            <AnimatePresence>
                <motion.div
                    className={`px-30 max-sm:p-3 max-lg:p-5 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 scroll-smooth`}
                    transition={{staggerChildren: 0.2}}>
                    {projectToShow && projectToShow.map((project, index) => {
                        return <motion.div key={index}
                                           className={`shadow-md shadow-black/15 group bg-muted rounded-[10px] pointer p-5 ${className} cursor-pointer`}
                                           variants={boxVariants}
                                           custom={index}
                                           whileHover={`hover`}
                                           initial="hidden"
                                           animate="visible"
                                           exit="exit"
                        >
                            <div className={` flex flex-row h-[45px] items-center justify-between hover:text-accent`}>
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
                                    return <p key={index} className={`font-normal mt-4 text-[12px] ${jetbrains.className}`}>{technologie}</p>
                                })}
                            </div>
                        </motion.div>
                    })}
                </motion.div>
            </AnimatePresence>
            <Button onClick={() => setShowMore(!showMore)}>{showMore ? "Afficher Plus" : "Afficher Moins"}</Button>
        </section>
    </>
}