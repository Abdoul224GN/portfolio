"use client"
import Header from "@/components/Header";
import {motion} from "framer-motion";
import Side from "@/components/Side";
import Box from "@/components/Box";
import {jetbrains} from "@/app/font";

export default function Services() {
    return <>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, ease: "backIn"}}>
            <Header/>
            <section className={`px-30 grid grid-cols-3 gap-5`}>
                <Box className={``}>
                    <div className={`flex flex-col justify-between items-start grid-rows-1`}>
                        <span
                            className={`text-[2.5rem] font-bold text-outline text-transparent ${jetbrains.className}`}>01</span>
                    </div>
                    <div className={`grid-rows-2`}>
                        <p className={`text-[20px] font-semibold mb-2`}>Web Developement</p>
                        <p className={`text-[13px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium ad architecto debitis
                            delectus
                        </p>
                    </div>
                </Box>
                <Box>
                    <p>Accusantium ad architecto debitis
                        delectu
                    </p>
                </Box>
                <Box>
                    <p>Accusantium ad architecto debitis
                        delectu
                    </p>
                </Box>
                <Box>
                    <p>Accusantium ad architecto debitis
                        delectu
                    </p>
                </Box>
                <div>
                    <Side orientation={"left"}>abdoul.karim@gmail.com</Side>
                    <Side orientation={"right"} className={``}> github.com/abdoul/site</Side>
                </div>
            </section>
        </motion.div>
    </>
}