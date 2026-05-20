import HeroBanner from "@/component/HeroBanner";
import OurServices from "@/component/OurServices";
import SpecializedDoctors from "@/component/SpecializedDoctors";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SpecializedDoctors />
      <OurServices />
    </>
  );
}
