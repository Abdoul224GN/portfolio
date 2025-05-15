import {jetbrains} from "@/app/font";
import {AnimatePresence, motion} from "framer-motion";
import {ExternalLink} from "lucide-react"
import {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Box({children, className}: { children?: React.ReactNode, className?: string }) {
    const project = [
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        },
        {
            id: 2,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        },
        {
            id: 3,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        },
        {
            id: 4,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architect',
            link: "#"
        },
        {
            id: 5,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        },
        {
            id: 6,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        },
        {
            id: 7,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        },
        {
            id: 8,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        },
        {
            id: 9,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
            link: "#"
        }
    ]
    const [showMore, setShowMore] = useState(true);
    const GRID_LIMIT = 6;
    const firstSix = project.slice(0, GRID_LIMIT);
    const projectToShow = showMore ? firstSix : project;
    console.log(showMore);
    const boxVariants = {
        hover: {translateY: -7, transition: {duration: 0.2, ease: 'easeInOut'}},
        hidden: {opacity: 0, y: 20},
        visible: (i: number) => ({
            opacity: 1, y: 0, transition: {
                duration: 0.3, ease: 'easeInOut', delay: i * 0.1
            }
        }),
        exit: (i: number) => ({
            opacity: 0, y: -20, transition: {
                duration: 0.3, ease: 'easeInOut', delay: i * 0.1
            }
        })
    }
    return <>
        <section className={`flex flex-col gap-5 items-center`}>
            <AnimatePresence>
                <motion.div className={`px-30 grid grid-cols-3 gap-4`} transition={{staggerChildren: 0.2}}>
                    {projectToShow && projectToShow.map((project, index) => {
                        return <motion.div key={index}
                                           className={`shadow shadow-black/30 group bg-muted rounded-[10px] pointer p-5 ${className} cursor-pointer`}
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
                        </motion.div>
                    })}
                </motion.div>
            </AnimatePresence>
            <Button onClick={() => setShowMore(!showMore)}>{showMore ? "Afficher Plus" : "Afficher Moins"}</Button>
        </section>
    </>
}