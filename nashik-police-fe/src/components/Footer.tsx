import Image from "next/image"
import Link from "next/link"
import Data from '@/Data/data.json';

const {footer}=Data;
export const Footer=()=>{
    return(
        <footer className="bg-white flex justify-center">
            <section className="w-full md:w-[768px] xl:w-[1280px] xl:px-[100px] xl:pt-[100px]">
            <div className="flex justify-between text-2xl">
                <p className="text-Primary-Blue-30">नाशिक शहर पोलिस</p>
                <p className="text-Natural-Gray-70">नवीन ओळख, नवीन अस्तित्व </p>
            </div>
            <div className="flex justify-between py-10">
                {footer.map((each,index)=>(
                    <ul key={index} className="flex flex-col gap-3 text-[16px] ">
                    <li className="text-[#303030] text-2xl font-semibold text-wrap">{each.title}</li>
                    <div className="">
                    {each.list.map((each,index)=>(
                    <li key={index} className="text-[#666] text-[16px] leading-10"><Link href='#' className="">{each}</Link></li>
                    ))}
                    </div>
                </ul>
                ))}
            
            </div>
            <div className="h-px bg-[#ebeaed]"></div>
            <div className="flex justify-between pt-10 pb-16 text-[#03018D]">
                {/* <p>&copy; {new Date().getFullYear()} Nashik City Police</p> */}
                <p>कॉपीराईट © २०२५ नाशिक शहर पोलिस</p>
                <ul className="flex gap-[38px] text-[16px] ">
                    <li><Link href="/sitemap">साइटमॅप</Link></li>
                    <li><Link href="/disclamer">डिस्क्लेमर</Link></li>
                </ul>
                <ul className="flex gap-[38px]">
                    <li><Link href="#"><Image src='/image/social/twitter.png' alt="twitter" width={18} height={18}/></Link></li>
                    <li><Link href="#"><Image src='/image/social/facebook.png' alt="facebook" width={18} height={18}/></Link></li>
                    <li><Link href="#"><Image src='/image/social/instagram.png' alt="instagram" width={18} height={18}/></Link></li>
                </ul>
            </div>
            </section>
        </footer>
    )
}