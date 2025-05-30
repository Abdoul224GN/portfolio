"use client"
import Home from "@/app/home/page";
import Side from "@/components/Side";
import Header from "@/components/Header";
import AboutMe from "@/app/aboutMe/page";
import Box from "@/components/Box";
import Skill from "@/app/services/Skill";
import Contact from "@/app/contact/page";

export default function App() {
    return <>
        <Header/>
        <section className={`md:px-5 lg:px-30`}>
            <Home/>
            <div>
                <Side orientation={"left"}>abdoul.karim@gmail.com</Side>
                <Side orientation={"right"} className={``}> github.com/abdoul/site</Side>
            </div>
            <AboutMe/>
            <Skill/>
            <Box/>
            <Contact/>
        </section>
    </>
}
