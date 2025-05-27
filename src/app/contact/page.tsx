import Header from "@/components/Header";
import {ContactPhoto} from "../../../public/Image";

export default function Contact() {
    return <>
        <Header/>
        <section className={`mx-30`}>
            <div className={`shadow-md bg-muted grid grid-cols-[2fr_3fr] gap-5 p-10 rounded-2xl w-full`}>
                <div className={``}>
                    <div className={`backdrop-blur-2xl bg-white/20 rounded-2xl`}>
                        <ContactPhoto className={`h-full w-full rounded-2xl`}/>
                    </div>
                </div>
                <div className={``}>

                </div>
            </div>
        </section>
    </>
}