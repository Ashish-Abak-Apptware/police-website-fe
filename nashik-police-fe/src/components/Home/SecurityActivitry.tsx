import Image from "next/image";
import { Button } from "../UI/Button";

export default function SecurityActivity() {
  return (
    <section className="flex justify-center bg-white">
        <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] py-[50px] w-full px-4">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-Natural-Gray-20">सुरक्षा आणि सेवा उपक्रम</h2>
          <p className="text-lg font-medium mb-4 text-Natural-Gray-20">
            1. नागरिकांच्या सुरक्षेसाठी आणि सेवे साठी पोलिस विभागाच्या विविध उपक्रमांची माहिती द्या
          </p>
          <p className="mb-6 text-Natural-Gray-50">
            शहरातील नागरिकांनी आपल्या परिसरातील झालेल्या अनुचित प्रकाराबद्दल सी.पी. व्हॉट्सअॅप नंबर 91333 23333 यावर संदेश स्वरूपात सूचना अथवा माहिती दिली तर त्याची दखल घेऊन तात्काळ कार्यवाही केली जाते.
          </p>
          <Button varient="blue" child="अधिक वाचा"/>
        </div>
        <div>
          <Image
            src="/images/security/security1.png"
            alt="Police Officers Working"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="text-left">
          <Image
            src="/images/security/security2.png"
            alt="सुरक्षित नाशिक"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <h3 className="font-semibold text-lg my-4 text-Natural-Gray-20">2. सुरक्षित नाशिक</h3>
          <p className="text-Natural-Gray-50 text-sm">
            नाशिक शहरातील नागरिकांना सुरक्षितता प्रदान करण्याकरिता तसेच गुन्हेगारीविरुद्ध प्रतिबंधक मोहिम...
          </p>
        </div>
        <div className="text-left">
          <Image
            src="/images/security/security3.png"
            alt="वॉक विथ पोलिस"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <h3 className="font-semibold text-lg my-4 text-Natural-Gray-20">3. वॉक विथ पोलिस</h3>
          <p className="text-Natural-Gray-50 text-sm">
            शहरातील पोलिस व नागरिक यांच्यातील जोडींग ट्रस्ट व नागरिकांचे सहभागीतेने चालणाऱ्यांबाबत जागर...
          </p>
        </div>
        <div className="text-left">
          <Image
            src="/images/security/security4.png"
            alt="सुधारित नाशिक"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <h3 className="font-semibold text-lg my-4 text-Natural-Gray-20">4. सुधारित नाशिक</h3>
          <p className="text-Natural-Gray-50 text-sm">
            सुधार, खडान्चे प्रबोधन, सरसकट हल्ले, हरवले बालगुन्हेगारी गुन्ह्यात अल्पवयीन मुलांचा सहभाग थांबवणे...
          </p>
        </div>
      </div>
    </section>
    </section>
  );
}
