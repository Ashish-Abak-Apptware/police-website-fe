import Image from "next/image"
import { Button } from "../UI/Button"

export const CommissionerQuote=()=>{
    return(
        <section className="flex justify-center bg-Natural-Gray-100 font-khand">
            <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] w-full px-4 py-[50px] flex flex-col gap-16">
                <div className="md:flex md:flex-row flex flex-col gap-8">
                    <Image src="/assets/commissioner.png" alt="Commissioner" width={800} height={800} className="xl:w-[500px] xl:h-[400px] hidden md:block"/>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-Natural-Gray-20 xl:text-h3RegularKhand text-h4MediumKhand font-medium">पोलीस आयुक्तांचा संदेश</h1>
                        <Image src="/assets/commissioner.png" alt="Commissioner" width={800} height={800} className="xl:w-[500px] xl:h-[400px] md:hidden block"/>
                        <p className="text-Natural-Gray-20 xl:text-h6RegularKhand text-sH1RegularKhand font-khand flex gap-1"><Image src="/assets/quote-left.svg" alt="quote" width={20} height={20} className="h-fit"/> नागरिक-केंद्रित पोलिसिंगच्या माध्यमातून नाशिकमधील विशिष्ट भागांच्या गरजा आणि समस्या लक्षात घेऊन नागरिकांना उच्च दर्जाची सेवा प्रदान करणे हे आमचे मुख्य लक्ष्य आहे.
                        नागरिकांच्या गरजा समजून घेत, मूलभूत पोलिसिंगची अंमलबजावणी आणि वेळोवेळी पुनरावलोकन केले जाईल. प्राप्त झालेल्या अभिप्रायाच्या आधारे आवश्यक बदल सातत्याने करण्यात येतील, जेणेकरून नाशिककरांना सर्वोत्तम सेवा मिळेल. जय हिंद!</p>
                        <p className="text-Natural-Gray-50 text-p3ExtraLightInter leading-p2ExtraLightInter xl:leading-p3ExtraLightInter font-Inter">
                        श्री. संदीप कर्णिक (आयपीएस)<br/>
                        पोलीस आयुक्त, नाशिक शहर
                        </p>
                        <Button varient="blue" child="ई-मीटद्वारे संवाद साधा"/>
                    </div>
                </div>
            </section>
        </section>
    )
}