import Header from "@/components/Header";
import {Photo1} from "../../../public/Image";

export default function Resume() {
    return <>
        <Header/>
        <section className={`px-30 py-5 grid grid-cols-2 gap-x-10`}>
            <div className={``}>
                <div className={`backdrop-blur-lg h-[70%] flex items-center justify-center bg-white/10 rounded-2xl`}>
                    <Photo1></Photo1>
                </div>
            </div>
            <div>
                <h1 className={`text-accent text-2xl`}>UI/UX Desinger</h1>
            </div>
        </section>
    </>
}