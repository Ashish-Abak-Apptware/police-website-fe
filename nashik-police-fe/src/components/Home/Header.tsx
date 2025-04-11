import Image from "next/image";
import { Button } from "../UI/Button";

export const Header = () => {
  return (
    <header className="flex justify-center bg-white xl:pb-10">
      <section className="relative flex gap-[158px] justify-center bg-hero-section-bg bg-no-repeat bg-contain xl:w-[1280px] xl:mx-4 xl:pt-5 xl:h-[800px]">
        <div className="xl:w-[311px] justify-center flex flex-col gap-3 pb-40">
          <Image
            src="/image/header/header6.png"
            alt="logo"
            height={80}
            width={80}
          />
          <h1 className="text-5xl leading-18">शासक नाही,सेवक.</h1>
          <p className="">नवीन ओळख, नवीन अस्तित्व </p>
          <Button child="अजून वाचा" />
        </div>
        <div className="xl:h-[700px] overflow-auto">
        <div className="flex flex-col gap-[10px] px-4 xl:w-[520px]">
          <div className="flex gap-[10px]">
            <div className="w-[253px] h-[100px] rounded-[15px]">
              <Image
                src="/image/header/header1.png"
                alt="header1"
                height={500}
                width={500}
                className="w-full h-full"
              />
            </div>
            <div className="flex justify-between w-[226px] h-[100px] rounded-[15px] bg-Grey-70/20 p-5">
              <h5>
                नियोजित आढावा
                <br /> बैठक
              </h5>
              <Image
                src="/image/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90"
              />
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="flex flex-col gap-2 w-[145px] h-[160px] rounded-[15px] bg-white p-5">
              <Image
                src="/image/header/header2.png"
                alt="header2"
                height={500}
                width={500}
                className="w-12 h-12"
              />
              <h5 className="text-Primary-Blue-30">पोलीस आयुक्त आपल्या दारी</h5>
              <p>नियोजन करा </p>
            </div>
            <div className="relative flex flex-col gap-2 w-[333px] h-[160px] rounded-[15px] bg-Grey-70/20 p-5">
              <p>
                देवेंद्र फडणवीस <br />
                नासिक सभा 2025
              </p>
              <h5>
                मुख्यमंत्री ७ कलमी <br />
                १०० दिवसांचा कार्यक्रम
              </h5>
              <p>अजून वाचा</p>
              <Image
                src="/image/header/header3.png"
                alt="header3"
                height={500}
                width={500}
                className="absolute right-0 bottom-0 w-[180px] h-[220px]"
              />
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[320px] h-[170px] rounded-[15px] bg-header4-bg bg-no-repeat bg-contain content-end overflow-hidden">
              <p className="p-4 bg-Secondary-Lime-Yellow w-full text-black">
                कुंभमेळा रामकुंड
              </p>
            </div>
            <div className="w-[156px] h-[170px] rounded-[15px] bg-white pt-5 overflow-hidden flex flex-col justify-between items-center">
              <Image
                src="/image/header/header5.svg"
                alt="header5"
                height={500}
                width={500}
                className="w-[96px] h-[71px]"
              />
              <p className="p-4 bg-Secondary-Lime-Yellow w-full text-black">
                लवकरच येत आहे{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[237px] h-[130px] rounded-[15px] bg-Grey-70/20 bg-header7-bg bg-no-repeat bg-contain p-5 flex flex-col gap-2">
              <p>उत्तरा नगर</p>
              <h5>रहदारी अद्यतन</h5>
              <p>अजून पहा</p>
            </div>
            <div className="flex w-[240px] h-[130px] rounded-[15px] bg-white p-5 text-Primary-Blue-30">
              <div>
                <h5>सुकर जीवनमान </h5>
                <p>
                  पासपोर्ट इंरिफीकेशन प्रक्रिया <br /> अर्ज बंद
                </p>
              </div>
              <Image
                src="/image/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90"
              />
            </div>
          </div>
          <div className="bg-Grey-70/20 w-[488px] h-[123px] rounded-[15px] p-5">
            <h3>स्वच्छता अभियान</h3>
            <div className="text-Natural-Gray-50">
              <p>200k</p>
              <p>अभिलेखांचे निदणीकरण</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[320px] h-[170px] rounded-[15px] bg-header8-bg bg-no-repeat bg-contain content-end overflow-hidden">
              <p className="p-4 bg-Primary-Blue-20 w-full text-white">
              जागतिक महिला दिनानिमित्त
              </p>
            </div>
            <div className="w-[156px] h-[170px] rounded-[15px] bg-Primary-Blue-30 py-5 px-8 overflow-hidden flex flex-col justify-between items-center">
            <h5 className="text-white">
            नाशिक पोलिसांचा पुढाकार
              </h5>
              <Image
                src="/image/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90 mr-auto"
              />
            </div>
          </div>
        </div>
        </div>
        <div className="absolute bottom-9 -left-5 bg-header-bottom bg-no-repeat bg-contain w-[370px] h-[280px] flex gap-1 items-end justify-end pb-8 pr-8">
          <p className="text-Primary-Blue-30">
            आपला हक्काचा <br /> सहायक
          </p>
          <Image
            src="/image/header/arrow.svg"
            alt="arrow"
            height={40}
            width={40}
          />
        </div>
      </section>
    </header>
  );
};
