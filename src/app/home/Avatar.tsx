"use client"

import {motion} from "framer-motion"
import {AvatarImg} from "../../../public/Image";

export default function Avatar() {
    return <>
        <div className="h-full w-full relative">
            <motion.div className="flex items-center justify-center">
                <div className={`absolute`}>
                    <AvatarImg className={`rounded-full h-auto w-auto object-contain order-2 `}/>
                </div>
                <motion.svg className={`h-[350px] w-[350px]`} fill="transparent" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 506 506">
                    <motion.circle
                        className={`order1`}
                        cx="250"
                        cy="250"
                        r="240"
                        stroke="#FFCDAC"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray:"24 10 0 0"}}
                        animate={{
                            strokeDasharray:["15 120 25 25", "16 25 92 72","4 250 22 22"],
                            rotate:[120, 360],
                        }}
                        transition={{
                            duration:20,
                            repeat: Infinity,
                            repeatType:"reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>

        </div>
    </>
}