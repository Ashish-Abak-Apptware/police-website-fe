import Image from "next/image";

export default function LatestActivity() {
  return (
    <section className="flex justify-center bg-bg-gradient bg-cover">
        <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] py-[50px] w-full px-4">

        <div className="mt-16">
        <h2 className="text-3xl font-bold mb-2 text-white inline-block py-2 rounded">अलीकडील घडामोडी</h2>
        <p className="text-gray-200 mb-6 mt-2">पोलिस दलात झालेल्या घडामोडींची येथे अत्यंत उत्साही घटनांची माहिती घ्या</p>

        <div className="flex justify-between px-8 gap-4">
            {/* first column */}
          <div className="flex flex-col gap-4">
          <div className="">
            <Image src="/images/activity/activity1.png" alt="प्रसंग तपशील येथे आहे" width={303} height={210} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/images/activity/activity4.png" alt="प्रसंग तपशील येथे आहे" width={303} height={436} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div className="">
            <Image src="/images/activity/activity9.png" alt="प्रसंग तपशील येथे आहे" width={303} height={457} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
          {/* second column */}
          <div className="flex flex-col gap-4">
          <div>
            <Image src="/images/activity/activity2.png" alt="प्रसंग तपशील येथे आहे" width={304} height={250} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div className="">
            <Image src="/images/activity/activity5.png" alt="प्रसंग तपशील येथे आहे" width={304} height={210} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/images/activity/activity8.png" alt="प्रसंग तपशील येथे आहे" width={304} height={400} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/images/activity/activity10.png" alt="प्रसंग तपशील येथे आहे" width={304} height={193} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
          {/* third column */}
          <div className="flex flex-col gap-4">
          <div>
            <Image src="/images/activity/activity3.png" alt="प्रसंग तपशील येथे आहे" width={303} height={220} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/images/activity/activity6.png" alt="प्रसंग तपशील येथे आहे" width={303} height={366} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/images/activity/activity7.png" alt="प्रसंग तपशील येथे आहे" width={303} height={156} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          <div>
            <Image src="/images/activity/activity11.png" alt="प्रसंग तपशील येथे आहे" width={303} height={299} className="rounded-xl" />
            <p className="text-sm text-center mt-2 text-white">प्रसंग तपशील येथे आहे</p>
          </div>
          </div>
          
          
          
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-white text-blue-900 px-5 py-2 rounded font-semibold border border-blue-900">अधिक वाचा</button>
        </div>
      </div>
    </section>
    </section>
  );
}
