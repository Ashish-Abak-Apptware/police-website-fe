import { Footer } from "@/components/Footer";
import { CommissionerQuote } from "@/components/Home/CommissionerQuote";
import { ComplaintSection } from "@/components/Home/ComplaintSection";
import { Header } from "@/components/Home/Header";
import { HelpSection } from "@/components/Home/HelpSection";
import { KumbhSection } from "@/components/Home/KumbhSection";
import LatestActivity from "@/components/Home/LetestActivity";
import { SearchPoliceStation } from "@/components/Home/SearchPoliceStation";
import SecurityActivity from "@/components/Home/SecurityActivitry";
import SocialMediaFeed from "@/components/Home/SocialMediaFeed";
import WhatsappSection from "@/components/Home/WhatsappSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <HelpSection/>
    <ComplaintSection/>
    <CommissionerQuote/>
    <WhatsappSection/>
    <SearchPoliceStation/>
    <SecurityActivity/>
    <LatestActivity/>
    <SocialMediaFeed/>
    <KumbhSection/>
    <Footer/>
    </>
  );
}
