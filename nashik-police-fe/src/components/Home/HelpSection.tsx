export const HelpSection=()=>{
    return(
        <section className="flex justify-center bg-white font-khand">
            <section className="xl:w-[1280px] xl:px-[100px] xl:py-[100px] md:w-[768px] w-full py-8 px-4  flex flex-col justify-center gap-10">
                <div className="xl:w-[470px] text-black flex flex-col gap-3 mx-auto text-center">
                    <p className="xl:text-h3RegularKhand text-h4MediumKhand font-medium">न्याय, मदत आणि सुरक्षा</p>
                    <p className="xl:text-sH1RegularKhand text-p3ExtraLightInter">समाजाच्या सुरक्षिततेसाठी आणि सुव्यवस्थेसाठी अनेक महत्त्वाची कामे पार पाडतात. त्यांची जबाबदारी विविध क्षेत्रांमध्ये विस्तारलेली आहे.</p>
                </div>
                <div className="">
                    <div className="md:flex md:flex-row flex flex-col md:divide-y-0 divide-y-1 divide-Natural-Gray-80 gap-5 md:gap-0 md:border-b md:border-b-Natural-Gray-40">
                        <div className="flex md:gap-1 gap-2 text-Primary-Blue-30 px-5 md:px-2 xl:px-5 md:w-[40%] w-full pb-5 xl:pb-0">
                            <h1 className="xl:text-hLRegularKhand md:text-h2MediumKhand text-h4MediumKhand md:mt-5">2025</h1>
                            <p className="xl:text-h5RegularKhand md:text-p2ExtraLightInter text-p1RegularInter h-[50%] md:mt-auto md:mb-5">गुन्हे नोंद <br/>तपासाखालील गुन्हे</p>
                        </div>
                        <div className="xl:px-10 md:pt-10 md:pb-5 p-5 mb-5 md:mb-0 text-white bg-bg-gradient bg-no-repeat bg-cover rounded-2xl flex gap-5 md:w-[60%] w-full">
                            <h1 className="xl:text-h5RegularKhand md:text-sH1RegularKhand text-p2ExtraLightInter">Nashik पोलिसांच्या <br/>प्रतिसादाने समाधानी</h1>
                            <p className="md:text-h4MediumKhand text-p2ExtraLightInter content-end font-bold">८५% नागरिक</p>
                        </div>
                    </div>
                    <div className="md:flex md:flex-row grid grid-cols-2 justify-between">
                        <div className="text-Primary-Blue-30 p-5 border-r border-y md:border-y-0 border-r-Natural-Gray-50 border-y-Natural-Gray-50">
                            <h1 className="xl:text-h3RegularKhand text-sH1RegularKhand">८०% तपास पूर्ण</h1>
                            <p className="xl:text-h5RegularKhand text-p4ExtraLightInter">गंभीर गुन्ह्यांवरील</p>
                        </div>
                        <div className="text-Primary-Blue-30 p-5 border-y md:border-r md:border-r-Natural-Gray-50 md:border-y-0 border-y-Natural-Gray-50">
                            <h1 className="xl:text-h3RegularKhand text-sH1RegularKhand">९२% हरवलेल्या व्यक्ती</h1>
                            <p className="xl:text-h5RegularKhand text-p4ExtraLightInter">४८ तासांत शोधल्या</p>
                        </div>
                        <div className="text-Primary-Blue-30 p-5">
                            <h1 className="xl:text-h3RegularKhand text-sH1RegularKhand">७०% घट</h1>
                            <p className="xl:text-h5RegularKhand text-p4ExtraLightInter">साखळी चोरीच्या घटनांमध्ये</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}