import Header from "@/components/Header";
import Skill from "@/app/resume/Skill";

export default function Resume() {
    return <>
        <Header/>
        <section className={`px-30 h-full`}>
            <Skill/>
        </section>
    </>
}