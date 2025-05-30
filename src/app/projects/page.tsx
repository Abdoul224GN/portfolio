"use client"
import {motion} from "framer-motion";
import Box from "@/components/Box";

export default function Services() {
    return <>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, ease: "backIn"}}>
            <Box/>
        </motion.div>
    </>
}