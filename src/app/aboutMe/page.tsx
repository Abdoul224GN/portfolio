import Header from "@/components/Header";
import {AboutPhoto} from "../../../public/Image";

export default function Work() {
    return <>
        <Header/>
        <section className={`px-30`}>
            <div
                className={`grid max-md:grid-cols-1 grid-cols-2 gap-x-13 mt-5 max-md:shadow-md max-md:bg-muted max-md:shadow-black/15 max-md:rounded-[10px] p-5 h-[400px] `}>
                <div
                    className={`backdrop-blur-md shadow-md border-white/20 border flex items-center justify-center bg-white/10 rounded-2xl h-[450px]`}>
                    <AboutPhoto  className={`h-full rounded-2xl`}></AboutPhoto>
                </div>
                <div className={`h-full `}>
                    <h1 className={`text-accent text-3xl font-semibold`}></h1>
                    <p className={`text-[15px] leading-relaxed mt-2`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur eum fuga ipsum nemo omnis quibusdam sint temporibus veritatis. Alias aperiam illum iste minima similique sit voluptates. Officiis, saepe.</p>
                </div>
            </div>
        </section>
    </>
}