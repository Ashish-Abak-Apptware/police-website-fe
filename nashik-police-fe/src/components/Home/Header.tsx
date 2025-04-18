'use client';
import { Button } from "../UI/Button";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { AIMLtag } from "../UI/AIMLtag";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "नमस्कार! मी आपली कशी मदत करू शकतो" }]);
  const [input, setInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend =async () => {
    if (!input.trim()) return;
    const newMessage=[...messages, { sender: "user", text: input }];
    setMessages(newMessage);
    setInput("");
    try {
      const response=await fetch("https://nskchatbot.apptware.com/ask",{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify({question:input}),
      })
      
      const data=await response.json();
      setMessages([...newMessage,{sender:'bot',text:data.answer}])
    } catch (error) {
      console.error("Error sending message:",error);
      setMessages([...newMessage,{sender:'bot',text:"क्षमस्व, काहीतरी चुकले आहे. कृपया पुन्हा प्रयत्न करा."}])
    }
    
  };

  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollTo({
        top: bottomRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <header className="flex justify-center bg-white mt-[65px] mb-8 px-4 md:px-1 xl:px-0 font-khand">
      <section className="relative md:flex md:flex-row flex flex-col xl:gap-[158px] md:justify-center bg-hero-section-mobile-bg md:bg-hero-section-bg bg-no-repeat bg-contain xl:w-[1280px] md:w-[768px] xl:pt-2 xl:h-[750px] md:h-[500px] w-[300px] h-[930px] px-2 pt-4 md:pt-2">
        {/* left content */}
        <div className="xl:w-[311px] justify-center flex flex-col gap-3 xl:pb-40 md:pb-[200px] pb-10 md:pl-18 xl:pl-0">
          <Image
            src="/assets/header/header6.png"
            alt="logo"
            height={80}
            width={80}
            className="xl:w-20 xl:h-20 w-12 h-12"
          />
          <h1 className=" xl:text-h2MediumKhand text-h3RegularKhand md:text-h4MediumKhand leading-[60px] md:leading-h4MediumKhand xl:leading-h2MediumKhand text-white">शासक नाही, सेवक.</h1>
          <p className="text-Natural-Gray-100 xl:text-h6RegularKhand xl:leading-h6RegularKhand text-sH1RegularKhand">नवीन ओळख, नवीन अस्तित्व </p>
          <Button child="अजून वाचा" />
        </div>
        {/* right slider for web*/}
        <div
        className="xl:h-[720px] md:h-[400px] md:block hidden">
        <div
    className={`flex flex-col xl:gap-[10px] md:gap-1 px-4 xl:w-[520px] md:w-[400px]`}
  >
          <div className="flex xl:gap-[10px] md:gap-1">
            <div className="w-[253px] xl:h-[100px] md:h-[70px] rounded-[15px]">
              <Image
                src="/assets/header/header1.png"
                alt="header1"
                height={500}
                width={500}
                className="w-full h-full"
              />
            </div>
            <Link href="/meeting" target="_blank">
            <div className="flex justify-between w-[226px] xl:h-[100px] md:h-[70px] rounded-[15px] text-white bg-Grey-70/20 p-5 cursor-pointer xl:text-p2ExtraLightInter text-p3ExtraLightInter leading-p2ExtraLightInter font-Inter">
              <h5>
                नियोजित आढावा
                <br /> बैठक
              </h5>
              <Image
                src="/assets/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90"
              />
            </div>
            </Link>
          </div>
          <div className="flex xl:gap-[10px] md:gap-1">
            <Link href="/e-meet" target="_blank">
            <div className="flex flex-col xl:gap-2 w-[145px] xl:h-[160px] md:h-[80px] rounded-[15px] bg-white xl:p-5 md:py-1 md:px-2 cursor-pointer">
              <Image
                src="/assets/header/header2.png"
                alt="header2"
                height={500}
                width={500}
                className="xl:w-12 md:w-8 xl:h-12 md:h-8"
              />
              <h5 className="text-Primary-Blue-30 xl:text-p2ExtraLightInter text-p4ExtraLightInter leading-p2ExtraLightInter font-Inter">पोलीस आयुक्त आपल्या दारी</h5>
              <p className="text-p5ExtraLightInter text-Natural-Gray-50">नियोजन करा </p>
            </div>
            </Link>
            <div className="relative flex flex-col xl:gap-2 w-[333px]  xl:h-[160px] md:h-[80px] rounded-[15px] bg-Grey-70/20 xl:p-5 md:py-1 md:px-2">
              <p className="text-Natural-Gray-50 text-p5ExtraLightInter">
                देवेंद्र फडणवीस <br className="xl:block md:hidden"/>
                नासिक सभा 2025
              </p>
              <h5 className="text-Natural-Gray-100 xl:text-p2ExtraLightInter text-p4ExtraLightInter xl:leading-p2ExtraLightInter md:leading-4.5 font-Inter">
                मुख्यमंत्री ७ कलमी <br />
                १०० दिवसांचा कार्यक्रम
              </h5>
              <p className="text-Natural-Gray-50 text-p5ExtraLightInter">अजून वाचा</p>
              <Image
                src="/assets/header/header3.png"
                alt="header3"
                height={500}
                width={500}
                className="absolute right-0 bottom-0 xl:w-[180px] xl:h-[220px] md:w-[80px] md:h-[105px]"
              />
            </div>
          </div>
          <div className="flex xl:gap-[10px] md:gap-1">
            <div className="w-[320px] xl:h-[150px] md:h-[100px] rounded-[15px] bg-header4-bg bg-no-repeat bg-cover content-end overflow-hidden">
              <p className="px-4 xl:py-2 md:py-1 bg-Secondary-Lime-Yellow w-full text-black text-p3ExtraLightInter leading-p3ExtraLightInter">
                कुंभमेळा रामकुंड
              </p>
            </div>
            <div className="w-[156px] xl:h-[150px] md:h-[100px] rounded-[15px] bg-white xl:pt-5 md:pt-2 overflow-hidden flex flex-col justify-between items-center">
              <Image
                src="/assets/header/header5.svg"
                alt="header5"
                height={500}
                width={500}
                className="xl:w-[96px] md:w-[50px] xl:h-[71px] md:h-[50px]"
              />
              <p className="px-4 xl:py-2 md:py-1 bg-Secondary-Lime-Yellow w-full text-black text-p3ExtraLightInter leading-p3ExtraLightInter">
                लवकरच येत आहे{" "}
              </p>
            </div>
          </div>
          <div className="flex xl:gap-[10px] md:gap-1">
            <div className="w-[237px] xl:h-[130px] md:h-[80px] rounded-[15px] bg-Grey-70/20 bg-header7-bg bg-no-repeat bg-contain md:bg-cover xl:p-5 md:p-2 flex flex-col xl:gap-2">
              <p className="text-Natural-Gray-100 xl:text-p2ExtraLightInter md:text-p3ExtraLightInter leading-p2ExtraLightInter">उत्तरा नगर</p>
              <h5 className="text-Natural-Gray-100 xl:text-p1RegularInter md:text-p2ExtraLightInter">रहदारी अद्यतन</h5>
              <p className="text-Natural-Gray-50 text-p5ExtraLightInter">अजून पहा</p>
            </div>
            <div onClick={() => setOpen(true)} className="flex justify-between w-[240px] xl:h-[130px] md:h-[80px] rounded-[15px] bg-white xl:p-5 md:p-2 text-Primary-Blue-30 cursor-pointer">
              <div>
                <h5 className="xl:text-p1RegularInter md:text-p4ExtraLightInter">सुकर जीवनमान </h5>
                <p className="xl:text-p4ExtraLightInter md:text-p4ExtraLightInter">
                  पासपोर्ट इंरिफीकेशन प्रक्रिया <br /> अर्ज बंद
                </p>
              </div>
              <Image
                src="/assets/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90 xl:w-10 xl:h-10 md:w-7 md:h-7 my-auto"
              />
            </div>
          </div>
          <div className="flex xl:gap-[10px] md:gap-1">
            <div className="w-[320px] xl:h-[130px] md:h-[80px] rounded-[15px] bg-header8-bg bg-no-repeat bg-cover content-end overflow-hidden">
              <p className="px-4 xl:py-2 md:py-1 bg-Primary-Blue-20 w-full text-white xl:text-p3ExtraLightInter md:text-p4ExtraLightInter leading-p3ExtraLightInter">
              जागतिक महिला दिनानिमित्त
              </p>
            </div>
            <div className="w-[156px] xl:h-[130px] md:h-[80px] rounded-[15px] bg-Primary-Blue-30 xl:py-5 xl:px-8 md:p-2 xl:flex xl:flex-col md:flex justify-between items-center">
            <h5 className="text-white xl:text-p2ExtraLightInter text-p4ExtraLightInter leading-p2ExtraLightInter font-Inter">
            नाशिक पोलिसांचा पुढाकार
              </h5>
              <Image
                src="/assets/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90 mr-auto"
              />
            </div>
          </div>
          {/* duplicate */}

        </div>
        </div>
        {/* right slider for mobile*/}
        <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
         className="h-fit  overflow-auto w-full md:hidden">
        <div className={`flex gap-[10px] animate-scroll-right ${
      isHovered ? 'pause' : ''
    }`}>
        <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px]">
        <div className="flex flex-col gap-[10px]">
            <div className="w-[150px] h-[102px] rounded-[15px] bg-header4-bg bg-no-repeat bg-contain content-end overflow-hidden">
              <p className="p-4 bg-Secondary-Lime-Yellow w-full text-black text-p5ExtraLightInter">
                कुंभमेळा रामकुंड
              </p>
            </div>
            <div className="w-[150px] h-[129px] rounded-[15px] bg-white pt-5 overflow-hidden flex flex-col justify-between items-center">
              <Image
                src="/assets/header/header5.svg"
                alt="header5"
                height={500}
                width={500}
                className="w-[96px] h-[71px]"
              />
              <p className="p-4 bg-Secondary-Lime-Yellow w-full text-black text-p5ExtraLightInter">
                लवकरच येत आहे{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-[151px] h-[135px] rounded-[15px] bg-Grey-70/20 bg-header7-bg bg-no-repeat bg-contain p-5 flex flex-col gap-2">
              <p className="text-Natural-Gray-100 text-p3ExtraLightInter leading-p2ExtraLightInter">उत्तरा नगर</p>
              <h5 className="text-Natural-Gray-100 text-p3ExtraLightInter leading-p2ExtraLightInter">रहदारी अद्यतन</h5>
              <p className="text-Natural-Gray-50 text-p5ExtraLightInter">अजून पहा</p>
            </div>
            <Link href="/meeting" target="_blank">
            <div className="flex justify-between w-[151px] h-[97px] rounded-[15px] text-white bg-Grey-70/20 p-5 cursor-pointer">
              <h5 className="text-p3ExtraLightInter leading-p2ExtraLightInter">
                नियोजित आढावा
                <br /> बैठक
              </h5>
              <Image
                src="/assets/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90"
              />
            </div>
            </Link>
          </div>
        </div>
          <div className="relative flex flex-col gap-2 w-[311px] h-[123px] rounded-[15px] bg-Grey-70/20 p-5 ">
              <p className="text-Natural-Gray-50 text-p5ExtraLightInter">
                देवेंद्र फडणवीस
                नासिक सभा 2025
              </p>
              <h5 className="text-Natural-Gray-100 text-p3ExtraLightInter leading-p2ExtraLightInter">
                मुख्यमंत्री ७ कलमी <br />
                १०० दिवसांचा कार्यक्रम
              </h5>
              <p className="text-Natural-Gray-50 text-p5ExtraLightInter">अजून वाचा</p>
              <Image
                src="/assets/header/header3.png"
                alt="header3"
                height={500}
                width={500}
                className="absolute right-0 bottom-0 xl:w-[180px] xl:h-[220px] w-[120px] h-[160px]"
              />
            </div>
        </div>
          <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[10px]">
          <Link href="/meeting" target="_blank">
            <div className="flex flex-col gap-2 w-[150px] h-[223px] rounded-[15px] bg-white p-5 cursor-pointer">
              <Image
                src="/assets/header/header2.png"
                alt="header2"
                height={500}
                width={500}
                className="w-12 h-12"
              />
              <h5 className="text-Primary-Blue-30 text-p3ExtraLightInter leading-p2ExtraLightInter">पोलीस आयुक्त आपल्या दारी</h5>
              <p className="text-Natural-Gray-50 text-p5ExtraLightInter">नियोजन करा </p>
            </div>
            </Link>
            <div className="flex flex-col gap-[10px]">
          <div className="w-[155px] h-[87px] rounded-[15px]">
              <Image
                src="/assets/header/header1.png"
                alt="header1"
                height={500}
                width={500}
                className="w-full h-full"
              />
            </div>
            <div onClick={() => setOpen(true)} className="xl:flex w-[155px] h-[130px] rounded-[15px] bg-white xl:p-5 p-3 text-Primary-Blue-30">
              <div>
                <h5 className="xl:text-lg text-p3ExtraLightInter leading-p2ExtraLightInter">सुकर जीवनमान </h5>
                <p className="xl:text-lg text-p5ExtraLightInter">
                  पासपोर्ट इंरिफीकेशन प्रक्रिया <br /> अर्ज बंद
                </p>
              </div>
              <Image
                src="/assets/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90 xl:w-10 xl:h-10 w-6 h-6 ml-auto"
              />
            </div>
          </div>
          </div>
          <div className="bg-Grey-70/20 w-[311px] h-[138px] rounded-[15px] p-5">
            <h3 className="text-white text-p3ExtraLightInter leading-p2ExtraLightInter">स्वच्छता अभियान</h3>
            <div className="flex justify-between">
            <div className="text-Natural-Gray-50">
              <p className="text-sH1RegularKhand">200k</p>
              <p className="text-p5ExtraLightInter">अभिलेखांचे निदणीकरण</p>
            </div>
            <div className="text-Natural-Gray-50">
              <p className="text-sH1RegularKhand">500</p>
              <p className="text-p5ExtraLightInter">अभिलेखांचे वर्गीकरण</p>
            </div>
            <div className="text-Natural-Gray-50">
              <p className="text-sH1RegularKhand">500</p>
              <p className="text-p5ExtraLightInter">अभिलेखांचे वर्गीकरण</p>
            </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-[156px] h-[192px] rounded-[15px] bg-header8-bg bg-no-repeat xl:bg-contain bg-cover content-end overflow-hidden">
              <p className="xl:p-4 p-3 bg-Primary-Blue-20 w-full text-white text-p5ExtraLightInter xl:text-lg">
              जागतिक महिला दिनानिमित्त
              </p>
            </div>
            <div className="w-[156px] h-[169px] rounded-[15px] bg-Primary-Blue-30 py-5 px-8 overflow-hidden flex flex-col justify-between items-center">
            <h5 className="text-white text-p3ExtraLightInter leading-p2ExtraLightInter">
            नाशिक पोलिसांचा पुढाकार
              </h5>
              <Image
                src="/assets/header/arrow.svg"
                alt="arrow"
                height={40}
                width={40}
                className="-rotate-90 mr-auto"
              />
            </div>
          </div>
          {/* duplicate for mobile scroll*/}
          
        </div>
        </div>
        {/* chatbot */}

        {isOpen && (
          <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={toggleChat}
          />
          )}

        <div className="absolute xl:bottom-0 lg:bottom-8 md:bottom-[40px] -bottom-8 left-0 z-40">
      {/* Minimized button */}
      {!isOpen ? (
        <div
          onClick={toggleChat}
          className=" p-3 px-5 bg-chatbot-bg bg-contain bg-no-repeat xl:w-[350px] xl:h-[150px] md:w-[200px] md:h-[100px] w-[220px] h-[140px] flex justify-between items-center gap-2 cursor-pointer relative z-50"
        >
          <div className="absolute xl:top-0 xl:left-32 md:left-14 -top-2 left-20 xl:scale-100 scale-75 text-[10px] px-1 rounded-sm"><AIMLtag/></div>
          <Image src="/assets/chatbot-avatar.svg" alt="Chatbot" width={200} height={200} className="absolute xl:-top-[180px] -top-[150px] -left-8 md:-left-6 xl:w-[180px] xl:h-[180px] w-[150px] h-[150px]"/>
          <p className="text-Primary-Blue-30 font-semibold font-Inter text-lg xl:text-h5RegularKhand md:text-sm  md:w-[120px] xl:w-[170px] xl:pt-6">आपला हक्काचा सहायक</p>
          <Image src="/assets/header/arrow.svg"
            alt="arrow"
            height={40}
            width={40}
            className="md:mt-auto xl:mb-1 md:mb-2 md:-mr-2 xl:mr-5 rotate-180"
            />
        </div>
      ) : (
        // Chatbox open
        <div className="md:w-[340px] w-[280px] rounded-2xl ">
          <div className="bg-chatbot-bg bg-no-repeat bg-cover bg-transparent px-4 py-2 text-Primary-Blue-30 font-semibold flex items-center justify-between">
            <span>आपला हक्काचा सहायक</span>
            <button onClick={toggleChat} className="text-xl font-bold text-black">
            <Image src="/assets/header/arrow-down.svg"
            alt="arrow"
            height={30}
            width={30}
            className=""
            />
            </button>
          </div>

          {/* Chat area */}
          <div ref={bottomRef} className="px-4 pb-4 md:pt-6 pt-7 space-y-3 h-[250px] overflow-y-auto rounded-tr-2xl border-x-2 border-t-2 border-yellow-400 bg-white">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`relative items-center rounded-xl px-3 pb-2 text-sm ${msg.sender === "bot" ? "bg-gray-100 text-Primary-Blue-30 pt-3" : "bg-Primary-Blue-80 text-Primary-Blue-30 pt-2"}`}>
                  {msg.sender === "bot" && <Image src="/assets/chatbot-avatar.svg" alt="bot" width={100} height={100} className="absolute -left-1 md:-top-6 -top-9 mr-2 md:w-[40px] md:h-[35px] w-[30px] h-[50px]" />}
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input field */}
          <div className="flex items-center border-t border-t-Natural-Gray-90 p-2 bg-white rounded-b-2xl border-x-2 border-b-2 border-yellow-400">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-1 rounded-full text-Natural-Gray-40 bg-Natural-Gray-100 border border-gray-300 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-primary text-white p-2 rounded-full"
            >
              <Image src="/assets/header/arrow.svg"
            alt="arrow"
            height={30}
            width={30}
            className="-rotate-90"
            />
            </button>
          </div>
        </div>
      )}
    </div>
        {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-4xl p-6 rounded-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 cursor-pointer"
            >
              <X/>
            </button>

            <h2 className="text-2xl font-bold text-Primary-Blue-30 mb-6">
              सुकर जीवनमान
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className=" overflow-hidden">
                <Image
                  src="/assets/header/passport.png"
                  alt="पासपोर्ट इंरिफीकेशन"
                  width={600}
                  height={300}
                  className="w-full xl:h-52 h-20 object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-natural-gray-10">
                    पासपोर्ट इंरिफीकेशन प्रक्रिया
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    पासपोर्टसाठी लागणारी पोलीस व्हेरिफीकेशनची ऑनलाइन प्रक्रिया येथे करा.
                  </p>
                  <button onClick={() => window.location.href = "https://portal2.passportindia.gov.in/AppOnlineProject/welcomeLink#"} className="bg-Primary-Blue-30 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
                    व्हेरिफीकेशनसाठी अर्ज करा
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className=" overflow-hidden">
                <Image
                  src="/assets/header/clearence.png"
                  alt="पोलीस सर्टिफिकेट"
                  width={600}
                  height={300}
                  className="w-full xl:h-52 h-20 object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-natural-gray-10">
                    पोलीस व्हेरिफिकेशन सर्टिफिकेट
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    नोकरी, शिक्षण किंवा इतर कारणांसाठी हवे असलेले सर्टिफिकेट प्राप्त करा.
                  </p>
                  <button onClick={() => window.location.href = "#"} className="bg-Primary-Blue-30 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
                    पोलीस सर्टिफिकेट मिळवा
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </section>
    </header>
  );
};
