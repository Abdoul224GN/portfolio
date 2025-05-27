import Header from "@/components/Header";
import Skill from "@/app/services/Skill";

export default function Resume() {
    return <>
        <Header/>
        <section className={`max-lg:px-5 px-30 h-full`}>
            <Skill/>
        </section>
    </>
}