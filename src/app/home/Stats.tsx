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
            text: "Technologies mastered",
        },
        {
            id: 3,
            num: 65,
            text: "Code commits"
        }
    ]
    return <>
        <div className={`flex justify-between items-center w-full`}>
            {stats.map((item) => {
                return <div className={`flex items-center justify-center gap-1 `}>
                    <CountUp className={`text-5xl font-bold font-jetbrains`} end={item.num} key={item.id} duration={2}
                             delay={2}/>
                    <p className={`${item.text.length < 20 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</p>
                </div>
            })}
        </div>

    </>
}