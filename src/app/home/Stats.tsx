"use client"

import CountUp from "react-countup";

export default function Stats() {
    const stats = [
        {
            id: 0,
            num: 10,
            text: "Years of experience",
        },
        {
            id: 1,
            num: 22,
            text: "Years of experience",
        },
        {
            id: 2,
            num: 50,
            text: "Technology mastered",
        },
        {
            id: 3,
            num: 65,
            text: "Code commits"
        }
    ]
    return <>
        <div className={`grid grid-cols-2 gap-2 md:flex md:flex-row justify-between w-full flex-col`}>
            {stats.map((item) => {
                return <div className={`flex items-center justify-center md:justify-start gap-1 `}>
                    <CountUp className={`md:text-6xl text-4xl font-bold font-jetbrains`} end={item.num} key={item.id} duration={2}
                             delay={2}/>
                    <p className={`${item.text.length < 20 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</p>
                </div>
            })}
        </div>

    </>
}