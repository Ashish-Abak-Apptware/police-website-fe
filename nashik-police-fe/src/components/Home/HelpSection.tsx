export const HelpSection=()=>{
    return(
        <section className="flex justify-center bg-white">
            <section className="xl:w-[1280px] xl:px-[100px] xl:py-[100px] md:w-[768px] w-full py-8 px-4  flex flex-col justify-center gap-10">
                <div className="xl:w-[470px] text-black flex flex-col gap-3 mx-auto text-center">
                    <p className="xl:text-5xl text-3xl">न्याय, मदत आणि सुरक्षा</p>
                    <p className="text-H6-Medium-Khand">समाजाच्या सुरक्षिततेसाठी आणि सुव्यवस्थेसाठी अनेक महत्त्वाची कामे पार पाडतात. त्यांची जबाबदारी विविध क्षेत्रांमध्ये विस्तारलेली आहे.</p>
                </div>
                <div className="">
                    <div className="xl:flex xl:flex-row flex flex-col xl:divide-y-0 divide-y-1 divide-Natural-Gray-80 gap-5 xl:gap-0 xl:border-b xl:border-b-Natural-Gray-40">
                        <div className="flex xl:gap-1 gap-2 text-Primary-Blue-30 px-5 xl:w-[40%] w-full pb-5 xl:pb-0">
                            <h1 className="xl:text-8xl text-4xl xl:mt-5">2025</h1>
                            <p className="xl:text-2xl text-sm h-[50%] xl:mt-auto xl:mb-5">गुन्हे नोंद <br/>तपासाखालील गुन्हे</p>
                        </div>
                        <div className="xl:px-10 xl:pt-10 xl:pb-5 p-5 mb-5 xl:mb-0 text-white bg-bg-gradient bg-no-repeat bg-cover rounded-2xl flex gap-5 xl:w-[60%] w-full">
                            <h1 className="xl:text-3xl text-lg">Nashik पोलिसांच्या <br/>प्रतिसादाने समाधानी</h1>
                            <p className="xl:text-4xl text-lg content-end font-bold">८५% नागरिक</p>
                        </div>
                    </div>
                    <div className="xl:flex xl:flex-row grid grid-cols-2 justify-between">
                        <div className="text-Primary-Blue-30 p-5 border-r border-y xl:border-y-0 border-r-Natural-Gray-50 border-y-Natural-Gray-50">
                            <h1 className="xl:text-[40px] text-xl">८०% तपास पूर्ण</h1>
                            <p className="xl:text-3xl text-sm">गंभीर गुन्ह्यांवरील</p>
                        </div>
                        <div className="text-Primary-Blue-30 p-5 border-y xl:border-r xl:border-r-Natural-Gray-50 xl:border-y-0 border-y-Natural-Gray-50">
                            <h1 className="xl:text-[40px] text-xl">९२% हरवलेल्या व्यक्ती</h1>
                            <p className="xl:text-3xl text-sm">४८ तासांत शोधल्या</p>
                        </div>
                        <div className="text-Primary-Blue-30 p-5">
                            <h1 className="xl:text-[40px] text-xl">७०% घट</h1>
                            <p className="xl:text-3xl text-sm">साखळी चोरीच्या घटनांमध्ये</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}