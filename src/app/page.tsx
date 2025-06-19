"use client"
import Home from "@/app/home/page";
import Header from "@/components/Header";
import AboutMe from "@/app/aboutMe/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page";
import Services from "@/app/services/page";

export default function App() {
    return <>
        <Header/>
        <section className={`flex flex-col gap-y-16 md:px-5 lg:px-30`}>
            <Home/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <Contact/>
        </section>
    </>
}
