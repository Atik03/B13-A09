import HeroBanner from "@/component/HeroBanner";
import OurServices from "@/component/OurServices";
import SpecializedDoctors from "@/component/SpecializedDoctors";
import TopDoctor from "@/component/TopDoctor";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TopDoctor />
      <SpecializedDoctors />
      <OurServices />
    </>
  );
}
