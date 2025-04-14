import { InnerPage } from "@/components/InnerPage";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return [{ }];
}
export default function InnerPageParam({ params }: { params: { innerpage: string } }) {
  const innerpage = decodeURIComponent(params.innerpage);
  return (
    <>
    <Navbar/>
    <InnerPage/>
    </>
  );
}
