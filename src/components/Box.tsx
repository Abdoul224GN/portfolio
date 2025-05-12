import {jetbrains} from "@/app/font";

export default function Box({children, className}: { children?: React.ReactNode, className?: string }) {
    const project = [
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        },
        {
            id: 1,
            title: 'Web Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto debitis delectus',
        }
    ]

    return <>
        {project.map((project) => {
            return <div className={`border-2 border-accent bg-muted rounded-2xl p-5 ${className}`}>
                <span
                    className={`text-[2.5rem] font-bold text-outline text-transparent ${jetbrains.className}`}>01</span>
                <p>{project.title}</p>
                <p>{project.description}</p>
            </div>
        })}
    </>
}