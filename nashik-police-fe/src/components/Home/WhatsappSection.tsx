'use client';
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "नोंदवलेले", value: 2600 },
  { name: "निकाली", value: 2000 },
  { name: "प्रलंबित", value: 200 },
  { name: "जनजागृती", value: 450 },
  { name: "तातडीचे", value: 1200 },
];

export default function WhatsappSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
    <section className="flex justify-center bg-bg-gradient font-khand">
    <div className=" md:flex md:flex-row flex flex-col gap-5 justify-between md:items-center xl:py-[55px] py-8 xl:px-[100px] md:px-10 pl-4 md:pl-0 xl:w-[1280px] md:w-[768px] w-full">
            <h1 className="xl:text-h3RegularKhand text-h4MediumKhand text-white">
            पोलीस आयुक्तांचा व्हॉट्सअ‍ॅप नंबर 
            </h1>
              <Link href={'https://api.whatsapp.com/send/?phone=9923323311'} target="_blank">
              <p className="flex gap-2 xl:text-h3RegularKhand text-h4MediumKhand items-center text-Natural-Gray-100"><Image src="/image/whatsapp.png" alt="whatsapp" height={50} width={50}/>९९२३३२३३११</p>
              </Link>
          </div>
    </section>
    <section className="flex justify-center mx-auto bg-white">
        <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] py-[50px] w-full px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col gap-[10px]">
      {/* Total Box */}
      <div className="bg-hero-section-bg bg-center text-Natural-Gray-100 p-6 rounded-2xl flex flex-col justify-center  xl:w-[327px] xl:h-[227px]">
        <h2 className="xl:text-h6RegularKhand text-p2ExtraLightInter mb-2">व्हॉट्सअ‍ॅपवरील एकूण संदेश</h2>
        <div className="xl:text-hLRegularKhand text-h3RegularKhand font-bold">2685</div>
      </div>

      {/* Important Messages */}
      <div className="bg-Primary-Blue-100 p-6 rounded-xl space-y-2 xl:w-[327px] xl:h-[316px]">
        <h2 className="xl:text-h6RegularKhand text-sH1RegularKhand text-Natural-Gray-50 mb-10">महत्त्वाचे संदेश</h2>
        <div className="text-Primary-Blue-30 font-semibold xl:text-h5RegularKhand text-h6RegularKhand mb-4">वाहतूक <span className="float-right">648</span></div>
        <div className="text-Natural-Gray-50 xl:text-h6RegularKhand text-sH1RegularKhand mb-4">गस्त <span className="float-right">23</span></div>
        <div className="text-Natural-Gray-50 xl:text-h6RegularKhand text-sH1RegularKhand mb-4">महिला सुरक्षा <span className="float-right">89</span></div>
        <div className="text-Natural-Gray-50 xl:text-h6RegularKhand text-sH1RegularKhand">अंमली पदार्थ <span className="float-right">11</span></div>
      </div>
    </div>

      {/* Bar Chart for web*/}
      <div className="bg-Primary-Blue-100 p-6 rounded-2xl w-[633px] h-[553px] xl:block hidden">
        <h2 className="text-h6RegularKhand text-Natural-Gray-50 mb-4">व्हॉट्सअ‍ॅपवरील एकूण संदेश</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={75}>
            <XAxis dataKey="name" tick={{ fill: "#7D7D7D", fontSize: 16 }} />
            <YAxis hide />
            <Tooltip contentStyle={{
            backgroundColor: "#7D7D7D",
            border: "1px solid #ddd",
            fill:"#000",
            fontSize: "12px",
          }}/>
            <Bar dataKey="value" fill="#C3C2FE" radius={[8, 8, 0, 0]} 
             onMouseEnter={(_, index) => setHoveredIndex(index)}
             onMouseLeave={() => setHoveredIndex(null)}
             // Override fill color conditionally
             shape={(props:any) => {
               const { x, y, width, height, index } = props;
               const fillColor = index === hoveredIndex ? "#6A5ACD" : "#C3C2FE"; // hover color
               return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={fillColor}
                />
              );
            }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Bar Chart for mobile*/}
      <div className="bg-Primary-Blue-100 p-6 rounded-2xl w-full h-[553px] block md:hidden">
        <h2 className="text-sH1RegularKhand text-Natural-Gray-50 mb-4">व्हॉट्सअ‍ॅपवरील एकूण संदेश</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={30}>
            <XAxis dataKey="name" tick={{ fill: "#7D7D7D", fontSize: 12 }} />
            <YAxis hide />
            <Tooltip contentStyle={{
            backgroundColor: "#7D7D7D",
            border: "1px solid #ddd",
            fill:"#000",
            fontSize: "12px",
          }}/>
            <Bar dataKey="value" fill="#C3C2FE" radius={[8, 8, 0, 0]} 
             onMouseEnter={(_, index) => setHoveredIndex(index)}
             onMouseLeave={() => setHoveredIndex(null)}
             // Override fill color conditionally
             shape={(props:any) => {
               const { x, y, width, height, index } = props;
               const fillColor = index === hoveredIndex ? "#6A5ACD" : "#C3C2FE"; // hover color
               return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={fillColor}
                />
              );
            }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Bar Chart for tab*/}
      <div className="bg-Primary-Blue-100 p-6 rounded-2xl w-[470px] h-[440px] md:block xl:hidden hidden">
        <h2 className="text-sH1RegularKhand text-Natural-Gray-50 mb-4">व्हॉट्सअ‍ॅपवरील एकूण संदेश</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={50}>
            <XAxis dataKey="name" tick={{ fill: "#7D7D7D", fontSize: 16 }} />
            <YAxis hide />
            <Tooltip contentStyle={{
            backgroundColor: "#7D7D7D",
            border: "1px solid #ddd",
            fill:"#000",
            fontSize: "12px",
          }}/>
            <Bar dataKey="value" fill="#C3C2FE" radius={[8, 8, 0, 0]} 
             onMouseEnter={(_, index) => setHoveredIndex(index)}
             onMouseLeave={() => setHoveredIndex(null)}
             // Override fill color conditionally
             shape={(props:any) => {
               const { x, y, width, height, index } = props;
               const fillColor = index === hoveredIndex ? "#6A5ACD" : "#C3C2FE"; // hover color
               return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={fillColor}
                />
              );
            }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="text-Natural-Gray-50 md:text-p2ExtraLightInter text-p4ExtraLightInter leading-p2ExtraLightInter flex gap-1 pt-5 md:float-right">
    <Clock size={20}/>
      <p> शेवटचे अपडेट 36 मिनिटांपूर्वी</p>
    </div>
    </section>
    </section>
    </>
  );
}
