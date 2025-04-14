import { InnerPage } from "@/components/InnerPage";
import Navbar from "@/components/Navbar";

export default async function InnerPageParam({ params }:any) {
  const innerpage = decodeURIComponent(params.innerpage);
  return (
    <>
    <Navbar/>
    <InnerPage page={innerpage}/>
    </>
  );
}
