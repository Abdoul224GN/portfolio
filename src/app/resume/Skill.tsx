"use client"
import {Photo} from "../../../public/Image";
import CountUp from "react-countup";
import {jetbrains} from "@/app/font";

export default function Skill() {
    const skills = [
        {
            title: "UI/UX Designer",
            name: "Satisfaction Rate",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam, cupiditate deserunt dolores eligendi esse expedita explicabo fugiat inte maiores modi molestias mollitia nihil nisi placeat suscipit voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error exercitationem explicabo, fuga ipsam nisi possimussapiente. Consectetur dignissimos esse nesciunt pferspiciatis tempora veritatis vitae! Delectus deleniti excepturi maxime veniam",
            imageURL: "/images/photo1.webp",
            stats : [
                {
                    name: "Satisfaction Rate",
                    num : 90,
                    suffix:"%"
                },
                {
                    name: "Year Experience",
                    num : 15,
                    suffix:"+"
                },
                {
                    name: "UI Designs",
                    num : 20,
                    suffix:"+"
                }
            ]
        },
        {
            title: "FullStack Developer",
            name: "Year Experience",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam, cupiditate deserunt dolores eligendi esse expedita explicabo fugiat inte maiores modi molestias mollitia nihil nisi placeat suscipit voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error exercitationem explicabo, fuga ipsam nisi possimussapiente. Consectetur dignissimos esse nesciunt pferspiciatis tempora veritatis vitae! Delectus deleniti excepturi maxime veniam",
            imageURL: "/images/photo2.webp",
            stats : [
                {
                    name: "Satisfaction Rate",
                    num : 90,
                    suffix:"%"
                },
                {
                    name: "Year Experience",
                    num : 15,
                    suffix:"+"
                },
                {
                    name: "UI Designs",
                    num : 20,
                    suffix:"+"
                }
            ]
        },
        {
            title: "Software Engineering",
            name: "UI Designs",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam, cupiditate deserunt dolores eligendi esse expedita explicabo fugiat inte maiores modi molestias mollitia nihil nisi placeat suscipit voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error exercitationem explicabo, fuga ipsam nisi possimussapiente. Consectetur dignissimos esse nesciunt pferspiciatis tempora veritatis vitae! Delectus deleniti excepturi maxime veniam",
            imageURL: "/images/photo2.webp",
            stats : [
                {
                    name: "Satisfaction Rate",
                    num : 90,
                    suffix:"%"
                },
                {
                    name: "Year Experience",
                    num : 15,
                    suffix:"+"
                },
                {
                    name: "UI Designs",
                    num : 20,
                    suffix:"+"
                }
            ]
        }
    ]
    return <>
        <title>Resume</title>
        {skills.map((skill, index) => (
            <div className={`grid max-md:grid-cols-1 grid-cols-2 gap-x-10 h-auto mt-20 max-md:shadow-md max-md:bg-muted max-md:shadow-black/15 max-md:rounded-[10px] p-5 `} key={index}>
                <div className={`group max-md:hidden relative ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                    <div
                        className={`group-hover:left-65 group-hover:-top-25 transition-all absolute top-65 -left-25 w-30 h-30 translate-14 bg-accent rounded-full `}>
                    </div>
                    <div
                        className={`backdrop-blur-md shadow-md border-white/20 border flex items-center justify-center bg-white/10 rounded-2xl h-[400px]`}>
                        <Photo src={skill.imageURL}></Photo>
                    </div>
                </div>
                <div className={`h-full ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                    <h1 className={`text-accent text-3xl font-semibold`}>{skill.title}</h1>
                    <p className={`text-[15px] leading-relaxed mt-2`}>{skill.description}</p>
                    <div className={`mt-7 grid grid-cols-3 gap-3 justify-center`}>
                        {skill.stats.map((stat, index) => (
                            <div className={`shadow-md bg-muted h-full rounded-xl border border-white/20 p-3 flex flex-col items-center`} key={index}>
                                <CountUp className={`font-semibold text-[22px] ${jetbrains.className}`} end={stat.num} suffix={stat.suffix} />
                                <p className={`text-[12px]`}>{stat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}

    </>
}