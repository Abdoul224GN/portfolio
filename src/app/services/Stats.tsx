"use client"

import CountUp from "react-countup";

export default function Stats () {
    const stats = [
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
    return <>
        <div className={`mt-7 grid grid-cols-3 gap-3 justify-center`}>
            {stats.map((stat, index) => (
                <div className={`shadow-md bg-muted h-full rounded-xl border border-white/20 p-3 flex flex-col items-center`} key={index}>
                    <CountUp className={`font-semibold text-[22px]`} end={stat.num} suffix={stat.suffix} />
                    <p className={`text-[13px]`}>{stat.name}</p>
                </div>
            ))}
        </div>

    </>
}