"use client"
import Header from "@/components/Header";
import {motion} from "framer-motion";
import Side from "@/components/Side";
import Box from "@/components/Box";

export default function Services() {
    return <>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, ease: "backIn"}}>
            <Header/>
                <Box/>
                <div>
                    <Side orientation={"left"}>abdoul.karim@gmail.com</Side>
                    <Side orientation={"right"} className={``}> github.com/abdoul/site</Side>
                </div>
        </motion.div>
    </>
}