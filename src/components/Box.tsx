import {jetbrains} from "@/app/font";
import {motion} from "framer-motion";
import {ExternalLink} from "lucide-react"

export default function Box({children, className}: { children?: React.ReactNode, className?: string }) {
    const project = [
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 2,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 3,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 4,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 5,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 6,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 7,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 8,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 9,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        }
    ]

    return <>
        <section className={`px-30 grid grid-cols-3 gap-4`}>
            {project.map((project, index) => {
                return <motion.div key={index}
                                   className={`group border-2 border-accent bg-muted rounded-[10px] pointer p-5 ${className} cursor-pointer`}
                                   whileHover={{translateY: -7.2, translateX:-7.2}} transition={{duration: 0.1, ease: "easeInOut"}}>
                    <div className={` flex flex-row h-[45px] items-center justify-between hover:text-accent`}>
                        <span
                            className={`group-hover:text-outline-colored text-[2.5rem] font-bold text-outline text-transparent ${jetbrains.className}`}>
                            {project.id}
                        </span>
                        <ExternalLink className={`rotate-90 hover:rotate-0 transition-all`}/>
                    </div>
                    <p className={`group-hover:text-accent text-[20px] font-semibold mb-2w transition-all`}>{project.title}</p>
                    <p className={`text-[15px]`}>{project.description}</p>
                </motion.div>
            })}
        </section>
    </>
}