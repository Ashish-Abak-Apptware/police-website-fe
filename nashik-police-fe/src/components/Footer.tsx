import Image from "next/image"
import Link from "next/link"
import Data from '@/Data/data.json';
const sponcers=[
    '/image/footer/image1.png',
    '/image/footer/image2.png',
    '/image/footer/image3.png',
    '/image/footer/image4.png',
    '/image/footer/image5.png',
    '/image/footer/image6.png',
    '/image/footer/image7.png',
    '/image/footer/image8.png',
    '/image/footer/image9.png'
]
const {footer}=Data;
export const Footer=()=>{
    return(
        <footer className="bg-white flex justify-center">
            <section className="w-full md:w-[768px] xl:w-[1280px] xl:px-[100px] xl:pt-[100px] px-4 py-8">
                <div className="grid xl:grid-cols-9 grid-cols-3 space-y-4 mb-16">
                    {sponcers.map((each,index)=>(
                        <Image key={index} src={each} alt={each} height={100} width={100} className="w-fit xl:h-[40px] h-7 mx-auto"/>
                    ))}
                </div>
            <div className="flex justify-between text-2xl">
                <p className="text-Primary-Blue-30 xl:text-2xl text-sm font-bold">नाशिक शहर पोलिस</p>
                <p className="text-Natural-Gray-70 xl:text-2xl text-sm">नवीन ओळख, नवीन अस्तित्व </p>
            </div>
            <div className="xl:flex grid grid-cols-2 space-y-6 justify-between py-10">
                {footer.map((each,index)=>(
                    <ul key={index} className="flex flex-col gap-3 text-[16px] ">
                    <li className="text-[#303030] xl:text-2xl font-semibold text-wrap">{each.title}</li>
                    <div className="">
                    {each.list.map((each,index)=>(
                    <li key={index} className="text-[#666] xl:text-[16px] text-sm leading-10"><Link href='#' className="">{each}</Link></li>
                    ))}
                    </div>
                </ul>
                ))}
            
            </div>
            <div className="h-px bg-Natural-Gray-80"></div>
            <div className="xl:flex space-y-5 xl:space-y-0 text-center justify-between pt-10 xl:pb-16 text-[#03018D]">
                {/* <p>&copy; {new Date().getFullYear()} Nashik City Police</p> */}
                <p>कॉपीराईट © २०२५ नाशिक शहर पोलिस</p>
                <ul className="xl:flex gap-[38px] text-[16px] space-y-5 xl:space-y-0">
                    <li><Link href="/sitemap">साइटमॅप</Link></li>
                    <li><Link href="/disclamer">डिस्क्लेमर</Link></li>
                </ul>
                <ul className="flex gap-[38px] justify-center">
                    <li><Link href="#"><Image src='/image/social/twitter.png' alt="twitter" width={18} height={18}/></Link></li>
                    <li><Link href="#"><Image src='/image/social/facebook.png' alt="facebook" width={18} height={18}/></Link></li>
                    <li><Link href="#"><Image src='/image/social/instagram.png' alt="instagram" width={18} height={18}/></Link></li>
                </ul>
            </div>
            </section>
        </footer>
    )
}