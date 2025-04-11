import Image from "next/image"

export const KumbhSection=()=>{
    return(
        <section className="flex justify-center bg-white">
            <section className="xl:w-[1280px] md:w-[768px] w-full">
                <Image src="/image/kumbh.svg" alt="kumbh" width={1000} height={1000} className="w-full h-full"/>
            </section>
        </section>
    )
}