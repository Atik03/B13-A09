import HeroBanner from "@/component/HeroBanner";
import SpecializedDoctors from "@/component/SpecializedDoctors";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SpecializedDoctors />
    </>
  );
}
