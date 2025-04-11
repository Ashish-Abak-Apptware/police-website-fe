export const HelpSection=()=>{
    return(
        <section className="flex justify-center bg-white">
            <section className="xl:w-[1280px] xl:px-[100px] xl:py-[100px] md:w-[768px] w-full flex flex-col justify-center gap-10">
                <div className="xl:w-[470px] text-black flex flex-col gap-3 mx-auto">
                    <p className="text-5xl">न्याय, मदत आणि सुरक्षा</p>
                    <p className="text-H6-Medium-Khand">समाजाच्या सुरक्षिततेसाठी आणि सुव्यवस्थेसाठी अनेक महत्त्वाची कामे पार पाडतात. त्यांची जबाबदारी विविध क्षेत्रांमध्ये विस्तारलेली आहे.</p>
                </div>
                <div className="not-last-of-type:">
                    <div className="flex border-b border-b-Natural-Gray-50">
                        <div className="flex gap-1 text-Primary-Blue-30 px-5 w-[40%]">
                            <h1 className="text-8xl mt-5">2025</h1>
                            <p className="text-2xl h-[50%] mt-auto mb-5">गुन्हे नोंद <br/>तपासाखालील गुन्ह</p>
                        </div>
                        <div className="px-10 pt-10 pb-5 text-white bg-hero-section-bg bg-no-repeat bg-cover rounded-2xl flex gap-5 w-[60%]">
                            <h1 className="text-3xl">Nashik पोलिसांच्या <br/>प्रतिसादाने समाधानी</h1>
                            <p className="text-4xl content-end">८५% नागरिक</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-Primary-Blue-30 p-5 border-r border-r-Natural-Gray-50">
                            <h1 className="text-[40px]">८०% तपास पूर्ण</h1>
                            <p className="text-3xl">गंभीर गुन्ह्यांवरील</p>
                        </div>
                        <div className="text-Primary-Blue-30 p-5 border-r border-r-Natural-Gray-50">
                            <h1 className="text-[40px]">९२% हरवलेल्या व्यक्ती</h1>
                            <p className="text-3xl">४८ तासांत शोधल्या</p>
                        </div>
                        <div className="text-Primary-Blue-30 p-5 border-r border-r-Natural-Gray-50">
                            <h1 className="text-[40px]">७०% घट</h1>
                            <p className="text-3xl">साखळी चोरीच्या घटनांमध्ये</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}