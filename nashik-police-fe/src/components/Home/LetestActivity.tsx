import Image from "next/image";

export default function LatestActivity() {
  return (
    <section className="flex justify-center bg-bg-gradient bg-cover font-khand">
        <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] py-[50px] w-full px-4">

        <div className="">
        <h2 className="md:text-h3RegularKhand text-h4MediumKhand font-medium mb-2 text-white inline-block py-2 rounded">अलीकडील घडामोडी</h2>
        <p className="text-gray-200 mb-6 mt-2 md:text-sH1RegularKhand text-p3ExtraLightInter">पोलिस दलात झालेल्या घडामोडींची येथे अत्यंत उत्साही घटनांची माहिती घ्या</p>
          {/* grid for web */}
        <div className="md:flex justify-between xl:px-8 gap-4 hidden">
            {/* first column */}
          <div className="flex flex-col gap-4">
          <div className="">
            <Image src="/image/activity/activity1.png" alt="प्रसंग तपशील येथे आहे" width={303} height={210} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity4.png" alt="प्रसंग तपशील येथे आहे" width={303} height={436} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div className="">
            <Image src="/image/activity/activity9.png" alt="प्रसंग तपशील येथे आहे" width={303} height={457} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
          {/* second column */}
          <div className="flex flex-col gap-4">
          <div>
            <Image src="/image/activity/activity2.png" alt="प्रसंग तपशील येथे आहे" width={304} height={250} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div className="">
            <Image src="/image/activity/activity5.png" alt="प्रसंग तपशील येथे आहे" width={304} height={210} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity8.png" alt="प्रसंग तपशील येथे आहे" width={304} height={400} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity10.png" alt="प्रसंग तपशील येथे आहे" width={304} height={193} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
          {/* third column */}
          <div className="flex flex-col gap-4">
          <div>
            <Image src="/image/activity/activity3.png" alt="प्रसंग तपशील येथे आहे" width={303} height={220} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity6.png" alt="प्रसंग तपशील येथे आहे" width={303} height={366} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity7.png" alt="प्रसंग तपशील येथे आहे" width={303} height={156} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity11.png" alt="प्रसंग तपशील येथे आहे" width={303} height={299} className="rounded-xl" />
            <p className="text-p3ExtraLightInter leading-p3ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
        </div>
        {/* grid for mobile */}
        <div className="md:hidden flex justify-between xl:px-8 gap-4 ">
            {/* first column */}
          <div className="flex flex-col gap-4">
          <div className="">
            <Image src="/image/activity/activity1.png" alt="प्रसंग तपशील येथे आहे" width={166} height={119} className="rounded-xl w-[166px] h-[119px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity4.png" alt="प्रसंग तपशील येथे आहे" width={166} height={300} className="rounded-xl w-[166px] h-[282px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity11.png" alt="प्रसंग तपशील येथे आहे" width={166} height={201} className="rounded-xl w-[166px] h-[201px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          
          </div>
          {/* second column */}
          <div className="flex flex-col gap-4">
          <div className="">
            <Image src="/image/activity/activity2.png" alt="प्रसंग तपशील येथे आहे" width={166} height={119} className="rounded-xl w-[166px] h-[119px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity3.png" alt="प्रसंग तपशील येथे आहे" width={166} height={119} className="rounded-xl w-[166px] h-[119px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div className="">
            <Image src="/image/activity/activity5.png" alt="प्रसंग तपशील येथे आहे" width={166} height={119} className="rounded-xl w-[166px] h-[119px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity6.png" alt="प्रसंग तपशील येथे आहे" width={166} height={201} className="rounded-xl w-[166px] h-[201px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          
          </div>
          
        </div>
        {/* second row */}
        <div className="flex flex-col gap-4 mt-2 md:hidden">
          <div>
            <Image src="/image/activity/activity7.png" alt="प्रसंग तपशील येथे आहे" width={343} height={194} className="rounded-xl w-[343px] h-[194px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
            {/* third row */}
        <div className="flex gap-4 mt-2 md:hidden">
        <div className="">
            <Image src="/image/activity/activity9.png" alt="प्रसंग तपशील येथे आहे" width={166} height={261} className="rounded-xl w-[166px] h-[261px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div className="">
          <div>
            <Image src="/image/activity/activity8.png" alt="प्रसंग तपशील येथे आहे" width={166} height={105} className="rounded-xl w-[166px] h-[105px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/image/activity/activity10.png" alt="प्रसंग तपशील येथे आहे" width={166} height={126} className="rounded-xl w-[166px] h-[126px]" />
            <p className="text-p5ExtraLightInter text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
          </div>
        

        <div className="flex justify-center mt-6 w-full md:w-fit bg-white rounded border border-blue-900 mx-auto">
          <button className=" text-Primary-Blue-30 text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter px-5 py-2  font-semibold ">अधिक वाचा</button>
        </div>
      </div>
    </section>
    </section>
  );
}
