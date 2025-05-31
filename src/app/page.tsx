"use client"
import Home from "@/app/home/page";
import Header from "@/components/Header";
import AboutMe from "@/app/aboutMe/page";
import Box from "@/components/Box";
import Skill from "@/app/services/Skill";
import Contact from "@/app/contact/page";

export default function App() {
    return <>
        <Header/>
        <section className={`flex flex-col gap-y-16 md:px-5 lg:px-30`}>
            <Home/>
            <AboutMe/>
            <Skill/>
            <Box/>
            <Contact/>
        </section>
    </>
}
