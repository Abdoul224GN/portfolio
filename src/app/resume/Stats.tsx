"use client"

import CountUp from "react-countup";

export default function Stats () {
    const stats = [
        {
            name: "Google Review",
            num : 220
        },
        {
            name: "Year Experience",
            num : 15
        },
        {
            name: "Google Review",
            num : 220
        }
    ]
    return <>
        <div className={`mt-7 grid grid-cols-3 gap-5 justify-center`}>
            {stats.map((stat, index) => (
                <div className={`shadow-md bg-muted h-full rounded-xl border border-white/20 p-4 flex flex-col items-center`} key={index}>
                    <CountUp className={`font-semibold text-[20px]`} end={stat.num}/>
                    <p className={`text-[12px]`}>{stat.name}</p>
                </div>
            ))}
        </div>

    </>
}