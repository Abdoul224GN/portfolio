import Header from "@/components/Header";
import {ContactPhoto} from "../../../public/Image";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import {Button} from "@/components/ui/button";

export default function Contact() {
    return <>
        <Header/>
        <section className={`mx-30`}>
            <div className={`shadow-md bg-muted grid grid-cols-[2fr_3fr] gap-5 p-10 rounded-2xl w-full`}>
                <div className={``}>
                    <div className={`backdrop-blur-2xl bg-white/10 border shadow-md border-white/20 rounded-2xl`}>
                        <ContactPhoto className={`h-full w-full rounded-2xl`}/>
                    </div>
                </div>
                <div className={`w-full`}>
                    <form className={`flex flex-col gap-y-5`}>
                        <div className={`grid grid-cols-2 gap-x-4`}>
                            <div className={``}>
                                <Label>Your name</Label>
                                <Input className={`w-full`} placeholder={`Enter your name`}/>
                            </div>
                            <div>
                                <Label>Your email</Label>
                                <Input className={`w-full`} placeholder={`Enter your email`}/>
                            </div>
                        </div>
                        <div>
                            <Label>Subject</Label>
                            <Input className={`w-full`} placeholder={`Enter the subject`}/>
                        </div>
                        <div className={`flex flex-col`}>
                            <Label>Your Message</Label>
                            <textarea placeholder={`Your message`}
                                      className={`py-1 px-3 focus:outline-none focus:ring focus:ring-accent bg-white/5 border border-white/20 rounded-xl`}></textarea>
                        </div>
                        <Button className={`bg-white/5`}>Send Message</Button>
                    </form>
                </div>
            </div>
        </section>
    </>
}