import {Photo1} from "../../../public/Image";
import Stats from "@/app/resume/Stats";

export default function Skill() {
    const skills = [
        {
            title: "UI Developer",
            name: "Satisfaction Rate",
            num: 90,
            suffix: "%",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam, cupiditate deserunt dolores eligendi esse expedita explicabo fugiat inte maiores modi molestias mollitia nihil nisi placeat suscipit voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error exercitationem explicabo, fuga ipsam nisi possimussapiente. Consectetur dignissimos esse nesciunt pferspiciatis tempora veritatis vitae! Delectus deleniti excepturi maxime veniam"
        },
        {
            title: "UI Developer",
            name: "Year Experience",
            num: 15,
            suffix: "+",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam, cupiditate deserunt dolores eligendi esse expedita explicabo fugiat inte maiores modi molestias mollitia nihil nisi placeat suscipit voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error exercitationem explicabo, fuga ipsam nisi possimussapiente. Consectetur dignissimos esse nesciunt pferspiciatis tempora veritatis vitae! Delectus deleniti excepturi maxime veniam"

        },
        {
            title: "UI Developer",
            name: "UI Designs",
            num: 20,
            suffix: "+",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam, cupiditate deserunt dolores eligendi esse expedita explicabo fugiat inte maiores modi molestias mollitia nihil nisi placeat suscipit voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error exercitationem explicabo, fuga ipsam nisi possimussapiente. Consectetur dignissimos esse nesciunt pferspiciatis tempora veritatis vitae! Delectus deleniti excepturi maxime veniam"
        }
    ]
    return <>
        {skills.map((skill, index) => (
            <div className={`grid grid-cols-2 gap-x-10 h-auto mt-20 `} key={index}>
                <div className={`group relative col-span-1`}>
                    <div
                        className={`group-hover:left-65 group-hover:-top-25 transition-all absolute top-65 -left-25 w-30 h-30 translate-14 bg-accent rounded-full `}>
                    </div>
                    <div
                        className={`backdrop-blur-md shadow-md border-white/20 border flex items-center justify-center bg-white/10 rounded-2xl`}>
                        <Photo1></Photo1>
                    </div>
                </div>
                <div className={`h-full`}>
                    <h1 className={`text-accent text-3xl font-semibold`}>{skill.title}</h1>
                    <p className={`text-[15px] leading-relaxed mt-2`}>{skill.description}</p>
                    <Stats/>
                </div>
            </div>
        ))}

    </>
}