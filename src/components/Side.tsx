export default function Side({orientation}: {orientation: string}) {
    return <>
        <div className={`fixed ${orientation == "left" && `left-10`} ${orientation == "right" && `right-10`} bottom-0 z-10 flex flex-col justify-between w-0 h-[60%]`}>
            <div className={`rotate-90`}>
                <span className={`font-thin`}>abdoulkarim@gmail.com</span>
            </div>
            <ul className={``}>
                <li className={`flex justify-center items-center`}>
                    <div className={` size-2 rounded-full bg-accent`}></div>
                </li>
                <li className={`w-[1.5px] h-[150px] bg-accent`}></li>
            </ul>
        </div>
    </>
};