import Image from "next/image"
import Link from "next/link"
import Data from '@/Data/data.json';
const sponcers=[
    '/assets/footer/image1.png',
    '/assets/footer/image2.png',
    '/assets/footer/image3.png',
    '/assets/footer/image4.png',
    '/assets/footer/image5.png',
    '/assets/footer/image6.png',
    '/assets/footer/image7.png',
    '/assets/footer/image8.png',
    '/assets/footer/image9.png'
]
const {footer}=Data;
export const Footer=()=>{
    return(
        <footer className="bg-white flex justify-center font-khand">
            <section className="w-full md:w-[768px] xl:w-[1280px] xl:px-[100px] xl:pt-[100px] px-4 py-8">
                <div className="grid md:grid-cols-9 grid-cols-3 space-y-4 mb-16">
                    {sponcers.map((each,index)=>(
                        <Image key={index} src={each} alt={each} height={100} width={100} className="w-fit xl:h-[40px] h-7 mx-auto"/>
                    ))}
                </div>
            <div className="flex justify-between text-2xl">
                <p className="text-Primary-Blue-30 xl:text-h6RegularKhand text-sH1RegularKhand font-bold">नाशिक शहर पोलिस</p>
                <p className="text-Natural-Gray-70 xl:text-h6RegularKhand text-sH1RegularKhand">नवीन ओळख, नवीन अस्तित्व </p>
            </div>
            <div className="md:flex grid grid-cols-2 space-y-6 justify-between py-10">
                {footer.map((each,index)=>(
                    <ul key={index} className="flex flex-col gap-3 text-[16px] ">
                    <li className="text-[#303030] xl:text-h6RegularKhand text-sH1RegularKhand font-semibold text-wrap">{each.title}</li>
                    <div className="">
                    {each.list.map((each,index)=>(
                    <li key={index} className="text-Natural-Gray-50 xl:text-p3ExtraLightInter text-p4ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter"><Link href='#' className="">{each}</Link></li>
                    ))}
                    </div>
                </ul>
                ))}
            
            </div>
            <div className="h-px bg-Natural-Gray-80"></div>
            <div className="md:flex space-y-5 xl:space-y-0 text-center justify-between pt-10 xl:pb-16 text-Primary-Blue-30">
                {/* <p>&copy; {new Date().getFullYear()} Nashik City Police</p> */}
                <p className="text-p3ExtraLightInter">कॉपीराईट © २०२५ नाशिक शहर पोलिस</p>
                <ul className="md:flex gap-[38px] text-p3ExtraLightInter space-y-5 xl:space-y-0">
                    <li><Link href="/sitemap">साइटमॅप</Link></li>
                    <li><Link href="/disclamer">डिस्क्लेमर</Link></li>
                </ul>
                <ul className="flex gap-[38px] justify-center">
                    <li><Link href="#"><Image src='/assets/social/twitter.png' alt="twitter" width={18} height={18}/></Link></li>
                    <li><Link href="#"><Image src='/assets/social/facebook.png' alt="facebook" width={18} height={18}/></Link></li>
                    <li><Link href="#"><Image src='/assets/social/instagram.png' alt="instagram" width={18} height={18}/></Link></li>
                </ul>
            </div>
            </section>
        </footer>
    )
}