import Header from "@/components/Header";
import {Photo1} from "../../../public/Image";

export default function Resume() {
    return <>
        <Header/>
        <section className={`px-30 pt-5 grid grid-cols-2 gap-x-10 h-full`}>
            <div className={`relative `}>
                <div className={`absolute top-65 -left-25 w-30 h-30 translate-14 bg-cyan-600 opacity-70 rounded-full `}></div>
                <div className={`backdrop-blur-md shadow-md border-white/20 border h-[70%] flex items-center justify-center bg-white/10 rounded-2xl`}>
                    <Photo1></Photo1>
                </div>
            </div>
            <div>
                <h1 className={`text-accent text-3xl font-semibold`}>UI/UX Designer</h1>
                <p className={`text-[15px] leading-relaxed mt-2`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam, cupiditate deserunt dolores eligendi esse expedita explicabo fugiat in iste maiores modi molestias mollitia nihil nisi placeat suscipit voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error exercitationem explicabo, fuga ipsam nisi possimus sapiente. Consectetur dignissimos esse nesciunt pferspiciatis tempora veritatis vitae! Delectus deleniti excepturi maxime veniam.</p>
            </div>
        </section>
    </>
}